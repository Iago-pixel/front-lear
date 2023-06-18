import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./style";

export const BackButton = ({ restricted, ...rest }) => {
  return (
    <Container
      to={restricted ? "/dashboard_empresa" : "/area_do_usuario"}
      {...rest}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Container>
  );
};
