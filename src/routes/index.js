import { Routes, Route } from "react-router-dom";

import { LinkedInCallback } from "react-linkedin-login-oauth2";

import { Dashboard } from "../pages/dashboard";
import { PagLogin } from "../pages/pag_login";
import { PagRegister } from "../pages/pag_register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PagLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/linkedin" element={<LinkedInCallback />} />
      <Route path="/cadastro" element={<PagRegister />} />
    </Routes>
  );
};
