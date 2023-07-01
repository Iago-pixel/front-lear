import styled from "styled-components";
import { media } from "../../service/util";

export const mediaQueries = (container) => {
    const mediaContainer = styled.div`
        header {
            height: auto;
            padding-top: 15px;
        }
        ${media.mobileG`
            header{
                
                justify-content: space-between;
                flex-direction: column;
                
                button{
                    align-self: flex-end;
                }
            }
     
        
        `}
        ${container}{
            ${media.desktop`
                section{
                   width: 100%;

                   .module-nav__top{
                        width: auto;
                       
                   }

                   
                }
                ul{  
                    
                    grid-template-columns: 1fr;
                    justify-items: normal;
                }
                
            
            `}

            ${media.tablet`
                h1{
                    font-size: 1.2rem
                }
            
            `}

            ${media.mobileG`
              
              padding: 0 2rem;

             section{
                  padding: 5px 0;
             }

              h1{
                  font-size: 1rem;
                  margin: 45px 0;
                  text-align: center;
              }
              .svg-inline--fa{
                height: 0.7em;
              }
              .module-nav__top{
                      height: 2rem;
                     
              }

              h2{
                  font-size: 1rem
              }

          `}
           
          
        }
    
    
    `

    return mediaContainer
}