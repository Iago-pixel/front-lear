import { Container } from "./style";

// responsibility
import { mediaQueries } from "./media";
const MediaContainer = mediaQueries(Container);

export const Imagem = ({ src, alt, figcaption, width, heigth, ...rest }) => {
  return (
    <MediaContainer>
      <Container width={width} heigth={heigth} {...rest}>
        <div className="border">
          <img src={src} alt={alt} width={width} height={heigth} />
        </div>
        <figcaption>{figcaption}</figcaption>
      </Container>
    </MediaContainer>
  );
};
