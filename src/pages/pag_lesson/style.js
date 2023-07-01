import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  padding: 0 2.5vw;
  max-width: 1250px;
  margin: 0 auto;
  header {
    padding: 0;
  }
  main {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .lesson {
    width: 640px;
  }
  h1 {
    font-size: ${theme.title.fontSize};
    color: ${theme.main.colorFont};
    margin: 0 0 1rem;
  }
  .lesson__nav-mobile-buttons {
    display: none;
    button {
      border-radius: 0;
    }
  }
  .lesson__intro {
    color: ${theme.main.colorFont};
    max-width: 640px;
    word-break: break-word;
  }
  .lesson__material-link {
    color: ${theme.link.colorFont};
    &:hover {
      text-decoration: underline;
    }
  }
  .lesson__move {
    display: none;
    justify-content: space-between;
    width: 100%;
    margin: 1rem 0 3rem;
  }
  .pag-lesson__course-nav {
    margin: 3rem 0 0 0.5rem;
  }
`;
