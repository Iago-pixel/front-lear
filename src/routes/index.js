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

// style
import { AnimatePresence } from "framer-motion";

// others
import { LinkedInCallback } from "react-linkedin-login-oauth2";

export const Router = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/nome_empresa" element={<PagLogin />} />
        <Route path="/nome_empresa/dashboard" element={<Dashboard />} />
        <Route path="/nome_empresa/linkedin" element={<LinkedInCallback />} />
        <Route path="/nome_empresa/cadastro" element={<PagRegister />} />
        <Route
          path="/nome_empresa/:module_id/:lesson_id"
          element={<PagLesson />}
        />
        <Route
          path="/nome_empresa/:module_id/:lesson_id/conteudo"
          element={<PagLessonContent />}
        />
        <Route path="/nome_empresa/area_do_usuario" element={<UserArea />} />
        <Route path="/nome_empresa/perfil" element={<Profile />} />
        <Route path="/nome_empresa/desempenho" element={<PagPerformance />} />
        <Route path="/nome_empresa/certificado" element={<PagCertificate />} />
        <Route path="/nome_empresa/ajuda" element={<PagSuport />} />
        <Route path="/" element={<PagRestrictedLogin />} />
        <Route path="/dashboard_empresa" element={<CompanyDashboard />} />
      </Routes>
    </AnimatePresence>
  );
};
