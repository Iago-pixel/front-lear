// react
import { useState, useEffect } from "react";

// router dom
import { useNavigate, useParams, useLocation } from "react-router";

// components
import { Button } from "../button";

// style
import { Container } from "./style";

export const LessonNavMobile = ({ ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let { module_id, lesson_id } = useParams();

  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    const endPath = location.pathname.split("/").reverse()[0];

    if (endPath === "conteudo" || endPath === "comentarios") {
      setSelectedButton(endPath);
    } else {
      setSelectedButton("video");
    }
  }, [location.pathname]);

  return (
    <Container {...rest}>
      <Button
        type={selectedButton === "video" ? 4 : 3}
        onClick={() => navigate(`/${module_id}/${lesson_id}`)}
      >
        Vídeo
      </Button>
      <Button
        type={selectedButton === "conteudo" ? 4 : 3}
        onClick={() => navigate(`/${module_id}/${lesson_id}/conteudo`)}
      >
        Leitura
      </Button>
      <Button type={3} disabled>
        Comentários
      </Button>
    </Container>
  );
};
