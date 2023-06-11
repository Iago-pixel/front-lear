import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  header {
    padding-left: 4rem;
  }
  main {
    padding: 0 4rem;
  }
  .articles {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .article {
    margin: 0 0 2rem;
    padding: 0.5rem 2rem;
    &:first-child {
      padding: 2rem;
      margin-top: 2rem;
      grid-column-start: 1;
      grid-column-end: 3;
    }
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
`;
