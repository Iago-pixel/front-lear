import { useState } from "react";

import { Container, customStyles, NavContainer } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";
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
      <div>children</div>
      <button onClick={openModal}>
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
              <Link to="/perfil">Area do aluno</Link>
            </li>
            <li>
              <button onClick={() => logout()}>Sair</button>
            </li>
          </ul>
        </NavContainer>
      </Modal>
    </Container>
  );
};
