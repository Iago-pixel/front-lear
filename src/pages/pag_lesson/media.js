import styled from "styled-components";
import { media } from "../../service/util";

export const mediaQueries = (container) => {
  const mediaContainer = styled.div`
    ${container} {
      ${media.tablet`
            .lesson {
                width: 100%;
                max-width: 600px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .video-container {
                display: flex;
                flex-direction: column-reverse;
                margin: 1rem 0 0; 
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
            .pag-lesson__course-nav {
                margin: 0rem 0 0 1rem;
            }
        `}

      ${media.verticalTablet`
            main {
                flex-direction: column;
                flex-wrap: wrap;
            }
            .lesson {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .video-container {
                display: flex;
                flex-direction: column-reverse;
                margin: 1rem 0 0; 
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
            .pag-lesson__course-nav {
                margin: 3rem 0 0;
            }
        `}
    }
  `;
  return mediaContainer;
};
