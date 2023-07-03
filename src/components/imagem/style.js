import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.figure`
  width: ${({ width }) => width};
  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    max-width: 50rem;
    max-height: auto;
  }
  .border {
    border-radius: ${theme.main.borderRadius};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    max-width: 50rem;
    max-height: auto;
    overflow: hidden;
  }
  figcaption {
    width: 100%;
    font-size: 0.6rem;
    text-align: center;
  }
`;
