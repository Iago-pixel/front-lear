import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/global";
import rectangle from "../../imgs/rectangle.svg";

const moveLeft = keyframes`
  from {
    transform: translateX(2rem)
  }

  to {
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  background-image: url(${rectangle});
  background-repeat: no-repeat;
  background-position: right top;
  padding-bottom: 1rem;
  main {
    display: flex;
    justify-content: space-between;
    padding: 0 6rem 0;
  }
  h1 {
    color: ${theme.main.colorFont};
    font-size: 2rem;
    margin: 0 0 1.5rem;
    padding-left: 1rem;
  }
  a:hover {
    text-decoration: underline;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    a {
      color: ${theme.main.colorFont};
      margin: 0 0 1rem;
      font-size: 1.1rem;
    }
  }
  button {
    margin: 0.5rem 0;
    padding: 0;
  }
  .form__checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.input[0].width};
  }
  .toLogin {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${theme.input[0].width};
    margin-top: 0.5rem;
  }
  .toLogin__question {
    color: ${theme.main.colorFont};
    margin: 0;
  }
  .toLogin__link {
    color: ${theme.link.colorFont};
  }
  .main-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50vh;
    animation: ${moveLeft} 1s linear;
    h1 {
      font-size: 3.5rem;
      color: ${theme.main.colorFont};
    }
  }
`;
