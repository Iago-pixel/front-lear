import { Container } from "./style";

import { itemVatiants } from "../../styles/global";
import { motion } from "framer-motion";

export const CheckboxInput = ({ name, text, register, errors, ...rest }) => {
  return (
    <motion.div variants={itemVatiants} {...rest}>
      <Container errorsName={errors[name]}>
        <input type="checkbox" id={name} name={name} {...register(name)} />
        <label for={name}>{text}</label>
        <span className="error">{errors[name]?.message}</span>
      </Container>
    </motion.div>
  );
};
