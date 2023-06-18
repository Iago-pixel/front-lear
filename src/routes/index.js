// router dom
import { Routes, Route } from "react-router-dom";

// components
import { Dashboard } from "../pages/dashboard";
import { PagLogin } from "../pages/pag_login";
import { PagRegister } from "../pages/pag_register";
import { PagLesson } from "../pages/pag_lesson";
import { PagLessonContent } from "../pages/pag_lesson_content";
import { UserArea } from "../pages/user_area";
import { Profile } from "../pages/profile";
import { PagPerformance } from "../pages/pag_performance";
import { PagCertificate } from "../pages/pag_certificate";
import { PagSuport } from "../pages/pag_suport";
import { PagRestrictedLogin } from "../pages/pag_restricted_login";
import { CompanyDashboard } from "../pages/company_dashboard";
import { PagEdit } from "../pages/pag_edit";

// style
import { AnimatePresence } from "framer-motion";

// others
import { LinkedInCallback } from "react-linkedin-login-oauth2";

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
        <Route path="/area_do_usuario" element={<UserArea />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/desempenho" element={<PagPerformance />} />
        <Route path="/certificado" element={<PagCertificate />} />
        <Route path="/ajuda" element={<PagSuport />} />
        <Route path="/login_restrito" element={<PagRestrictedLogin />} />
        <Route path="/dashboard_empresa" element={<CompanyDashboard />} />
        <Route path="/editar_plataforma" element={<PagEdit />} />
      </Routes>
    </AnimatePresence>
  );
};
