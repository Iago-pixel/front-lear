import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  padding: 0 0 0 4rem;
  main {
    padding: 0 2rem;
  }
  a {
    font-size: 2rem;
    color: ${theme.link.colorFont};
  }
`;

export const ProfileHeader = styled.section`
  background-color: ${theme.genericBox.background};
  max-height: 10rem;
  border-radius: ${theme.main.borderRadius};
  position: relative;
  padding: 2rem 0 1rem 11rem;
  .profile__circle {
    color: ${theme.noImage.color};
    font-size: ${theme.noImage.fontSize};
    position: absolute;
    bottom: -6rem;
    left: 3rem;
  }
  .profile__header__name-bond {
    h1 {
      color: ${theme.main.colorFont};
      font-size: ${theme.title.fontSize};
      margin: 0;
    }
  }
  .profile__header__bond {
    position: absolute;
    color: ${theme.main.colorFont};
    font-size: ${theme.title.fontSize};
    font-weight: 100;
    right: 1rem;
    top: 1rem;
  }
  .profile__header__infs-box {
    display: inline-block;
    p {
      margin: 0;
      color: ${theme.main.colorFont};
      font-size: ${theme.title.fontSize};
    }
    .infs__field-name {
      font-size: 1rem;
    }
  }
  .profile__header__infs {
    display: flex;
  }
  .infs__email,
  .infs__number {
    padding: 2rem 0 0 2rem;
  }
`;

export const ProfileContent = styled.section`
  margin: 8rem 0 0 13rem;
  padding: 2rem;
  border-radius: ${theme.main.borderRadius};
  background-color: ${theme.genericBox.background};
`;
