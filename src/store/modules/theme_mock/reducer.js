import {
  CHANGE_MAIN_COLORS,
  CHANGE_MAIN_BUTTON,
  CHANGE_SECONDARY_BUTTON,
  CHANGE_TERTIARY_BUTTON,
  CHANGE_INPUT,
  CHANGE_ARTICLE_BACKGROUND,
  CHANGE_GENERIC_BOX_BACKGROUND,
  CHANGE_LINK_COLOR,
} from "./actionsTypes";

import { theme } from "../../../styles/global";

export const themeMockReducer = (state = theme, action) => {
  switch (action.type) {
    case CHANGE_MAIN_COLORS:
      const { change } = action;
      return { ...state, main: { ...state.main, ...change } };

    default:
      return state;
  }
};
