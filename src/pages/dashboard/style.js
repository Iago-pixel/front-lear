import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.main`
 
  padding: 0 4rem;
  h1 {
    font-size: ${theme.title.fontSize};
    color: ${theme.main.colorFont};
    margin: 30px 0;
  }
  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 0;
    gap: 40px 120px
  }
  li {
    list-style: none;
    width: 100%;
  }
  section{
    width: 100%;
  }
  section > div{
    width: auto !important;
     
  }
`;
