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
                        font-size: 2rem;
                        
                    }

                    p{
                        font-size: 1rem;
                       
                    }
     
            `}

            ${media.tablet`
                                
                main{
                    margin-top:5rem;
                    width: 90%;
                   
               }

                
                ${RecoverContent}{
                    width: 60%;
                    

                    h1{
                        
                        font-size: 2.3rem;
                    }                  
                    form{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        
                    }

                    input{
                        height: 2rem;
                        width:15rem;
                        
                    }

                    input::placeholder{
                        font-size: 0.8rem;
                    }
                    .error{
                        margin-bottom:0.3rem;
                        padding-left:8px;
                    }

                    button{
                        height: 2rem;
                        width:16rem;
                        font-size: 1rem;
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
                    width: 75%;
                    padding:25px;

                    h1{
                        
                        font-size: 1.8rem;
                    }                  
                    form{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        padding:10px;
                    }

                    input{
                        height: 2rem;
                        width:14rem;
                        
                        
                    }

                    input::placeholder{
                        font-size: 0.8rem;
                    }
                    .error{
                        margin-bottom:0.3rem;
                        padding-left:8px;
                    }

                    button{
                        height: 2rem;
                        width:14rem;
                        font-size: 1rem;
                }
                    }                 
                

             `}
   
    
}
`
return mediaContainer
}


