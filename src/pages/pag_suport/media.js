import styled, {keyframes} from "styled-components";
import { media } from "../../service/util";
const moveDown = keyframes`
  from {
    transform: translateY(-2rem)
  }

  to {
    transform: translateY(0)
  }
`;

export const mediaQueries = (container,ProfileContent) =>{
    const mediaContainer = styled.div`
       ${container}{
           
            ${media.tablet`
            padding:0 1rem;
                main{
                    width:100%;
                    padding:0;
                }
                header{
                    padding:0 1rem;
                }
                ${ProfileContent}{
                    animation: ${moveDown} 1s linear;
                    padding:2rem 0.5rem;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    margin-top:3rem;
                   
                }
                form{
                    padding:0;
                    width:100%;
                
                }
                textarea{
                    padding:1rem;
                    margin-bottom:3rem;
                    
                }
            
            `}

            ${media.mobile`
                padding:0 1rem;
                main{
                    width:100%;
                    padding:0;
                }
                header{
                    padding:0 1rem;
                }
                ${ProfileContent}{
                    animation: ${moveDown} 1s linear;
                    padding:1rem 0.5rem;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    margin-top:3rem;
                    height:60vh;
                }
                form{
                    padding:0;
                    width:100%;
                    height:100%;
                
                }
                textarea{
                    padding:1rem;
                    margin-bottom:3rem;
                    height:65%;
                    
                }
           
       ` }
       }`
    return mediaContainer
}