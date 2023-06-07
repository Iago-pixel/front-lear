import styled from "styled-components";

import { theme } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${theme.input.background};
    border: none;
    border-radius: ${theme.main.borderRadius};
    width: ${theme.input.width};
    height: ${theme.input.height};
    color: ${theme.input.colorFont};
    font-weight: bold;
    padding: 0 0 0 1rem;
    &:hover {
      cursor: pointer;
    }
    option {
      color: ${theme.input.colorFont};
      font-weight: bold;
    }
  }
  .arrow {
    position: relative;
    right: 28px;
    height: 3rem;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    pointer-events: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
