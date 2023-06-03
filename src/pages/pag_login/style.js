import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    text-align: center;
    color: ${theme.white};
    font-size: 1rem;
    margin: 4rem auto 3rem;
  }

  .toRegister {
    display: flex;
    flex-direction: column;
    align-items: center;
    justift-content: center;
    color: ${theme.white};
  }
  .toRegister__question {
    text-indent: 0px;
  }

  .toRegister__link {
    color: ${theme.cyan};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    margin: 2rem auto;
  }

  button {
    margin: 1rem auto;
  }
`;
