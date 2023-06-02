import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.footer`
  background-color: ${theme.background};
  color: ${theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 100%;
  font-size: 0.8rem;
  padding-top: 1rem;
`;
