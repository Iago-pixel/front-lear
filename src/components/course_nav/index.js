import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container, ItemContainer } from "./style";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../styles/global";

import { searchLessonId } from "../../service/util";

export const CourseNav = ({ classes, ...rest }) => {
  let { module_id, lesson_id } = useParams();
  const [internalSelect, setInternalSelect] = useState(lesson_id);

  const navigate = useNavigate();

  const selector = (index) => {
    setInternalSelect(index);
    const newLessonId = searchLessonId(module_id, index);
    navigate(`/${module_id}/${newLessonId}`);
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
