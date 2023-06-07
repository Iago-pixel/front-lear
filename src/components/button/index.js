import { Container } from "./style";

export const Button = ({ children, type = 0, size = 0, ...rest }) => {
  return (
    <Container type={type} size={size} {...rest}>
      {children}
    </Container>
  );
};
