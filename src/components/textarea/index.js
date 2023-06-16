import { Container } from "./style";

export const Textarea = ({ name, register, placeholder, ...rest }) => {
  return (
    <Container
      name={name}
      placeholder={placeholder}
      rows="15"
      {...register(name)}
      {...rest}
    ></Container>
  );
};
