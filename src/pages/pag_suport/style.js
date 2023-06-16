import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  padding: 0 0 0 4rem;
  main {
    padding: 0 2rem;
  }
  .main__title {
    color: ${theme.main.colorFont};
    font-size: ${theme.title.fontSize};
    padding: 0 0 0 1rem;
  }
`;

export const ProfileContent = styled.section`
  padding: 2rem 6rem 2rem 2rem;
  max-width: 50rem;
  border-radius: ${theme.main.borderRadius};
  background-color: ${theme.genericBox.background};
  form {
    position: relative;
    padding: 0 0 3rem;
  }
  .send-button {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
