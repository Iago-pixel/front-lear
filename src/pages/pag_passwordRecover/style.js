import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  padding: 0;
  main {
    padding: 0 1rem;
    display:flex;
    justify-content:center;
  }
  h1 {
    color: ${theme.main.colorFont};
    font-size: 2.5rem;
    margin: 1rem 0 1.5rem;
    padding-left: 1rem;
  }
  p{
    color: ${theme.main.colorFont};
    font-size: 1.1rem;
    margin: 2rem 0 4rem;
    padding-left: 1rem;
  }
 
`;
export const RecoverContent = styled.section`
  
  padding: 2rem;
  border-radius: ${theme.main.borderRadius};
  background-color:rgba(136, 133, 133, 0.2);
  height:30rem;
  width:25rem;
  display:flex;
  flex-direction:column;
  align-items:center;
`