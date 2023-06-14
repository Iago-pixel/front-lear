import { Container } from "./style";

export const Imagem = ({ src, alt, figcaption, ...rest }) => {
  return (
    <Container {...rest}>
      <div className="border">
        <img src={src} alt={alt} />
      </div>
      <figcaption>{figcaption}</figcaption>
    </Container>
  );
};
