import styled from "styled-components";

import { theme } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  margin-bottom: ${({ errorsName }) => (errorsName ? "1.5rem" : "0.5rem")};
  position: relative;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: ${theme.input.background};
    border: none;
    border-radius: ${theme.main.borderRadius};
    width: ${theme.input.selectWidth};
    height: ${theme.input.height};
    color: ${theme.input.colorFont};
    font-weight: bold;
    font-size: 1rem;
    padding: 0 0 0 1rem;
    margin-bottom: 0.5rem;
    &:hover {
      cursor: pointer;
    }
  }
  .arrow {
    position: relative;
    right: 28px;
    width: 0;
    height: 3rem;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    pointer-events: none;
    &:hover {
      cursor: pointer;
    }
  }
  .error {
    position: absolute;
    bottom: -1rem;
    color: ${theme.input.colorError};
    font-size: 0.8rem;
  }
`;
