import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.button`
  background-color: transparent;
  border-color: ${theme.white};
  border-radius: ${theme.borderRadius};
  color: ${theme.white};
  width: 8rem;
  height: 3rem;
  font-size: 1.2rem;
`;
