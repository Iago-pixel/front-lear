import styled from "styled-components";

import { theme } from "../../styles/global";

const lado = 1.5;

export const Container = styled.div`
  background-color: ${theme.gray};
  border-radius: 15px;
  padding: 16px;
  min-width: 35%;
  min-height: 80%;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: ${theme.white};
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .extend-button {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    font-size: 2rem;
    @media (min-width: 1000px) {
      display: none;
    }
  }
  @media (min-width: 1000px) {
    padding: 16px 16px 32px;
  }
`;

export const Lesson = styled.li`
  margin-top: 1.5rem;
  .lesson__button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    width: 100%;
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
    span {
      transform: rotate(-45deg);
    }
  }
  .lesson__name {
    font-size: 1.2rem;
    height: ${lado * Math.sqrt(2)}rem;
    width: 90%;
    display: flex;
    align-items: center;
    position: relative;
    left: ${-lado / 2}rem;
    padding: 0 0 0 ${lado}rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${theme.white};
    border-radius: 0 15px 15px 0;
    @media (min-width: 1000px) {
      color: ${({ select }) => (select ? theme.gray : theme.white)};
      background-color: ${({ select }) =>
        select ? theme.cyan : "transparent"};
      cursor: pointer;
      transition: 200ms linear;
      &:hover {
        color: ${theme.gray};
        background-color: ${theme.cyan};
      }
    }
  }
`;
