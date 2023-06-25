import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  header {
    padding-left: 4rem;
  }
  main {
    padding: 0 4rem;
  }
  .article {
    padding: 2rem;
    margin-top: 2rem;
  }
  .article__images {
    margin: 1rem 0;
  }
  .helper-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.textCard.background};
    border-radius: ${theme.main.borderRadius};
    padding: 0 1rem 0 2rem;
    margin: 4rem 0;
    p {
      color: ${theme.main.colorFont};
      font-weight: bold;
    }
  }
  li {
    margin: 0.5rem 0;
  }
  table,
  td,
  th {
    border: 2px solid ${theme.main.background};
    border-collapse: collapse;
    text-align: center;
    padding: 0.1rem 1rem;
  }
  table {
    margin: 1rem;
  }
  th {
    background-color: ${theme.main.background};
  }
  .red {
    color: red;
  }
  .lightblue {
    color: lightblue;
  }
  .bold {
    font-weight: bold;
  }
`;
