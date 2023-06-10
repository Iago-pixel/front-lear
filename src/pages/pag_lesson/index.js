import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Video } from "../../components/video";
import { Link } from "react-router-dom";

import { Container } from "./style";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../styles/global";

import { classes } from "../../service/mocks";
import { CourseNav } from "../../components/course_nav";

import { searchLessonId } from "../../service/util";

export const PagLesson = ({ ...rest }) => {
  const navigate = useNavigate();
  let { module_id, lesson_id } = useParams();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(
    classes.filter((lesson) => lesson.id == lesson_id)[0]["index"]
  );
  const [moduleLength] = useState(
    classes.filter((lesson) => lesson.module_id == module_id).length
  );

  const back = () => {
    navigate("/dashboard");
  };

  const backLesson = (index) => {
    if (index > 1) {
      setCurrentLessonIndex(index - 1);
      const lessonId = searchLessonId(module_id, index - 1);
      navigate(`/${module_id}/${lessonId}`);
    }
  };

  const nextLesson = (index) => {
    if (index < moduleLength) {
      setCurrentLessonIndex(index + 1);
      navigate(`/${module_id}/${index + 1}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
          initial="hidden"
          animate="visible"
        >
          <section className="lesson">
            <motion.h1 variants={itemVariants}>Exercitando o cerebro</motion.h1>
            <Video
              height="360"
              width="640"
              url="https://www.youtube.com/embed/BegzsDKhK3Q"
            />
            <motion.p className="lesson__intro" variants={itemVariants}>
              Texto com uma descrição do conteúdo disponibilizado
              hahahahahahhahahahahahahahahahahhahahahahahahahahahahahahahahhahahahahahahahahahahahahaha
              ( três linhas )
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
                onClick={() => backLesson(currentLessonIndex)}
                disabled={currentLessonIndex === 1}
              >
                Anterior
              </Button>
              <Button
                onClick={() => nextLesson(currentLessonIndex)}
                disabled={currentLessonIndex === moduleLength}
              >
                Próxima
              </Button>
            </div>
          </section>
          <CourseNav classes={classes} className="pag-lesson__course-nav" />
        </motion.main>
      </Container>
    </motion.div>
  );
};
