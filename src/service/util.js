import { classes } from "./mocks";
import {css} from "styled-components";

export const searchLessonId = (module_id, index) => {
  const lesson = classes.filter(
    (lessonElement) =>
      lessonElement.module_id == module_id && lessonElement.index === index
  )[0];

  return lesson.id;
};

export const addInDiscord = () => {
  window.open("https://discord.gg/q9ZartMssw", "_blank", "noreferrer");
};

//media screens for responsibility
const screenBreakpoints = {
    desktop: 1024,
    tablet: 768,
    mobile: 376,
    mobileG: 425

}

//create media queries
export const media = Object
.keys(screenBreakpoints)
.reduce((acc, label)=>{
    acc[label] = (...args) => css`
        @media (max-width: ${screenBreakpoints[label]}px){
            ${css(...args)}
        }
    `
    return acc
}, {})