import styled from "styled-components";
import { media } from "../../service/util";

export const mediaQueries = (container) => {
  const mediaContainer = styled.div`
    ${container} {
      ${media.desktop`
            img {
                max-width: 35rem;
                height: auto;
            }
            .border {
                max-width: 35rem;
                height: auto;
            }
        `}

      ${media.verticalTablet`
            img {
                max-width: 20rem;
                height: auto;
            }
            .border {
                max-width: 20rem;
                height: auto;
            }
      `}
      
      ${media.mobileG`
            img {
                max-width: 13rem;
                height: auto;
            }
            .border {
                max-width: 13rem;
                height: auto;
            }
            figcaption {
                text-align: left;
            }
        `}
    }
  `;
  return mediaContainer;
};
