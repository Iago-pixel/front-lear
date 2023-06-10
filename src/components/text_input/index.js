import { Container, InputStyled } from "./style";
import { motion } from "framer-motion";
import { itemVariants } from "../../styles/global";

export const TextInput = ({
  name,
  register,
  errors,
  placeholder,
  type = "text",
  ...rest
}) => {
  return (
    <motion.div variants={itemVariants} {...rest}>
      <Container errorsName={errors[name]}>
        <InputStyled
          name={name}
          placeholder={placeholder}
          type={type}
          {...register(name)}
        />
        <span className="error">{errors[name]?.message}</span>
      </Container>
    </motion.div>
  );
};
