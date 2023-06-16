// components
import { Header } from "../../components/header";
import { BackButton } from "../../components/back_button";
import { TextInput } from "../../components/text_input";
import { Button } from "../../components/button";
import { Textarea } from "../../components/textarea";

// style
import { Container, ProfileContent } from "./style";
import { motion } from "framer-motion";

// others
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const PagSuport = ({ ...rest }) => {
  const formSchema = yup.object().shape({
    question: yup.string().required("Dúvida obrigatório"),
    description: yup.string(),
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
        <Header hasExit>
          <BackButton />
        </Header>
        <main>
          <h1 className="main__title">Fale com o professor</h1>
          <ProfileContent>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <TextInput
                name="question"
                register={register}
                errors={errors}
                placeholder="Qual sua dúvida?"
                colorType={1}
              />
              <Textarea
                name="description"
                register={register}
                errors={errors}
                placeholder="Descreva sua necessidade..."
                className="description-input"
              ></Textarea>
              <Button className="send-button">Enviar</Button>
            </form>
          </ProfileContent>
        </main>
      </Container>
    </motion.div>
  );
};
