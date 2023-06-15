import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/global";

export const Container = styled(Link)`
  font-size: 2rem;
  color: ${theme.link.colorFont};
`;
