import { GlobalStyle } from "./styles/global";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Analytics />
    </>
  );
};

export default App;
