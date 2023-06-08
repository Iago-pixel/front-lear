import { Container, InputStyled } from "./style";

export const TextInput = ({
  name,
  register,
  errors,
  placeholder,
  type = "text",
  ...rest
}) => {
  return (
    <Container errorsName={errors[name]} {...rest}>
      <InputStyled
        name={name}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
      <span className="error">{errors[name]?.message}</span>
    </Container>
  );
};
