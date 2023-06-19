import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  padding: 0 0 0 4rem;
  main {
    margin: 4rem 0 1rem 0;
  }
  p {
    color: ${theme.main.colorFont};
  }
  .color-inputs {
    display: flex;
  }
  .color-inputs__color-input {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  section {
    display: flex;
    justify-content: space-around;
  }
`;
