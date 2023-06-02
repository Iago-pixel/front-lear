import styled from "styled-components";

export const Container = styled.div`
  .text-and-menu {
    min-height: 100vh;
    width: 100%;
    @media (min-width: 1000px) {
      display: flex;
    }
  }
  .lesson {
    display: none;
    width: 60%;
    margin: 0 48px 0 0;
    padding: 16px 0 0 32px;
    @media (min-width: 1000px) {
      display: block;
    }
  }
  .module-nav {
    @media (min-width: 1000px) {
      width: 40%;
    }
  }
`;
