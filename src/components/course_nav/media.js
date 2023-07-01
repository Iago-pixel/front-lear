import styled from "styled-components";
import { media } from "../../service/util";

export const mediaQueries = (container, itemContainer) => {
  const mediaContainer = styled.div`
    ${container} {
      ${media.desktop`
            width: calc(100vw - (560px + 3rem));
            h1 {
                display: none;
            }
            ${itemContainer} {
                margin: 1rem 0;
                .number-box {
                    width: 1.5rem;
                    min-width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    margin-right: .5rem;
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

      ${media.verticalTablet`
            max-height: unset;
            max-width: unset;
            overflow-y: visible;
            width: 95vw;
            h1 {
                display: block;
            }
            ${itemContainer} {
                .number-box {
                    min-width: unset;
                }
            }
        `}
    }
  `;
  return mediaContainer;
};
