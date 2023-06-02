import { Container } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../styles/global";

export const Header = () => {
  const logaut = () => {};

  return (
    <Container>
      <h1 className="header__title title">Curson Frontend</h1>
      <button className="phrase" onClick={() => logaut()}>
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
