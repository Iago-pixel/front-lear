import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.article`
  color: ${theme.textCard.colorFont};
  background-color: ${theme.textCard.background};
  padding: 2rem;
  border-radius: ${theme.main.borderRadius};
  margin: 0 auto;
  h1 {
    font-size: ${theme.title.fontSize};
    margin: 0 0 1rem;
  }
  p {
    font-size: 1rem;
  }
`;
