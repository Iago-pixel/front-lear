import { Container } from "./style";

export const Lesson = ({ children, title, ...rest }) => {
  return (
    <Container {...rest}>
      <h1>{title}</h1>
      {children}
    </Container>
  );
};
