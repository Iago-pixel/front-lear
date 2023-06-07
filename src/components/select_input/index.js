import { Container } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const SelectInput = ({ name, title, options, ...rest }) => {
  return (
    <Container>
      <select name={name} {...rest}>
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
    </Container>
  );
};
