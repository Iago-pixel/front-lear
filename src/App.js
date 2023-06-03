import { GlobalStyle } from "./styles/global";

import { Router } from "./routes";

import { Footer } from "./components/footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Footer />
    </>
  );
};

export default App;
