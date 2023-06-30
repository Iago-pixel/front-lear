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

export const mediaQueries = (container,Header) =>{
    const mediaContainer = styled.div`
       ${container}{
          ${media.tablet`
                width:90%;
                display:flex;
                flex-direction:column;
                
                justify-content:justify;
                padding-left:20px;
                

                ${Header}{
                    width:90%;
                     padding-left:0;
                }
                main{
                    width:90%;
                    padding-left:1rem;

                }
               
                .main__warning-box{
                    width:90%;
                }
                .warning{
                    flex: 1;
                    animation: ${moveDown} 1s linear;
                    font-size:2rem;
                }


            `}

            ${media.mobile`
                width:90%;
                display:flex;
                flex-direction:column;
               
                justify-content:justify;
                padding-left:1rem;
                

                ${Header}{
                    width:90%;
                    padding-left:0;
                }
                main{
                    width:90%;
                    padding-left:0.8rem;

                }
               
                .main__warning-box{
                    width:90%;
                }
                .warning{
                    font-size:1.7rem;
                }
            
             `} 
       }`
    return mediaContainer
}