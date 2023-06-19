import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../imgs/logo.svg";
import { Container } from "./style";

export const FrameEdit = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <div className="header">
        <span>LOGO</span>
        <FontAwesomeIcon icon={faCircleUser} />
      </div>
      <div>
        <h1>Certificado</h1>
        <p className="text">Seu certificado será emitido no final do curso</p>
      </div>
    </Container>
  );
};
