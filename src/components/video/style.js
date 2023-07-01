import styled from "styled-components";
import { theme } from "../../styles/global";

export const Container = styled.div`
  display: inline-block;
  position: relative;
  max-height: 360px;
  max-width: 640px;
  height: calc((9 * 95vw) / 16);
  width: 95vw;
  border-radius: ${theme.main.borderRadius};
  overflow: hidden;
  iframe {
    aspect-ratio: "16 / 9";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
