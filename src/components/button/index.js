import { Container } from "./style";

export const Button = ({ children, ...rest }) => {
  return (
    <Container className="phrase" {...rest}>
      {children}
    </Container>
  );
};
