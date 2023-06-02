import { LogicaIntroducao } from "../../components/logica_introducao";
import { ModuleNav } from "../../components/module_nav";

import { Container } from "./style";

import { logicClasses } from "../../service/modules";

export const PagLogicaIntroducao = () => {
  return (
    <Container>
      <div className="text-and-menu">
        <LogicaIntroducao />
        <div className="module-nav">
          <ModuleNav {...logicClasses} />
        </div>
      </div>
    </Container>
  );
};
