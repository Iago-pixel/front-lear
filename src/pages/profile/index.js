// component
import { Header } from "../../components/header";
import { BackButton } from "../../components/back_button";

// style
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Container, ProfileHeader, ProfileContent } from "./style";
import { users } from "../../service/mocks";
import { motion } from "framer-motion";

export const Profile = ({ ...rest }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      {...rest}
    >
      <Container>
        <Header hasExit>
          <BackButton />
        </Header>
        <main>
          <ProfileHeader>
            <div className="profile__circle">
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
            <div className="profile__header__name-bond">
              <h1>{users[2].name}</h1>
              <span className="profile__header__bond">Aluno</span>
            </div>
            <div className="profile__header__infs-box">
              <div className="profile__header__infs">
                <div className="infs__email">
                  <p className="infs__field-name">E-mail:</p>
                  <p>{users[2].email}</p>
                </div>
                <div className="infs__number">
                  <p className="infs__field-name">Número:</p>
                  <p>{users[2].number}</p>
                </div>
              </div>
            </div>
          </ProfileHeader>
          <ProfileContent></ProfileContent>
        </main>
      </Container>
    </motion.div>
  );
};
