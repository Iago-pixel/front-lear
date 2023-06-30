import { GlobalStyle } from "./styles/global";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "./routes";
import { ScrollToTop } from "./components/scroll_to_top";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Router />
      <Analytics />
    </>
  );
};

export default App;
