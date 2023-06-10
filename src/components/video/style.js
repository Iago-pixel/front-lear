import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  display: inline-block;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${theme.main.borderRadius};
  overflow: hidden;
`;
