import { Container, Lesson } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/global";

import { useCollapse } from "react-collapsed";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ModuleNav = ({ title, classes, ...rest }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  });
  const [lessonSelect, setLessonSelect] = useState(0);

  const navigate = useNavigate();

  const toLesson = (route, index) => {
    setLessonSelect(index);
    navigate(route);
  };

  return (
    <Container {...rest}>
      <h2 className="title">{title}</h2>
      <nav {...getCollapseProps()}>
        <ul>
          {classes
            .sort((lessonA, lessonB) => lessonA.index - lessonB.index)
            .map((lesson, index) => (
              <Lesson key={index} select={index === lessonSelect}>
                <button
                  className="lesson__button"
                  onClick={() => toLesson(lesson.route, index)}
                >
                  <div className="diamond">
                    <span className="title">{lesson.index}</span>
                  </div>
                  <div className="lesson__name title">{lesson.name}</div>
                </button>
              </Lesson>
            ))}
        </ul>
      </nav>
      <button className="extend-button" {...getToggleProps()}>
        {isExpanded ? (
          <FontAwesomeIcon icon={faAnglesUp} style={{ color: theme.white }} />
        ) : (
          <FontAwesomeIcon icon={faAnglesDown} style={{ color: theme.white }} />
        )}
      </button>
    </Container>
  );
};
