// router dom
import { useNavigate, Link } from "react-router-dom";

// components
import { Header } from "../../components/header";
import { Button } from "../../components/button";

// style
import { Container } from "./style";
import { motion } from "framer-motion";
import { containerVariants } from "../../styles/global";

// others
import logo from "../../imgs/logo.svg";
import { addInDiscord } from "../../service/util";

//responsibility
import {mediaQueries} from "./media"
const MediaContainer = mediaQueries(Container,Button);

export const UserArea = ({ ...rest }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      {...rest}
    ><MediaContainer>
        <Container {...rest}>
          <Header hasExit>
            <Link to="/dashboard">
              <img src={logo} alt="" />
            </Link>
          </Header>
          <main>
            <div className="main__header">
              <h1>Area do aluno</h1>
              <Button onClick={() => navigate("/dashboard")}>
                Assistir aula
              </Button>
            </div>
          
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="main__nav">
                <div className="main__nav__button-box">
                  <Button size={2} onClick={() => navigate("/perfil")}>
                    Minha conta
                  </Button>
                </div>
                <div className="main__nav__button-box">
                  <Button type={1} size={2} disabled>
                    Calendario de aulas
                  </Button>
                </div>
                <div className="main__nav__button-box">
                  <Button
                    type={1}
                    size={2}
                    onClick={() => navigate("/desempenho")}
                  >
                    Desempenho
                  </Button>
                </div>
                <div className="main__nav__button-box">
                  <Button type={1} size={2} onClick={() => navigate("/ajuda")}>
                    Fale com professor
                  </Button>
                </div>
                <div className="main__nav__button-box">
                  <Button type={1} size={2} onClick={() => addInDiscord()}>
                    Comunidade
                  </Button>
                </div>
                <div className="main__nav__button-box">
                  <Button
                    type={1}
                    size={2}
                    onClick={() => navigate("/certificado")}
                  >
                    Certificado
                  </Button>
                </div>
              </div>
              
            </motion.div>
          </main>
        </Container>
      </MediaContainer>
    </motion.div>
  );
};
