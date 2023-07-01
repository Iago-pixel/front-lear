import styled from "styled-components";
import { media } from "../../service/util";

export const mediaQueries = (container) => {
  const mediaContainer = styled.div`
    ${container} {
      ${media.desktop`
                            
        `}

      ${media.tablet`

        `}

      ${media.verticalTablet`
      `}
      
      ${media.mobileG`
            button {
                font-size: 0.8rem;
                padding: 0.5rem;
            }
        `}
    }
  `;
  return mediaContainer;
};
