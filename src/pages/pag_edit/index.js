// react
import { useState } from "react";

// components
import { Header } from "../../components/header";
import { BackButton } from "../../components/back_button";
import { FrameEdit } from "../../components/frame_edit";
import { SketchPicker } from "react-color";
import { Button } from "../../components/button";

// style
import { Container } from "./style";
import { theme } from "../../styles/global";

export const PagEdit = ({ ...rest }) => {
  const [background, setBackground] = useState(theme.main.background);
  const [colorFont, setColorFont] = useState(theme.main.colorFont);

  return (
    <Container {...rest}>
      <Header hasExit restricted>
        <BackButton restricted />
      </Header>
      <main>
        <section>
          <form>
            <div className="color-inputs">
              <div className="color-inputs__color-input">
                <SketchPicker
                  color={background}
                  onChange={(color) =>
                    setBackground(
                      `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`
                    )
                  }
                />
                <p>Fundo</p>
              </div>
              <div className="color-inputs__color-input">
                <SketchPicker
                  color={colorFont}
                  onChange={({ rgb }) =>
                    setColorFont(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`)
                  }
                />
                <p>Cor da letra</p>
              </div>
            </div>
            <Button>Salvar</Button>
          </form>
          <FrameEdit background={background} color={colorFont} />
        </section>
      </main>
    </Container>
  );
};
