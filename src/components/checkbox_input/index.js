import { Container } from "./style";

export const CheckboxInput = ({ name, text, register, errors, ...rest }) => {
  return (
    <Container errorsName={errors[name]} {...rest}>
      <input type="checkbox" id={name} name={name} {...register(name)} />
      <label for={name}>{text}</label>
      <span className="error">{errors[name]?.message}</span>
    </Container>
  );
};
