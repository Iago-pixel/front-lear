import { Header } from "../../components/header";
import logo from "../../imgs/logo.svg";
import { TextInput } from "../../components/text_input";
import { Button } from "../../components/button";
import { SelectInput } from "../../components/select_input";
import { CheckboxInput } from "../../components/checkbox_input";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "./style";
import { containerVariants, itemVariants } from "../../styles/global";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { motion } from "framer-motion";

export const PagRegister = ({ ...rest }) => {
  const options = [{ name: "Curso frontend", value: "curso_frontend" }];

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome completo obrigatório"),
    email: yup.string().required(""),
    phone: yup
      .string()
      .matches(
        /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
        "Número inválido"
      ),
    program: yup.string().required("Selecionar o programa é obrigatório"),
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    navigate("/");
  };

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
          <section>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              {...rest}
            >
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <TextInput
                  name="name"
                  placeholder="Nome completo"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  name="email"
                  placeholder="Email"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  name="phone"
                  placeholder="Telefone"
                  register={register}
                  errors={errors}
                />
                <SelectInput
                  name="program"
                  title="Programa que irá participar"
                  options={options}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  type="password"
                  name="password"
                  placeholder="Senha"
                  register={register}
                  errors={errors}
                />
                <TextInput
                  type="password"
                  name="repeatPassword"
                  placeholder="Confirme a senha"
                  register={register}
                  errors={errors}
                />
                <CheckboxInput
                  name="terms"
                  text="Concorda com nossos termos"
                  className="form__checkbox-box"
                  register={register}
                  errors={errors}
                />
                <Button size={1}>Finalizar</Button>
              </form>
              <motion.div className="toLogin" variants={itemVariants}>
                <p className="toLogin__question">Já possui conta?</p>
                <Link to="/" className="toLogin__link">
                  Fazer login
                </Link>
              </motion.div>
            </motion.div>
          </section>
          <section className="main-title">
            <h1>Criar conta</h1>
          </section>
        </main>
      </Container>
    </motion.div>
  );
};
