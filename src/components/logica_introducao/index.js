import { Container } from "./style";

import cake from "../../img/cake.jpg";
import cake_mobile from "../../img/cake_mobile.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { LessonTitle } from "../lesson_title";

export const LogicaIntroducao = () => {
  return (
    <Container className="phrase lesson">
      <article>
        <LessonTitle index={1} name={"Introdução"} />
        <p>
          A lógica é uma ferramenta vital para o programador. Refinar seu
          raciocínio lógico é vital para quem deseja trabalhar nessa área.
        </p>
        <p>
          A lógica na programação é usada para criar soluções para problemas
          variados, que podem necessitar da aplicação de raciocínio matemáticos
          por exemplo, por meio de um conjunto de ferramentas, como a linguagem
          de programação.
        </p>
        <p>
          Entre os principais benefícios da aplicação da lógica de programação é
          a capacidade de criar aplicações capazes de tomar decisões baseadas em
          condições e o uso dos laços de repetição, estruturas que permitem a
          repetição de instruções de forma eficiente e automatizada,
          economizando nosso tempo e esforço.
        </p>
        <p>
          Na programação muitas vezes precisamos resolver problemas complexos,
          aonde precisamos analisar cuidadosamente tudo, inclusive quebrando
          todo o processo em partes menores. Com um bom raciocínio lógico
          devemos não apenas solucionar o problema, mas também criar códigos
          legíveis, sem redundâncias e fáceis de serem atualizados e corrigidos.
        </p>
        <p>
          Ou seja, a lógica é extremamente importante para criar soluções usando
          as diversas estruturas que veremos no curso. Com ela o programador
          pode criar softwares de qualidade, com escalabilidade, com
          flexibilidade e que atende a demanda do usuário. Investir no
          desenvolvimento das habilidades lógicas é vital para a formação do
          profissional da programação e para a evolução de sua carreira.
        </p>
      </article>
      <article className="cake-activite">
        <h2 className="title">
          Atividade <FontAwesomeIcon icon={faPenToSquare} />
        </h2>
        <p className="quest">
          Você sabe como cortar um bolo em 8 partes com apenas 3 cortes? Tente
          desvendar esse enigma antes de ir para o próximo material...
        </p>
        <figure className="cake">
          <img src={cake} alt="bolo rosa enfeitado" className="cake__img" />
          <img
            src={cake_mobile}
            alt="bolo rosa enfeitado"
            className="cake__img-mobile"
          />
          <figcaption>
            Imagem de Jill Wellington encontrada em pixabay.com
          </figcaption>
        </figure>
      </article>
    </Container>
  );
};
