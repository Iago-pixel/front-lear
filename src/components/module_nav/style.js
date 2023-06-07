import styled from "styled-components";

import { theme } from "../../styles/global";

export const Container = styled.section`
  background-color: ${({ disabled }) =>
    disabled ? theme.buttonDisabled.background : theme.button[1].background};
  border-radius: ${theme.borderRadius};
  padding: 16px 0;
  width: 15rem;
  opacity: ${({ disabled }) => (disabled ? "0.2" : "1")};
  .module-nav__top {
    display: flex;
    justify-content: space-around;
    h2 {
      font-size: 1.2rem;
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
      color: ${({ disabled }) =>
        disabled ? theme.buttonDisabled.colorFont : theme.button[2].colorFont};
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 20px 20px 0;
    li {
      padding: 10px 0;
      a {
        color: ${theme.button[2].colorFont};
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
  .extend-button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
