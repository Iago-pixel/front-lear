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
            padding: 0 .5rem;
            header {
                padding: 0;
            }
            main {
                flex-direction: column;
                padding: 0;
            }
            .lesson {
                width: 95vw;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .video-container {
                display: flex;
                flex-direction: column-reverse;
                margin: 1rem 0 0;
                
            }
            .video--mobile {
                display: inline-block;
            }
            .video--desktop-large {
                display: none;
            }
            .lesson__intro {
                display: none;
            }
            .lesson__material-link {
                display: none;
            }
            .lesson__nav-mobile-buttons {
                display: flex;
            }
        `}
    }
  `;
  return mediaContainer;
};
