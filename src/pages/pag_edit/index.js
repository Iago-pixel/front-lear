import { Header } from "../../components/header";
import { BackButton } from "../../components/back_button";

export const PagEdit = ({ ...rest }) => {
  return (
    <div {...rest}>
      <Header hasExit restricted>
        <BackButton restricted />
      </Header>
    </div>
  );
};
