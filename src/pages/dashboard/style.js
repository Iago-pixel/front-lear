import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.main`
  padding: 0 4rem;
  h1 {
    font-size: ${theme.title.fontSize};
    color: ${theme.main.colorFont};
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  li {
    padding: 2.3rem 0;
  }
`;
