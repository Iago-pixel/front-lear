// router dom
import { useNavigate } from "react-router-dom";

// components
import { Header } from "../../components/header";
import { Button } from "../../components/button";

// style
import { Container } from "./style";
import { motion } from "framer-motion";
import { containerVariants } from "../../styles/global";

// others
import logo from "../../imgs/logo.svg";

export const UserArea = ({ ...rest }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      {...rest}
    >
      <Container {...rest}>
        <Header hasExit>
          <img src={logo} alt="" />
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
                <Button type={1} size={2}>
                  Calendario de aulas
                </Button>
              </div>
              <div className="main__nav__button-box">
                <Button type={1} size={2}>
                  Desempenho
                </Button>
              </div>
              <div className="main__nav__button-box">
                <Button type={1} size={2}>
                  Fale com professor
                </Button>
              </div>
              <div className="main__nav__button-box">
                <Button type={1} size={2}>
                  Comunidade
                </Button>
              </div>
              <div className="main__nav__button-box">
                <Button type={1} size={2}>
                  Certificado
                </Button>
              </div>
            </div>
          </motion.div>
        </main>
      </Container>
    </motion.div>
  );
};
