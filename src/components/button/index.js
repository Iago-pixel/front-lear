import { Container } from "./style";
import { motion } from "framer-motion";
import { itemVatiants } from "../../styles/global";

export const Button = ({ children, type = 0, size = 0, disabled, ...rest }) => {
  return (
    <motion.div variants={itemVatiants} {...rest}>
      <Container type={type} size={size} disabled={disabled}>
        {children}
      </Container>
    </motion.div>
  );
};
