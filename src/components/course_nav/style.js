import styled from "styled-components";

import { theme } from "../../styles/global";

export const Container = styled.section`
  background-color: transparent;
  max-width: 26rem;
  width: 30vw;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  h1 {
    padding-left: 1rem;
    color: ${theme.main.colorFont1};
    font-size: ${theme.title.fontSize};
  }
  ul {
    padding: 0;
  }
`;

export const ItemContainer = styled.li`
  border-radius: 7px;
  margin: 1.5rem 0;

  button {
    width: 95%;
    display: flex;
    padding: 0;
    align-items: center;
    border: none;
    border-radius: ${theme.main.borderRadius};
    background-color: ${({ selected }) =>
      selected ? theme.button[0].background : "transparent"};
    &:hover {
      cursor: pointer;
      background-color: ${theme.button[0].background};
      .name {
        color: ${theme.button[0].colorFont};
        font-weight: bold;
      }
    }
  }
  .number-box {
    background-color: ${theme.button[0].background};
    border-radius: 7px;
    height: 2.5rem;
    width: 2.5rem;
    min-width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 1.5rem;
  }
  .play {
    display: none;
  }
  .name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.2rem;
    font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
    color: ${({ selected }) =>
      selected ? theme.button[0].colorFont : theme.main.colorFont};
  }
`;
