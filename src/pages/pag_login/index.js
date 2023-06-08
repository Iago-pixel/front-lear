import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useLinkedIn } from "react-linkedin-login-oauth2";

import { Container, MainText, Login } from "./style";

import { TextInput } from "../../components/text_input";
import { Button } from "../../components/button";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import logo from "../../imgs/logo.svg";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const PagLogin = () => {
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
    <>
      <Container>
        <Header>
          <img src={logo} alt="" />
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
            <h1>Sua conta</h1>
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
              <Link to="/esqueceusenha">Esqueceu sua senha?</Link>
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
            <div className="toRegister">
              <p className="toRegister__question">Não possui conta?</p>
              <Link to="/cadastro" className="toRegister__link">
                Criar conta
              </Link>
            </div>
          </Login>
        </main>
      </Container>
    </>
  );
};
