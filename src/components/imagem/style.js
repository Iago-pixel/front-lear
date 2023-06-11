import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.figure`
  border-radius: ${theme.main.borderRadius};
  width: 300px;
  height: 200px;
  overflow: hidden;
  img {
    width: 300px;
    height: 200px;
  }
`;
