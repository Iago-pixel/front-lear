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

export const mediaQueries = (container) =>{
    const mediaContainer = styled.div`
       ${container}{
            ${media.desktop`
                h1{
                    font-size: 2.5rem
                }
     
            `}

            ${media.tablet`
                position: relative;
                &::before{
                    content: "";
                    background: rgb(0 0 0 / 66%);
                    min-width: 100vw;
                    min-height: 100vh;
                    position: absolute;
                }
                div {
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                }
                padding-bottom: 0;
                header{
                    justify-content: center;
                    position: relative;
                }
                main{
                    flex-direction: column-reverse; 
                    align-items: center;
                    justify-content: center;
                    padding: 0 2rem;
                    position: relative;
                    .main-title{
                        width: 100%;
                        height: auto;
                        justify-content: center;
                        animation: ${moveDown} 1s linear;
                        h1{
                            font-size: 1.5rem;
                            padding-left: 0;
                        }
                    }

                    .form-container{
                        width: 100%;
                        form > div{
                         
                            width: 100%;
                           
                        }

                    
                    }
                    select, .arrow, input, button{
                        height: 2rem;
                        box-sizing: border-box;
                        
                    }
                    
                    input, button, select, .toLogin{
                        width: 100%;
                        max-width: 100%;
                    
                    }

                 
                    .form__checkbox-box{
                        width: auto !important;
                        input{
                            width: auto;
                        }
                    }
                    #terms{
                        margin-right: -0.3rem;
                        transform: scale(1);
                        height: 0.8rem;
                    }
                    label{
                        font-size: 1rem;
                    }

                 
                }
            `}

            ${media.mobile`
                input::placeholder, select{
                        font-size: 0.9rem;
                    }
            `}

        }
    `
    return mediaContainer
}