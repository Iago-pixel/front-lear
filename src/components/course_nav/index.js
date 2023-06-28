// react redux
import { useSelector, useDispatch } from "react-redux";
import { updateIndex } from "../../store/modules/current_lesson/actions";

// style
import { Container, ItemContainer } from "./style";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../styles/global";

// mock
import { classes } from "../../service/mocks";

export const CourseNav = ({ ...rest }) => {
  const currentLessonindex = useSelector((state) => state.currentLesson);
  const dispatch = useDispatch();

  const selector = (buttonIndex) => {
    dispatch(updateIndex(buttonIndex));
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
                  selected={currentLessonindex == lesson.index}
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
