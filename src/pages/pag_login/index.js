import { Container } from "./style";

import { TextInput } from "../../components/text_input";
import { Button } from "../../components/button";

import { Link } from "react-router-dom";

export const PagLogin = () => {
  return (
    <>
      <Container>
        <h1 className="title">Curso Frontend</h1>
        <form>
          <TextInput placeholder="Email..." className="phrase" />
          <TextInput placeholder="Senha..." className="phrase" />
          <Button>Entrar</Button>
        </form>
        <section className="toRegister">
          <p className="toRegister__question">Ainda não tem conta?</p>
          <Link to="/register" className="toRegister__link">
            Criar conta
          </Link>
        </section>
      </Container>
    </>
  );
};
