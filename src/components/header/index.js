import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/global";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const togo = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <h1 onClick={() => togo("/")} className="header__title title">
        Curson Frontend
      </h1>
      <button className="phrase" onClick={() => togo("/login")}>
        <FontAwesomeIcon
          icon={faRightFromBracket}
          size="2xl"
          style={{ color: theme.white }}
          className="exit-icon"
        />
        <span className="exit-word">Sair</span>
      </button>
    </Container>
  );
};
