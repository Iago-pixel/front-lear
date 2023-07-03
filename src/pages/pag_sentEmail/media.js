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

export const mediaQueries = (container, RecoverContent) =>{
    const mediaContainer = styled.div`
       ${container}{
            ${media.desktop`
                    h1{
                        font-size: 1.8rem;
                   }

                    p{
                        font-size: 1.1rem;
                   }
     
            `}

            ${media.tablet`
                                
                main{
                    margin-top:5rem;
                    width: 90%;
                   
               }

                
                ${RecoverContent}{
                    width: 60%;
                    animation: ${moveDown} 1s linear;

                    h1{
                        
                        font-size: 1.6rem;
                    } 
                    p{
                        font-size:1rem;
                        
                    }                 
                    

                    button{
                        height: 2rem;
                        width:14rem;
                        font-size: 1.2rem;
                }
            }                 
             

            `}

            ${media.mobile`
                
            main{
                    width: 90%;
                    height:100%;
                    align-items:center;
                    justify-content:center;
                }

                
                ${RecoverContent}{
                    animation: ${moveDown} 1s linear;
                    width: 75%;
                    padding:25px;

                    h1{
                        
                        font-size: 1.3rem;
                    }   
                    p{
                        font-size:1rem;
                    }               
                    
                    button{
                        height: 2rem;
                        width:13rem;
                        font-size: 0.9rem;
                }
                    }                 
                

             `}
   
    
}
`
return mediaContainer
}


