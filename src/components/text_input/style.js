import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  margin-bottom: ${({ errorsName }) => (errorsName ? "1.5rem" : "0.5rem")};
  position: relative;
  .error {
    position: absolute;
    bottom: -1rem;
    color: ${theme.input.colorError};
    font-size: 0.8rem;
  }
`;

export const InputStyled = styled.input`
  background-color: ${theme.input.background};
  border: none;
  border-radius: ${theme.main.borderRadius};
  width: ${theme.input.width};
  height: ${theme.input.height};
  color: ${theme.input.colorFont};
  font-weight: bold;
  padding: 0 0 0 1rem;
  margin-bottom: 0.5rem;
  &::-webkit-input-placeholder {
    /* Edge */
    color: ${theme.input.colorFont};
    font-size: 1rem;
    font-weight: bold;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${theme.input.colorFont};
    font-size: 1rem;
    font-weight: bold;
  }

  &::placeholder {
    color: ${theme.input.colorFont};
    font-size: 1rem;
    font-weight: bold;
  }
`;
