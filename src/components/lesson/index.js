import { Container } from "./style";

export const Lesson = ({ children, title }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};
