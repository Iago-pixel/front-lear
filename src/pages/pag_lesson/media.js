import styled from "styled-components";
import { media } from "../../service/util";

export const mediaQueries = (container) => {
  const mediaContainer = styled.div`
    ${container} {
      ${media.desktop`
                    
            `}

      ${media.tablet`
             

            `}

            ${media.mobile`
                main {
                    flex-direction: column;
                    padding: 0;
                }
                
            `}
    }
  `;
  return mediaContainer;
};
