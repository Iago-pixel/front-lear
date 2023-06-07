import { Container } from "./style";

export const CheckboxInput = ({ name, text, ...rest }) => {
  return (
    <Container>
      <input type="checkbox" id={name} name={name} {...rest} />
      <label for={name}>{text}</label>
    </Container>
  );
};
