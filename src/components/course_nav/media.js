import styled from "styled-components";
import { media } from "../../service/util";

export const mediaQueries = (container, itemContainer) => {
  const mediaContainer = styled.div`
    ${container} {
      ${media.desktop`
                        
                `}

      ${media.tablet`
                

                `}

        ${media.mobile`
            overflow-y: visible;
            width: 95vw;
            margin: 1rem 0 0;
            max-height: unset;
            ${itemContainer} {
                margin: 1rem 0;
                .number-box {
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                }
                .number {
                    display: none;
                }
                .play {
                    display: inline;
                    font-size: 0.8rem;
                }
                .name {
                    font-size: 0.8rem;
                }
            }
        `}
    }
  `;
  return mediaContainer;
};
