import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./style";

export const BackButton = ({ companyAccess, ...rest }) => {
  return (
    <Container
      to={companyAccess ? "/dashboard" : "/nome_empresa/area_do_usuario"}
      {...rest}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Container>
  );
};
