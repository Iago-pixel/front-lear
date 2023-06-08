import styled from "styled-components";

import { theme } from "../../styles/global";

export const Container = styled.section`
  background-color: transparent;
  width: 20rem;
  h1 {
    text-align: center;
    color: ${theme.colorFont1};
    font-size: 2rem;
  }
  ul {
    padding: 0;
  }
`;

export const ItemContainer = styled.li`
  border-radius: 7px;
  margin: 1.5rem 0;
  button {
    width: 100%;
    display: flex;
    padding: 0;
    align-items: center;
    border: none;
    border-radius: ${theme.main.borderRadius};
    background-color: ${({ selected }) =>
      selected ? theme.button[1].background : "transparent"};
    &:hover {
        cursor: pointer;
        background-color: ${theme.button[0].background};
        .name {
            color: ${theme.button[0].colorFont};
            font-weight: bold;
        }
    }
  }
  .number {
    background-color: ${theme.background2};
    border-radius: 7px;
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .name {
    padding: 0 1.5rem;
    font-size: 1.2rem;
    font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
    color: ${({ selected }) =>
      selected ? theme.colorFont2 : theme.colorFont1}};
  }
`;