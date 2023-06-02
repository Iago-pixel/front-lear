import { Container } from "./style";
import { TextInput } from "../../components/text_input";

export const PagLogin = () => {
  return (
    <Container>
      <h1 className="title">Curso Frontend</h1>
      <TextInput placeholder="Email..." className="phrase" />
      <TextInput placeholder="Senha..." className="phrase" />
      <section className="toRegister">
        <p>Ainda não tem conta?</p>
        <p>Criar conta</p>
      </section>
    </Container>
  );
};
