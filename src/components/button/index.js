import { Container } from "./style";
import { motion } from "framer-motion";
import { itemVariants } from "../../styles/global";

export const Button = ({ children, type = 0, size = 0, disabled, ...rest }) => {
  return (
    <motion.div variants={itemVariants} {...rest}>
      <Container type={type} size={size} disabled={disabled}>
        {children}
      </Container>
    </motion.div>
  );
};
