// react
import { useState, useEffect } from "react";

// router dom
import { useNavigate, useParams, Link } from "react-router-dom";

// components
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Video } from "../../components/video";
import { CourseNav } from "../../components/course_nav";

// style
import { Container } from "./style";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../styles/global";

// utils
import { searchLessonId } from "../../service/util";

// mocks
import { classes } from "../../service/mocks";

export const PagLesson = ({ ...rest }) => {
  const navigate = useNavigate();
  let { module_id, lesson_id } = useParams();

  const [currentLesson, setCurrentLesson] = useState(
    classes.filter((lesson) => lesson.id == lesson_id)[0]
  );
  console.log(classes.filter((lesson) => lesson.id == lesson_id)[0]);

  const [moduleLength] = useState(
    classes.filter((lesson) => lesson.module_id == module_id).length
  );

  const [initial, setInitial] = useState("hidden");
  const [animate, setAnimate] = useState("visible");

  useEffect(() => {
    setCurrentLesson(classes.filter((lesson) => lesson.id == lesson_id)[0]);
  }, [lesson_id]);

  const back = () => {
    navigate("/dashboard");
  };

  const backLesson = (index) => {
    if (index > 1) {
      const lessonId = searchLessonId(module_id, index - 1);
      navigate(`/${module_id}/${lessonId}`);
    }
  };

  const nextLesson = (index) => {
    if (index < moduleLength) {
      navigate(`/${module_id}/${index + 1}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      {...rest}
    >
      <Container>
        <Header hasPerfil>
          <Button type={2} onClick={() => back()}>
            Voltar
          </Button>
        </Header>
        <motion.main
          variants={containerVariants}
          initial={initial}
          animate={animate}
        >
          <section className="lesson">
            <motion.h1 variants={itemVariants}>{currentLesson.name}</motion.h1>
            <Video height="360" width="640" url={currentLesson.video} />
            <motion.p className="lesson__intro" variants={itemVariants}>
              {currentLesson.introduction}
            </motion.p>
            <Link
              to={`/${module_id}/${lesson_id}/conteudo`}
              className="lesson__material-link"
            >
              <motion.span variants={itemVariants}>
                Material de suporte
              </motion.span>
            </Link>
            <div className="lesson__move">
              <Button
                onClick={() => backLesson(currentLesson.index)}
                disabled={currentLesson.index === 1}
              >
                Anterior
              </Button>
              <Button
                onClick={() => nextLesson(currentLesson.index)}
                disabled={currentLesson.index === moduleLength}
              >
                Próxima
              </Button>
            </div>
          </section>
          <CourseNav
            classes={classes}
            className="pag-lesson__course-nav"
            setInitial={setInitial}
            setAnimate={setAnimate}
          />
        </motion.main>
      </Container>
    </motion.div>
  );
};
