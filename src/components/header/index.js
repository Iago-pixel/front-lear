// react
import { useState } from "react";

// router dom
import { Link, useNavigate } from "react-router-dom";

//style
import { Container, customStyles, NavContainer } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

// components
import Modal from "react-modal";

export const Header = ({ children, hasPerfil, ...rest }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <Container hasPerfil={hasPerfil} {...rest}>
      <div>{children}</div>
      <button className="head__button" onClick={openModal}>
        <FontAwesomeIcon icon={faCircleUser} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <NavContainer>
          <ul>
            <li>
              <Link to="/area_do_usuario">Area do aluno</Link>
            </li>
            <li>
              <button className="head__button" onClick={() => logout()}>
                Sair
              </button>
            </li>
          </ul>
        </NavContainer>
      </Modal>
      <button className="head__button--exit-only" onClick={() => logout()}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
    </Container>
  );
};
