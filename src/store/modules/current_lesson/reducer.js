import { UPDATE_INDEX } from "./actionsTypes";

export const currentLessonReducer = (state = 1, action) => {
  switch (action.type) {
    case UPDATE_INDEX:
      const { newIndex } = action;
      return newIndex;

    default:
      return state;
  }
};
