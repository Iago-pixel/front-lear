// react
import { useState } from "react";

// router dom
import { useNavigate, useParams } from "react-router-dom";

// style
import { Container, ItemContainer } from "./style";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../styles/global";

// utils
import { searchLessonId } from "../../service/util";

export const CourseNav = ({ classes, setInitial, setAnimate, ...rest }) => {
  let { module_id, lesson_id } = useParams();
  const [internalSelect, setInternalSelect] = useState(lesson_id);

  const navigate = useNavigate();

  const selector = (index) => {
    setInternalSelect(index);
    setInitial("visible");
    setAnimate("hidden");
    const newLessonId = searchLessonId(module_id, index);
    setTimeout(() => {
      navigate(`/nome_empresa/${module_id}/${newLessonId}`);
      setInitial("hidden");
      setAnimate("visible");
    }, 500);
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Container {...rest}>
        <motion.h1 variants={itemVariants}>Conteúdo do curso</motion.h1>
        <nav>
          <ul>
            {classes
              .sort((lessonA, lessonB) => lessonA.index - lessonB.index)
              .map((lesson, index) => (
                <ItemContainer
                  key={index}
                  selected={internalSelect === lesson.index}
                >
                  <motion.button
                    onClick={() => selector(lesson.index)}
                    variants={itemVariants}
                  >
                    <div className="number">{lesson.index}</div>
                    <span className="name">{lesson.name}</span>
                  </motion.button>
                </ItemContainer>
              ))}
          </ul>
        </nav>
      </Container>
    </motion.div>
  );
};
