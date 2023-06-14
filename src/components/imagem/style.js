import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.figure`
  width: ${({ width }) => width};
  img {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
  .border {
    border-radius: ${theme.main.borderRadius};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    overflow: hidden;
  }
  figcaption {
    font-size: 0.6rem;
    text-align: center;
  }
`;
