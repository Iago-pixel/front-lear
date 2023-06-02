import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.main`
  background-color: ${theme.white};
  .text-and-menu {
    min-height: 100vh;
    width: 100%;
    @media (min-width: 1000px) {
      display: flex;
    }
  }
  .lesson {
    @media (min-width: 1000px) {
      width: 60%;
      margin: 0 48px 0 0;
      padding: 16px 0 0 32px;
    }
  }
  .module-nav {
    display: none;
    @media (min-width: 1000px) {
      display: block;
      width: 40%;
    }
  }
`;
