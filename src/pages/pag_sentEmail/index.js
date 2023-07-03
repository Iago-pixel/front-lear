import { useNavigate, Link } from "react-router-dom";

import { Header } from "../../components/header";
import { TextInput } from "../../components/text_input"
import { Button } from "../../components/button";

import { Container, RecoverContent } from "./style";
import { motion } from "framer-motion";

import logo from "../../imgs/logo.svg";



import {mediaQueries} from "./media"
const MediaContainer = mediaQueries(Container,RecoverContent);



export const SentEmail = ({ ...rest }) => {

    

    const navigate = useNavigate();

    const onSubmitFunction = (data) => {
        navigate("/");
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
                <h1>E-mail de recuperação enviado!</h1>
                <p>Por favor, verifique sua caixa de entrada.</p>
              
                <Button size={1} onClick={() => navigate("/")}>Voltar</Button>
                
            </RecoverContent>
          </main>
      </Container>
    </MediaContainer>
    </motion.div>
  );
};
