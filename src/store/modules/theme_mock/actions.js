import {
  CHANGE_MAIN_COLORS,
  CHANGE_MAIN_BUTTON,
  CHANGE_SECONDARY_BUTTON,
  CHANGE_TERTIARY_BUTTON,
  CHANGE_INPUT,
  CHANGE_ARTICLE_BACKGROUND,
  CHANGE_GENERIC_BOX_BACKGROUND,
  CHANGE_LINK_COLOR,
} from "./actionsTypes.js";

export const changeMainColors = (change) => ({
  type: CHANGE_MAIN_COLORS,
  change,
});

export const changeMainButton = (change) => ({
  type: CHANGE_MAIN_BUTTON,
  change,
});

export const changeSecondaryButton = (change) => ({
  type: CHANGE_SECONDARY_BUTTON,
  change,
});

export const changeTertiaryButton = (change) => ({
  type: CHANGE_TERTIARY_BUTTON,
  change,
});

export const changeInput = (change) => ({
  type: CHANGE_INPUT,
  change,
});

export const changeArticleBackground = (change) => ({
  type: CHANGE_ARTICLE_BACKGROUND,
  change,
});

export const changeGenericBoxBackground = (change) => ({
  type: CHANGE_GENERIC_BOX_BACKGROUND,
  change,
});

export const changeLinkColor = (change) => ({
  type: CHANGE_LINK_COLOR,
  change,
});
