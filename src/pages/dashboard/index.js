// router dom
import { Link } from "react-router-dom";

// components
import { ModuleNav } from "../../components/module_nav";
import { Header } from "../../components/header";

// style
import { Container } from "./style";
import { motion } from "framer-motion";
import { containerVariants } from "../../styles/global";

// images
import logo from "../../imgs/logo.svg";

// mocks
import { courses, modules, classes } from "../../service/mocks";

export const Dashboard = ({ ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      {...rest}
    >
      <Header hasPerfil>
        <Link to="/area_do_usuario">
          <img src={logo} alt="" />
        </Link>
      </Header>
      <Container>
        <h1>Trilha de ensino | {courses[0]["name"]}</h1>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {modules.map((module, index) => {
            return (
              <li>
                <ModuleNav
                  key={index}
                  title={module.title}
                  classes={classes}
                  disabled={module.disabled}
                />
              </li>
            );
          })}
        </motion.ul>
      </Container>
    </motion.div>
  );
};
