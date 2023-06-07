import { ModuleNav } from "../../components/module_nav";
import { Header } from "../../components/header";
import { Container } from "./style";

import { logicClasses } from "../../service/modules";

import { CourseNav } from "../../components/course_nav";

export const Dashboard = () => {
  return (
    <>
      <Header hasPerfil />
      <Container>
        <main>
          <CourseNav select={3} classes={logicClasses.classes} />
          <div className="text-and-menu">
            <div className="module-nav">
              <ModuleNav {...logicClasses} />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};
