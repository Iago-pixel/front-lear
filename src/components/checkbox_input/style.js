import styled from "styled-components";
import { theme } from "../../styles/global";

const scale = 2;

export const Container = styled.div`
  display: inline-block;
  color: ${theme.main.colorFont};
  margin-bottom: ${({ errorsName }) => (errorsName ? "1.5rem" : "0.5rem")};
  input {
    margin-right: 0.7rem;
    -ms-transform: scale(${scale}); /* IE */
    -moz-transform: scale(${scale}); /* FF */
    -webkit-transform: scale(${scale}); /* Safari and Chrome */
    -o-transform: scale(${scale}); /* Opera */
    transform: scale(${scale});
  }
  label {
    display: inline-block;
    font-size: 1rem;
    padding-left: 1rem;
  }
  .error {
    color: ${theme.input.colorError};
    font-size: 0.8rem;
  }
`;
