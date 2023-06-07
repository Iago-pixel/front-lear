import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.header`
  background-color: transparent;
  padding: 0 2rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
    display: ${({ hasPerfil }) => (hasPerfil ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: ${theme.main.colorFont};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0)",
  },
  content: {
    top: "4rem",
    left: "auto",
    right: "2.4rem",
    bottom: "auto",
    width: "10rem",
    borderRadius: theme.borderRadius,
    backgroundColor: theme.background4,
    border: "none",
    padding: 0,
  },
};

export const NavContainer = styled.nav`
  ul {
    list-style-type: none;
    padding: 1rem 0 0.5rem;
  }
  li {
    padding: 0 1rem;
    margin-bottom: 1rem;
    text-align: right;
  }
  a {
    color: ${theme.main.colorFont};
    text-decoration: none;
  }
`;
