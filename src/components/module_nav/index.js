import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { useCollapse } from "react-collapsed";

import { Link } from "react-router-dom";

export const ModuleNav = ({ title, classes, disabled, ...rest }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <Container disabled={disabled} {...rest}>
      <div className="module-nav__top">
        <h2>
          {title} ({classes.length} aulas)
        </h2>
        {!disabled ? (
          <button className="extend-button" {...getToggleProps()}>
            {!isExpanded ? (
              <FontAwesomeIcon icon={faCaretRight} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
          </button>
        ) : (
          <div className="extend-button">
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        )}
      </div>
      <nav {...getCollapseProps()}>
        <ul>
          {classes
            .sort((lessonA, lessonB) => lessonA.index - lessonB.index)
            .map((lesson, index) => (
              <li key={index}>
                <Link to={lesson.route}>{lesson.name}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </Container>
  );
};
