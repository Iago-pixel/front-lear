import { Container } from "./style";

export const Imagem = ({ src, alt, figcaption, ...rest }) => {
  return (
    <Container {...rest}>
      <img src={src} alt={alt} />
      <figcaption>{figcaption}</figcaption>
    </Container>
  );
};
