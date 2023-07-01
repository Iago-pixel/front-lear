import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.header`
  background-color: transparent;
  padding: 0 2rem;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head__button {
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
  .head__button--exit-only {
    background-color: transparent;
    border: none;
    display: ${({ hasExit }) => (hasExit ? "flex" : "none")};
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
    top: "2rem",
    left: "auto",
    right: "2.4rem",
    bottom: "auto",
    width: "10rem",
    borderRadius: theme.main.borderRadius,
    backgroundColor: theme.main.background,
    border: "none",
    padding: 0,
  },
};

export const NavContainer = styled.nav`
  background-color: ${theme.menu.background};
  border-radius: ${theme.main.borderRadius};
  width: 100%;
  height: 100%;
  ul {
    list-style-type: none;
    padding: 1rem 0 0.5rem;
    margin: 0;
  }
  li {
    padding: 0 1rem;
    margin-bottom: 1rem;
    text-align: right;
  }
  a {
    color: ${theme.main.colorFont};
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    border: none;
    color: ${theme.main.colorFont};
    &:hover {
      cursor: pointer;
    }
  }
`;
