import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  padding: 0 0 0 4rem;
  main {
    padding: 0 2rem;
  }
  .main__title {
    color: ${theme.main.colorFont};
    font-size: ${theme.title.fontSize};
    padding: 0 0 0 1rem;
  }
  .warning {
    font-size: 3rem;
    color: ${theme.main.colorFont};
    padding: 0 0 0 1rem;
  }
  .main__warning-box {
    height: 20rem;
    width: 40rem;
    display: flex;
    align-items: center;
  }
`;
