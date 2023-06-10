import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useLinkedIn } from "react-linkedin-login-oauth2";

import { Container, MainText, Login } from "./style";
import { containerVariants, itemVariants } from "../../styles/global";
import { motion } from "framer-motion";

import { TextInput } from "../../components/text_input";
import { Button } from "../../components/button";

import axios from "axios";

import { useNavigate, Link } from "react-router-dom";

import { Header } from "../../components/header";
import logo from "../../imgs/logo.svg";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const PagLogin = ({ ...rest }) => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Senha deve ter mais de 8 caractéres")
      .matches(/^.*[A-Z]+.*$/, "Senha deve ter pelo menos uma letra maiúscula")
      .matches(/^.*[a-z]+.*$/, "Senha deve ter pelo menos uma letra minúscula")
      .matches(/^.*[$*&@#]+.*$/, "Senha deve ter pelo menos um síbolo")
      .matches(/^.*[0-9]+.*$/, "Senha deve ter pelo menos um número"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const { linkedInLogin } = useLinkedIn({
    clientId: process.env.REACT_APP_CLIENT_ID_LINKEDIN,
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          navigate("/dashboard");
        })
        .catch((err) => console.log(err));
    }
  }, [user, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      {...rest}
    >
      <Container>
        <Header>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Header>
        <main>
          <MainText>
            <div className="login-main-text">
              <h1>Lear, plataforma de ensino de tecnologia</h1>
              <p>Aprenda programação do seu jeito, no seu tempo.</p>
            </div>
            <p className="skill-labs-company">Skill labs company</p>
          </MainText>
          <Login>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={itemVariants}>Sua conta</motion.h1>
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextInput
                  placeholder="Email"
                  name="email"
                  register={register}
                  errors={errors}
                  className="input"
                />
                <TextInput
                  placeholder="Senha"
                  name="password"
                  register={register}
                  errors={errors}
                  className="input"
                  type="password"
                />
                <Link to="/esqueceusenha">
                  <motion.span variants={itemVariants}>
                    Esqueceu sua senha?
                  </motion.span>
                </Link>
                <Button size={1}>Entrar</Button>
              </form>
              <div className="login-with-social-network">
                <Button type={1} size={1} onClick={() => login()}>
                  Entrar com google
                </Button>
                <Button type={1} size={1} onClick={linkedInLogin} disabled>
                  Entrar com linkedin
                </Button>
              </div>
              <motion.div className="toRegister" variants={itemVariants}>
                <p className="toRegister__question">Não possui conta?</p>
                <Link to="/cadastro" className="toRegister__link">
                  Criar conta
                </Link>
              </motion.div>
            </motion.div>
          </Login>
        </main>
      </Container>
    </motion.div>
  );
};
