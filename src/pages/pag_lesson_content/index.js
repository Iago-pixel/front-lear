import { useParams, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { Container } from "./style";

import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { Imagem } from "../../components/imagem";

import { lessonArticles } from "../../service/mocks";
import { Lesson } from "../../components/lesson";

export const PagLessonContent = ({ ...rest }) => {
  let { module_id, lesson_id } = useParams();
  const navigate = useNavigate();

  const back = () => {
    navigate(`/${module_id}/${lesson_id}`);
  };

  const addInDiscord = () => {
    window.open("https://discord.gg/q9ZartMssw", "_blank", "noreferrer");
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
          <Button onClick={() => back()} type={2}>
            Voltar
          </Button>
        </Header>
        <main>
          <div className="articles">
            {lessonArticles.map((article, index) => (
              <Lesson title={article.title} key={index} className="article">
                {article.text.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {article.img_url && (
                  <Imagem
                    src={article.img_url}
                    alt={article.img_alt}
                    figcaption={article.img_alt}
                    className="article__images"
                  />
                )}
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
