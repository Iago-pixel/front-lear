import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  main {
    background: ${theme.menu.background};
    border-radius: ${theme.main.borderRadius};
    margin: 0 8rem;
    padding: 2rem 4rem;
  }
  h1 {
    color: ${theme.main.colorFont};
    font-size: ${theme.title.fontSize};
    margin: 0 0 1rem;
  }
  .main__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main__header button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .main__nav {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .main__nav__button-box {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
  .main__nav__button-box:nth-child(2),
  .main__nav__button-box:nth-child(5) {
    justify-content: center;
  }
  .main__nav__button-box:nth-child(3),
  .main__nav__button-box:nth-child(6) {
    justify-content: flex-end;
  }
`;
