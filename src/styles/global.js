import { createGlobalStyle } from "styled-components";

export const theme = {
  background: "#121010",
  gray: "#333333",
  cyan: "#74E4E5",
  white: "#FFFFFF",
  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0 auto;
        max-width: 1440px;

        background-color: ${theme.background};
        @media (min-width: 1000px) {
            background-color: ${theme.white};
        }
    }
    main {
        padding: 1rem 1.5rem;
    }
    .title {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }
    .phrase {
        font-family: 'Raleway', sans-serif;
    }
    p {
        text-indent: 20px;
    }
    figure {
        margin: 0;
    }
    figcaption {
        font-size: 0.6rem;
        @media (min-width: 768px) {
            font-size: 0.8rem;
        }
    }
`;
