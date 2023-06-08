import { createGlobalStyle } from "styled-components";

export const theme = {
  main: {
    background: "#000000",
    colorFont: "#FFFFFF",
    borderRadius: "15px",
  },
  link: {
    colorFont: "#74E4E5",
  },
  input: {
    background: "#FFFFFF",
    colorFont: "#000000",
    fontWeight: "bold",
    width: "20rem",
    selectWidth: "21rem",
    height: "3rem",
    colorError: "red",
  },
  button: [
    {
      background: "#74E4E5",
      colorFont: "#000000",
      sizeWidth: ["auto", "21rem"],
      sizeHeight: ["auto", "3rem"],
    },
    {
      background: "rgba(116,228,228,0.13)",
      colorFont: "#FFFFFF",
      sizeWidth: ["auto", "21rem"],
      sizeHeight: ["auto", "3rem"],
    },
    {
      background: "#FFFFFF",
      colorFont: "#000000",
      sizeWidth: ["auto", "21rem"],
      sizeHeight: ["auto", "3rem"],
    },
  ],
  buttonDisabled: {
    background: "#74E4E5",
    colorFont: "#FFFFFF",
  },
  textCard: {
    colorFont: "#FFFFFF",
    background: "rgba(133,133,133,0.3)",
  },
};

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0 auto;
        max-width: 1440px;
        background-color: ${theme.main.background};
    }
    figure {
        margin: 0;
    }
    figcaption {
        display: none;
    }
    a {
      text-decoration: none;
    }
`;
