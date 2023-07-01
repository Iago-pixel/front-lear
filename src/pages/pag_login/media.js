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

export const mediaQueries = (container, maintext, login) =>{
    const mediaContainer = styled.div`
        
       ${container}{
            ${media.desktop`
                    h1{
                        
                        font-size: 2rem;
                    
                    }

                    p{
                        font-size: 1rem;
                       
                    }

                    main{
                        padding:  0 2rem;

                        section:nth-child(1){
                            flex: 1.5 1 0%
                        }
                    }

                    input, button{
                        height: 2.5rem;
                    }


     
            `}

            ${media.tablet`
                display: flex;
                flex-direction: column;
                align-items: center;
                
                main{
                    width: 75%;
                    padding: 0 10px;
                    flex-direction: column;
                    align-items: center;

                   
                }

                ${maintext}{
                    flex: 1;
                    animation: ${moveDown} 1s linear;
                }

                ${login}{
                    width: 100%;
                    flex: 1;
                    justify-content: center;
                    div{
                        max-width: 400px;
                
                       
                    }
                    h1{
                        text-align: center;
                        padding-left: 0;
                        font-size: 1.8rem;
                    }
                    
                }

                input{
                        height: 2rem;
                    }

                input::placeholder{
                    font-size: 0.8rem
                }

                button{
                    height: 2rem;
                    font-size: 0.8rem;
                }

                .login-main-text {
                    width: 100%;
                    padding-right: 0;
                    h1{
                        
                        font-size: 1rem;
                        text-align: center;
                    }

                    p{
                        font-size: 0.8rem;
                        text-align: center;
                    }
                }

                .skill-labs-company{
                    text-align: center;
                    font-size: 0.8rem;
                    margin-top: 2rem;
                }

                .login-with-social-network{
                    align-items: center;
                    flex-direction: row;
                    justify-content: space-between;
                    div{
                        max-width: 185px
                    }

                    div:nth-child(1){
                        margin-right: 10px;
                    }
                }

                .toRegister__question, .toRegister__link, span{
                    font-size: 0.8rem
                }
             

            `}

            ${media.mobileG`
                .login-main-text{
                    width: 20rem;

                    h1{
                        font-size: 1rem;
                    }
                   
                }

                .skill-labs-company{
                    margin-top: 2rem;
                }

                .login-with-social-network{
                    flex-direction: row;
                }

                input{
                        height: 2rem;
                    }

                button{
                    height: 2rem;
                    font-size: 0.7rem;
                }
            `}

        }
    `
    return mediaContainer
}