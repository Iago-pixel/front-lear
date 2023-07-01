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

export const mediaQueries = (container,button) =>{
    const mediaContainer = styled.div`
       ${container}{
            
            ${media.desktop`

                main{
                    margin: 4rem 2rem;
                }
                .main__nav{
                
                animation: ${moveDown} 1s linear;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
            }

            .main__nav__button-box button{
                
                height:6rem;
                width:12rem;
                font-size:1.3rem;
            }
            `}

            ${media.tablet`
            main{
                width:80%;
                margin: 4rem 2rem;
                padding: 1rem;

            }
            h1{
                font-size:1.2rem;
            }
            button{
                height:1.5rem;
                width:6rem;
                font-size:0.8rem;
                padding:0.5rem;
            }
            .head__button--exit-only{
                font-size:1.2rem;
            }
            .main__nav{
                
                animation: ${moveDown} 1s linear;
                display: grid;
                grid-template-columns: 1fr 1fr;
            }

            .main__nav__button-box{
                justify-content:center;
            }

            .main__nav__button-box button{
                
                height:5rem;
                width:8rem;
                font-size:1rem;
            }

            `}

            ${media.mobile`
            

            main{
                width:80%;
                margin: 3rem 1.1rem;
                padding: 1rem;

            }
            h1{
                font-size:1.2rem;
            }
            button{
                height:1.5rem;
                width:6rem;
                font-size:0.8rem;
                padding:0.5rem;
            }

            .main__nav{
                animation: ${moveDown} 1s linear;
                display: flex;
                flex-direction:column;
            }
            .main__nav__button-box{
                justify-content:center;
               
            }
            .main__nav__button-box button{
                
                height:3rem;
                width:14rem;
                font-size:1rem;
                
            }

            
        `}
        }`
    return mediaContainer
}