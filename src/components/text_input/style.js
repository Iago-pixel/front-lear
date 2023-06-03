import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.input`
  background-color: ${theme.gray};
  border: none;
  border-radius: ${theme.borderRadius};
  width: 15rem;
  height: 3rem;
  color: ${theme.white};
  padding: 0 0 0 1rem;
  &::-webkit-input-placeholder {
    /* Edge */
    color: ${theme.white};
    opacity: 0.5;
    font-size: 1rem;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${theme.white};
    opacity: 0.5;
    font-size: 1rem;
  }

  &::placeholder {
    color: ${theme.white};
    opacity: 0.5;
    font-size: 1rem;
  }
`;
