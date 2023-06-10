import styled from "styled-components";

import { theme } from "../../styles/global";

export const Container = styled.section`
  display: inline-block;
  background-color: ${({ disabled }) =>
    disabled ? theme.buttonDisabled.background : theme.button[2].background};
  border-radius: ${theme.main.borderRadius};
  padding: 16px 0;
  opacity: ${({ disabled }) => (disabled ? "0.2" : "1")};
  .module-nav__top {
    padding: 0 2rem;
    width: ${theme.button[2].sizeWidth[2]};
    height: ${theme.button[2].sizeHeight[1]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: ${theme.title.fontSize};
      margin: 0;
      color: ${({ disabled }) =>
        disabled ? theme.buttonDisabled.colorFont : theme.button[2].colorFont};
    }
    button {
      &:hover {
        cursor: pointer;
      }
    }
    .extend-button {
      font-size: ${theme.button[2].arrowSize};
      color: ${({ disabled }) =>
        disabled ? theme.buttonDisabled.colorFont : theme.button[2].colorFont};
      background-color: transparent;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 20px 20px 0;
    li {
      padding: 10px 1rem;
      a {
        color: ${theme.button[2].colorFont};
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`;
