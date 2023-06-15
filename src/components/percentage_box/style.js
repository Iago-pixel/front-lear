import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: ${theme.main.colorFont};
    margin: 0.5rem 0 1.5rem;
    font-size: ${({ fontSize }) => fontSize};
  }
`;
