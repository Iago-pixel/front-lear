import { createGlobalStyle } from "styled-components";

export const theme = {
  main: {
    background: "#000000",
    colorFont: "#FFFFFF",
    borderRadius: "15px",
  },
  title: {
    fontSize: "1.5rem",
  },
  link: {
    colorFont: "#74E4E5",
  },
  input: [
    {
      background: "#FFFFFF",
      colorFont: "#000000",
      fontWeight: "bold",
      width: "20rem",
      selectWidth: "21rem",
      height: "3rem",
      colorError: "red",
    },
    {
      background: "rgba(116,228,228,0.13)",
      colorFont: "#FFF",
      width: "100%",
      height: "3rem",
      colorError: "red",
    },
  ],
  button: [
    {
      background: "#74E4E5",
      colorFont: "#000000",
      sizeWidth: ["auto", "21rem", "18rem"],
      sizeHeight: ["auto", "3rem", "10rem"],
    },
    {
      background: "rgba(116,228,228,0.13)",
      colorFont: "#FFFFFF",
      sizeWidth: ["auto", "21rem", "18rem"],
      sizeHeight: ["auto", "3rem", "10rem"],
    },
    {
      background: "#FFFFFF",
      colorFont: "#000000",
      sizeWidth: ["auto", "21rem", "25rem"],
      sizeHeight: ["auto", "3rem"],
      arrowSize: "2rem",
    },
    {
      background: "#D9D9D9",
      colorFont: "#000000",
      sizeWidth: ["auto"],
      sizeHeight: ["auto"],
    },
    {
      background: "#676767",
      colorFont: "#000000",
      sizeWidth: ["auto"],
      sizeHeight: ["auto"],
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
  menu: {
    colorFont: "#FFFFFF",
    background: "rgba(116,228,228,0.13)",
  },
  genericBox: {
    background: "rgba(116,228,228,0.13)",
  },
  scrollbar: {
    HandleColor: "#488F8F",
    scrollbarColor: "#FFF",
  },
  noImage: {
    color: "#74E4E5",
    fontSize: "8rem",
  },
  percentageCircle: {
    progressColor: "#74E4E5",
    bgColor: "#FFF",
    textColor: "#74E4E5",
  },
};

export const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
      padding: 0;
      margin: 0 auto;
      max-width: 1440px;
      background-color: ${theme.main.background};
      position: relative;
  }

  figure {
      margin: 0;
  }

  a {
    text-decoration: none;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.scrollbar.HandleColor};
    border-radius: ${theme.main.borderRadius};
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.scrollbar.scrollbarColor}; 
  }
`;
