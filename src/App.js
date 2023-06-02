import { GlobalStyle } from "./styles/global";

import { Router } from "./routes";

import { Header } from "./components/header";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
