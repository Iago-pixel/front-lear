// react
import { useState } from "react";

// components
import { SketchPicker } from "react-color";
import { Button } from "../button";

// style
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { Container, ShowBox, Form } from "./style";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../imgs/logo.svg";

// others

export const EditButton = ({
  mainColor,
  setMainColor,
  mainBackground,
  setMainBackground,
  ...rest
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(true);
  const [showMainColorsForm, setShowMainColorsForm] = useState(false);

  const handleBack = () => {
    if (showMainMenu) {
      setShowMenu(false);
    } else {
      setShowMainMenu(true);
      setShowMainColorsForm(false);
    }
  };

  const openForm = (showForm) => {
    setShowMainMenu(false);
    showForm(true);
  };

  const handleOnChangeColor = ({ rgb: { r, g, b, a } }, handleStateColor) => {
    handleStateColor(`rgba(${r}, ${g}, ${b}, ${a})`);
  };

  return (
    <Container {...rest}>
      <div className="pulse-circle"></div>
      <button className="button" onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faPalette} />
      </button>
      <AnimatePresence>
        {showMenu ? (
          <motion.aside
            initial={{ transform: "translateX(-20rem)" }}
            animate={{ transform: "translateX(0px)" }}
            exit={{ transform: "translateX(-20rem)" }}
            className="edit-menu"
          >
            <div className="edit-menu__background">
              <nav>
                <div className="edit-menu__top">
                  <img src={logo} alt="" />
                  <button
                    className="edit-menu__back"
                    onClick={() => handleBack()}
                  >
                    <FontAwesomeIcon icon={faAnglesLeft} />
                  </button>
                </div>
                <ShowBox show={showMainMenu}>
                  <ul>
                    <li>
                      <button
                        onClick={() => openForm(setShowMainColorsForm)}
                        className="edit-menu__button"
                      >
                        Cores principais
                      </button>
                    </li>
                  </ul>
                </ShowBox>
                <ShowBox show={showMainColorsForm}>
                  <Form>
                    <div>
                      <SketchPicker
                        color={mainColor}
                        onChange={(color) =>
                          handleOnChangeColor(color, setMainColor)
                        }
                      />
                      <p>Cor principal da fonte</p>
                    </div>
                    <div>
                      <SketchPicker
                        color={mainBackground}
                        onChange={(color) =>
                          handleOnChangeColor(color, setMainBackground)
                        }
                      />
                      <p>Cor do fundo principal</p>
                    </div>
                    <Button className="edit-menu__submit">Alterar</Button>
                  </Form>
                </ShowBox>
              </nav>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </Container>
  );
};
