import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.section`
  font-size: 1.2rem;
  color: ${theme.gray};
  h2 {
    font-size: 2rem;
    margin: 0 0 16px;
  }
  .cake-activite {
    background-color: ${theme.cyan};
    border-radius: ${theme.borderRadius};
    padding: 16px 16px 32px;
  }
  .cake {
    text-align: center;
  }
  .cake__img {
    display: none;
    @media (min-width: 768px) {
      display: inline;
    }
  }
  .cake__img-mobile {
    width: 230px;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
