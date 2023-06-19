import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/global";

const pulse = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(1.3);
    opacity: 0;
  }
`;

export const Container = styled.div`
  .pulse-circle {
    animation: ${pulse} 1s linear infinite;
    border: solid 1px ${theme.button[0].background};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: absolute;
    left: 4rem;
    top: 6rem;
  }
  .button {
    position: absolute;
    left: 4rem;
    top: 6rem;
    background-color: ${theme.button[0].background};
    border: none;
    border-radius: 50%;
    font-size: 3rem;
    width: 4rem;
    height: 4rem;
    color: ${theme.button[0].colorFont};
    &:hover {
      border: 1px solid ${theme.button[0].background};
      background-color: ${theme.button[0].colorFont};
      color: ${theme.button[0].background};
      cursor: pointer;
    }
  }
  .edit-menu {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 20rem;
    background-color: ${theme.main.background};
    overflow: auto;
    .edit-menu__background {
      width: 100%;
      min-height: 100%;
      background-color: ${theme.genericBox.background};
    }
    border-radius: 0 15px 15px 0;
  }
  .edit-menu__top {
    height: 3rem;
    padding: 1.5rem 1rem 0;
  }
  .edit-menu__back {
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    border: none;
    background-color: transparent;
    color: ${theme.main.colorFont};
    font-size: 1rem;
    &:hover {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
  ul {
    list-style-type: none;
  }
  .edit-menu__button {
    padding: 2rem 0;
    color: ${theme.link.colorFont};
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const ShowBox = styled.div`
  display: ${({ show }) => (show ? "inherit" : "none")};
`;

export const Form = styled.form`
  margin: 1.5rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 0 1rem;
  p {
    color: ${theme.main.colorFont};
  }
`;
