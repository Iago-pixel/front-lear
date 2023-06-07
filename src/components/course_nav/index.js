import { useState } from "react";

import { Container, ItemContainer } from "./style";

export const CourseNav = ({ classes, select, ...rest }) => {
  const [internalSelect, setInternalSelect] = useState(select);

  const selector = (index) => {
    setInternalSelect(index);
  };

  return (
    <Container {...rest}>
      <h1>Conteúdo do curso</h1>
      <nav>
        <ul>
          {classes
            .sort((lessonA, lessonB) => lessonA.index - lessonB.index)
            .map((lesson, index) => (
              <ItemContainer key={index} selected={internalSelect === index}>
                <button onClick={() => selector(index)}>
                  <div className="number">{index + 1}</div>
                  <span className="name">{lesson.name}</span>
                </button>
              </ItemContainer>
            ))}
        </ul>
      </nav>
    </Container>
  );
};
