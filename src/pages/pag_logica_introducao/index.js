import { LogicaIntroducao } from "../../components/logica_introducao";
import { ModuleNav } from "../../components/module_nav";
import { Header } from "../../components/header";

import { Container } from "./style";

import { logicClasses } from "../../service/modules";

export const PagLogicaIntroducao = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="text-and-menu">
          <LogicaIntroducao />
          <div className="module-nav">
            <ModuleNav {...logicClasses} />
          </div>
        </div>
      </Container>
    </>
  );
};
