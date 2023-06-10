import { ModuleNav } from "../../components/module_nav";
import { Header } from "../../components/header";

import { Container } from "./style";
import logo from "../../imgs/logo.svg";

import { motion } from "framer-motion";
import { containerVatiants } from "../../styles/global";

import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </Header>
      <Container>
        <h1>Trilha de ensino | {courses[0]["name"]}</h1>
        <motion.ul
          variants={containerVatiants}
          initial="hidden"
          animate="visible"
        >
          <li>
            <ModuleNav title={modules[0]["title"]} classes={classes} />
          </li>
          <li>
            <ModuleNav title={modules[0]["title"]} classes={classes} disabled />
          </li>
          <li>
            <ModuleNav title={modules[0]["title"]} classes={classes} disabled />
          </li>
          <li>
            <ModuleNav title={modules[0]["title"]} classes={classes} disabled />
          </li>
          <li>
            <ModuleNav title={modules[0]["title"]} classes={classes} disabled />
          </li>
          <li>
            <ModuleNav title={modules[0]["title"]} classes={classes} disabled />
          </li>
        </motion.ul>
      </Container>
    </motion.div>
  );
};
