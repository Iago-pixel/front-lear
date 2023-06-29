import { useNavigate, Link } from "react-router-dom";

import { Header } from "../../components/header";
import { TextInput } from "../../components/text_input"
import { Button } from "../../components/button";

import { Container, RecoverContent } from "./style";
import { motion } from "framer-motion";

import logo from "../../imgs/logo.svg";

// others
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {mediaQueries} from "./media"
const MediaContainer = mediaQueries(Container,RecoverContent);



export const PasswordRecover = ({ ...rest }) => {

    const formSchema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido")});

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({
            resolver: yupResolver(formSchema),
          });

    const onSubmitFunction = (data) => {
            navigate("/");
          };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      {...rest}
    ><MediaContainer>
        <Container>
          <Header hasExit>
              <Link to="/">
                  <img src={logo} alt="" />
              </Link>
          </Header>
          
          <main>
            <RecoverContent>
                <h1>Recuperação de Senha</h1>
                <p>Informe seu  endereço de email que nós enviaremos um link para a alteração da senha</p>

                <form onSubmit={handleSubmit(onSubmitFunction)}>
                  <TextInput
                    placeholder="Email"
                    name="email"
                    register={register}
                    errors={errors}
                    className="input"
                  />
                  <Button size={1}>Enviar</Button>
                </form>
            </RecoverContent>
          </main>
      </Container>
    </MediaContainer>
    </motion.div>
  );
};
