import { Routes, Route } from "react-router-dom";

import { LinkedInCallback } from "react-linkedin-login-oauth2";

import { Dashboard } from "../pages/dashboard";
import { PagLogin } from "../pages/pag_login";
import { PagRegister } from "../pages/pag_register";

import { AnimatePresence } from "framer-motion";

export const Router = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<PagLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/linkedin" element={<LinkedInCallback />} />
        <Route path="/cadastro" element={<PagRegister />} />
      </Routes>
    </AnimatePresence>
  );
};
