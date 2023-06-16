import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.textarea`
  background-color: ${theme.input[1].background};
  border: none;
  border-radius: ${theme.main.borderRadius};
  color: ${theme.input[1].colorFont};
  padding: 1rem 0 0 2rem;
  margin-bottom: 0.5rem;
  width: calc(100% - 2rem);
  font-family: sans-serif;
  &::-webkit-input-placeholder {
    /* Edge */
    color: ${theme.input[1].colorFont};
    font-size: 1rem;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${theme.input[1].colorFont};
    font-size: 1rem;
  }

  &::placeholder {
    color: ${theme.input[1].colorFont};
    font-size: 1rem;
  }
`;
