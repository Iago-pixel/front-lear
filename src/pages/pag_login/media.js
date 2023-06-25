import styled from "styled-components";
import { media } from "../../service/util";


export const mediaQueries = (container, login) =>{
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
                display: flex;
                flex-direction: column;
                align-items: center;

                main{
                    width: 75%;
                    padding: 0 10px;
                    flex-direction: column;
                    align-items: center;
                }
                
                ${login}{
                    h1{
                        text-align: center;
                        padding-left: 0;
                    }
                    width: 100%;
                    div{
                        max-width: 100%;
                    }
                }
                     
                .login-main-text {
                    width: 25rem;
                    padding-right: 0;
                    h1{
                        
                        font-size: 2.2rem;
                        text-align: center;
                    }

                    p{
                        font-size: 1rem;
                        text-align: center;
                    }
                }

                .skill-labs-company{
                    text-align: center
                }

                .login-with-social-network{
                    align-items: center;
                }

            `}

            ${media.mobile`
                .login-main-text{
                    width: 16rem;

                    h1{
                        font-size: 1.5rem;
                    }

                   
                }
            
            `}

        }
    `
    return mediaContainer
}