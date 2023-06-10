import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { itemVatiants } from "../../styles/global";

import { useCollapse } from "react-collapsed";

import { Link } from "react-router-dom";

import { modules } from "../../service/mocks";

export const ModuleNav = ({ title, classes, disabled, ...rest }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <motion.div variants={itemVatiants}>
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
                  <Link to={`/${modules[0]["id"]}/${lesson.id}`}>
                    {lesson.index}. {lesson.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </motion.div>
  );
};
