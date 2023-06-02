import { Container } from "./style";

export const LessonTitle = ({ index, name, ...rest }) => {
  return (
    <Container {...rest}>
      <div className="lesson">
        <div className="diamond">
          <span className="title">{index}</span>
        </div>
        <h2 className="lesson__name title">{name}</h2>
      </div>
    </Container>
  );
};
