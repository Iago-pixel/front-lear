import { Routes, Route } from "react-router-dom";

import { LinkedInCallback } from "react-linkedin-login-oauth2";

import { Dashboard } from "../pages/dashboard";
import { PagLogin } from "../pages/pag_login";
import { PagRegister } from "../pages/pag_register";
import { PagLesson } from "../pages/pag_lesson";

import { AnimatePresence } from "framer-motion";
import { PagLessonContent } from "../pages/pag_lesson_content";

export const Router = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<PagLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/linkedin" element={<LinkedInCallback />} />
        <Route path="/cadastro" element={<PagRegister />} />
        <Route path="/:module_id/:lesson_id" element={<PagLesson />} />
        <Route
          path="/:module_id/:lesson_id/conteudo"
          element={<PagLessonContent />}
        />
      </Routes>
    </AnimatePresence>
  );
};
