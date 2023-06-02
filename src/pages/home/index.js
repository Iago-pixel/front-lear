import { ModuleNav } from "../../components/module_nav";
import { LogicaIntroducao } from "../../components/logica_introducao";

import { Container } from "./style";

import { logicClasses } from "../../service/modules";

export const Home = () => {
  return (
    <Container>
      <main>
        <div className="text-and-menu">
          <LogicaIntroducao />
          <div className="module-nav">
            <ModuleNav {...logicClasses} />
          </div>
        </div>
      </main>
    </Container>
  );
};
