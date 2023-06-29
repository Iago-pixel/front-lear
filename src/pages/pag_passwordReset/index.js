import { useNavigate, Link } from "react-router-dom";

import { Header } from "../../components/header";
import { TextInput } from "../../components/text_input"
import { Button } from "../../components/button";

import { Container, RecoverContent } from "./style";
import { motion } from "framer-motion";

//image
import logo from "../../imgs/logo.svg";

// others
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//responsibility
import {mediaQueries} from "./media"
const MediaContainer = mediaQueries(Container,RecoverContent);


export const PasswordReset = ({ ...rest }) => {

  const formSchema = yup.object().shape({
    
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Senha deve ter mais de 8 caractéres")
      .matches(/^.*[A-Z]+.*$/, "Senha deve ter pelo menos uma letra maiúscula")
      .matches(/^.*[a-z]+.*$/, "Senha deve ter pelo menos uma letra minúscula")
      .matches(/^.*[$*&@#]+.*$/, "Senha deve ter pelo menos um síbolo")
      .matches(/^.*[0-9]+.*$/, "Senha deve ter pelo menos um número"),
    repeatPassword: yup
      .string()
      .required("Confimação obrigatória")
      .oneOf([yup.ref("password")], "Deve ser igual ao campo Senha"),
    terms: yup.boolean().oneOf([true], " ***"),
  });

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({
            resolver: yupResolver(formSchema),
          });
    const onSubmitFunction = (data) => {
        console.log(data);
        navigate("/perfil");
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
              <h1>Redefinir Senha</h1>
              <p>Preencha os dados abaixo.</p>
              
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <p class="reset">Digite sua nova senha:</p>
                <TextInput
                  placeholder="Nova senha"
                  name="password"
                  register={register}
                  errors={errors}
                  className="input"
                />
                  <p class="reset">Repita a senha:</p>
                  <TextInput
                  placeholder="Repita a senha"
                  name="repeatPassword"
                  register={register}
                  errors={errors}
                  className="input"
                />
                <Button class="resetButton" size={1}>Enviar</Button>
              </form>
          </RecoverContent>
        </main>
      </Container>
      </MediaContainer>
    </motion.div>
  );
};
