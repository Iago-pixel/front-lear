import styled from "styled-components";

import { theme } from "../../styles/global";

const lado = 1.5;

export const Container = styled.div`
  margin-top: 1.5rem;
  .lesson {
    display: flex;
    align-items: center;
  }
  .diamond {
    transform: rotate(45deg);
    background-color: ${theme.cyan};
    color: ${theme.gray};
    font-size: 1.2rem;
    width: ${lado}rem;
    height: ${lado}rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: relative;
    left: ${lado / 2 + 1.5}rem;
    span {
      transform: rotate(-45deg);
    }
  }
  .lesson__name {
    font-size: 1.2rem;
    height: ${lado * Math.sqrt(2)}rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0 0 ${lado}rem;
    color: ${theme.gray};
    background-color: ${theme.cyan};
    position: relative;
    left: 1.5rem;
  }
  h2 {
    margin: 0;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;
