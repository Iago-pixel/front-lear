import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/home";
import { PagLogicaIntroducao } from "../pages/pag_logica_introducao";
import { PagLogin } from "../pages/pag_login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<PagLogin />} />
      <Route path="/logica/introducao" element={<PagLogicaIntroducao />} />
    </Routes>
  );
};
