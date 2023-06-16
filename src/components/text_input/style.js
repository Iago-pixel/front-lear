import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  margin-bottom: ${({ errorsName }) => (errorsName ? "1.5rem" : "0.5rem")};
  position: relative;
  .error {
    position: absolute;
    bottom: -1rem;
    color: ${theme.input[0].colorError};
    font-size: 0.8rem;
  }
`;

export const InputStyled = styled.input`
  background-color: ${({ colorType }) => theme.input[colorType].background};
  border: none;
  border-radius: ${theme.main.borderRadius};
  width: ${({ colorType }) => theme.input[colorType].width};
  height: ${({ colorType }) => theme.input[colorType].height};
  color: ${({ colorType }) => theme.input[colorType].colorFont};
  font-weight: ${({ colorType }) => (colorType === 0 ? "bold" : "normal")};
  padding: 0 0 0 ${({ colorType }) => colorType + 1}rem;
  margin-bottom: 0.5rem;
  &::-webkit-input-placeholder {
    /* Edge */
    color: ${({ colorType }) => theme.input[colorType].colorFont};
    font-size: 1rem;
    font-weight: ${({ colorType }) => (colorType === 0 ? "bold" : "normal")};
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ colorType }) => theme.input[colorType].colorFont};
    font-size: 1rem;
    font-weight: ${({ colorType }) => (colorType === 0 ? "bold" : "normal")};
  }

  &::placeholder {
    color: ${({ colorType }) => theme.input[colorType].colorFont};
    font-size: 1rem;
    font-weight: ${({ colorType }) => (colorType === 0 ? "bold" : "normal")};
  }
`;
