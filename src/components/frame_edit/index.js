import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../imgs/logo.svg";

export const FrameEdit = ({ ...rest }) => {
  return (
    <div {...rest}>
      <header>
        <img src={logo} alt="" />
        <FontAwesomeIcon icon={faCircleUser} />
      </header>
      <main>
        <h1>Certificado</h1>
        <p>Seu certificado será emitido no final do curso</p>
      </main>
    </div>
  );
};
