import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  padding: 0 0 0 4rem;
  main {
    padding: 0 2rem;
  }
  h1 {
    color: ${theme.main.colorFont};
    font-size: ${theme.title.fontSize};
  }
  .main__title {
    padding: 0 0 0 1rem;
  }
`;

export const PerformanceContainer = styled.section`
  margin: 0;
  padding: 0 2rem;
  border-radius: ${theme.main.borderRadius};
  background-color: ${theme.genericBox.background};
  .progress {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
  }
`;
