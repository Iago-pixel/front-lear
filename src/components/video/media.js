import styled from "styled-components";
import { media } from "../../service/util";

export const mediaQueries = (container) => {
  const mediaContainer = styled.div`
    ${container} {
      ${media.desktop`
            max-height: 320px;
            max-width: 560px;
        `}
    }
  `;
  return mediaContainer;
};
