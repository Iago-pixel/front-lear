import { classes } from "./mocks";

export const searchLessonId = (module_id, index) => {
  const lesson = classes.filter(
    (lessonElement) =>
      lessonElement.module_id == module_id && lessonElement.index === index
  )[0];

  return lesson.id;
};
