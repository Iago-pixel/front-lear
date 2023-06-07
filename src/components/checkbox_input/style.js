import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  display: inline-block;
  color: ${theme.main.colorFont};
  input {
    margin-right: 0.7rem;
    -ms-transform: scale(1.5); /* IE */
    -moz-transform: scale(1.5); /* FF */
    -webkit-transform: scale(1.5); /* Safari and Chrome */
    -o-transform: scale(1.5); /* Opera */
    transform: scale(1.5);
  }
  label {
    display: inline-block;
    position: relative;
    bottom: 0.2rem;
  }
`;
