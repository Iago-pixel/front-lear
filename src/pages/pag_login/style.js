import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/global";

const moveRight = keyframes`
  from {
    transform: translateX(-2rem)
  }

  to {
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  background-color: ${theme.main.background};
  min-height: 100vh;
  main {
    display: flex;
    padding: 0rem 10rem 0 4rem;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MainText = styled.section`
  animation: ${moveRight} 1s linear;
  .login-main-text {
    width: 30rem;
    h1 {
      color: ${theme.main.colorFont};
      font-size: 3rem;
      margin-bottom: 0;
    }
    p {
      color: ${theme.main.colorFont};
      font-size: 1.5rem;
    }
  }
  .skill-labs-company {
    color: ${theme.main.colorFont};
    font-weight: bold;
    margin-top: 4rem;
  }
`;

export const Login = styled.section`
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
    align-items: center;
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
  .login-with-social-network {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }
  .toRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .toRegister__question {
    color: ${theme.main.colorFont};
    margin: 0;
  }
  .toRegister__link {
    color: ${theme.link.colorFont};
  }
`;
