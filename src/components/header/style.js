import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.header`
  background-color: ${theme.background};
  color: ${theme.white};
  padding: 0 20px;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header__title {
    color; ${theme.white};
    font-size: 1.5rem;
    @media (min-width: 330px) {
      position: relative;
      left: 50%;
      transform: translate(-50%, 0);
    }
    @media (min-width: 768px) {
      position: static;
      transform: translate(0, 0);
    }
    &:hover{
      cursor: pointer;
    }
  }
  button {
    background-color: transparent;
    border: none;
    color: ${theme.white};
    .exit-word {
      display: none;
    }
    @media (min-width: 768px) {
      .exit-icon {
        display: none;
      }
      .exit-word {
        display: inline;
      }
      font-size: 1.7rem;
    }
    &:hover{
      cursor: pointer;
    }
  }
`;
