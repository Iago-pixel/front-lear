// react
import { useEffect, useState } from "react";

// router dom
import { useParams, useNavigate } from "react-router-dom";

// style
import { motion } from "framer-motion";
import { Container } from "./style";

// components
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Imagem } from "../../components/imagem";
import { Lesson } from "../../components/lesson";

// mock
import { lessonArticles } from "../../service/mocks";

export const PagLessonContent = ({ ...rest }) => {
  let { module_id, lesson_id } = useParams();
  const [lessonContent, setLessonContent] = useState(
    lessonArticles.filter((article) => article.lesson_id == lesson_id)
  );

  const navigate = useNavigate();

  const back = () => {
    navigate(`/${module_id}/${lesson_id}`);
  };

  const addInDiscord = () => {
    window.open("https://discord.gg/q9ZartMssw", "_blank", "noreferrer");
  };

  useEffect(() => {
    setLessonContent(
      lessonArticles.filter((article) => article.lesson_id == lesson_id)
    );
  }, [lesson_id]);

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
          <Button onClick={() => back()} type={2}>
            Voltar
          </Button>
        </Header>
        <main>
          <div className="articles">
            {lessonContent.map(({ title, Content }, index) => (
              <Lesson title={title} key={index} className="article">
                <Content />
              </Lesson>
            ))}
          </div>
          <div className="helper-box">
            <p>
              Precisa de ajuda? Acesso nossa comunidade e fale com o instrutor
            </p>
            <Button onClick={() => addInDiscord()}>Ajuda</Button>
          </div>
        </main>
      </Container>
    </motion.div>
  );
};
