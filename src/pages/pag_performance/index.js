// components
import { Header } from "../../components/header";
import { PercentageBox } from "../../components/percentage_box";
import { PerformanceContainer } from "./style";
import { BackButton } from "../../components/back_button";

// style
import { modules, courses } from "../../service/mocks";
import { theme } from "../../styles/global";
import { Container } from "./style";
import { motion } from "framer-motion";

export const PagPerformance = ({ ...rest }) => {
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
          <h1 className="main__title">Seu desempenho</h1>
          <PerformanceContainer>
            <div className="progress">
              <div className="progress__current-module">
                <PercentageBox
                  percentage_complete={modules[0].percentage_complete}
                  size={300}
                  title={`Modulo atual: ${modules[0].title}`}
                  fontSize={theme.title.fontSize}
                >
                  Modulo atual:{" "}
                  <span className="current-module__name">
                    {modules[0].title}
                  </span>
                </PercentageBox>
              </div>
              <div className="progress__total">
                <PercentageBox
                  percentage_complete={courses[0].percentage_complete}
                  size={300}
                  fontSize={theme.title.fontSize}
                >
                  Total
                </PercentageBox>
              </div>
            </div>
          </PerformanceContainer>
        </main>
      </Container>
    </motion.div>
  );
};
