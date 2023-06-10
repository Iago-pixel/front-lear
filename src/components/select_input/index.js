import { Container } from "./style";

import { itemVariants } from "../../styles/global";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const SelectInput = ({
  name,
  title,
  options,
  register,
  errors,
  ...rest
}) => {
  return (
    <motion.div variants={itemVariants} {...rest}>
      <Container errorsName={errors[name]}>
        <select name={name} {...register(name)}>
          <option value="" disabled selected>
            {title}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="arrow">
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <span className="error">{errors[name]?.message}</span>
      </Container>
    </motion.div>
  );
};
