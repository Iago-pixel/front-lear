import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.button`
  background-color: ${({ type, disabled }) =>
    !disabled ? theme.button[type].background : "transparent"};
  border-radius: ${theme.main.borderRadius};
  border: none;
  color: ${({ type, disabled }) =>
    !disabled ? theme.button[type].colorFont : theme.button[type].background};
  border: ${({ disabled, type }) =>
    !disabled ? "none" : "1px solid " + theme.button[type].background};
  min-width: 5.5rem;
  min-height: 2rem;
  width: ${({ size, type }) => theme.button[type].sizeWidth[size]};
  height: ${({ size, type }) => theme.button[type].sizeHeight[size]};
  font-size: 1rem;
  font-weight: bold;
  &:hover {
    cursor: ${({ disabled }) => (!disabled ? "pointer" : "not-allowed")};
    background-color: transparent;
    border: 1px solid ${({ type }) => theme.button[type].background};
    color: ${({ type }) => theme.button[type].background};
  }
`;
