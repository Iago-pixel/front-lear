import { Header } from "../../components/header";
import { BackButton } from "../../components/back_button";
import { Container } from "./style";
import { motion } from "framer-motion";


//responsibility
import {mediaQueries} from "./media"
const MediaContainer = mediaQueries(Container,Header);

export const PagCertificate = ({ ...rest }) => {
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
            <BackButton />
          </Header>
          <main>
            <h1 className="main__title">Certificado</h1>
            <article className="main__warning-box">
              <p className="warning">
                Seu certificado será emitido no final do curso
              </p>
            </article>
          </main>
        </Container>
        </MediaContainer>
    </motion.div>
  );
};
