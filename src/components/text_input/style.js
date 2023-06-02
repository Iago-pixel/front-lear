import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.input`
  background-color: ${theme.gray};
  border-radius: ${theme.borderRadius};
  width: 17rem;
  height: 4rem;
  color: ${theme.white};
  &::-webkit-input-placeholder {
    /* Edge */
    color: ${theme.white};
    opacity: 0.5;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${theme.white};
    opacity: 0.5;
  }

  &::placeholder {
    color: ${theme.white};
    opacity: 0.5;
  }
`;
