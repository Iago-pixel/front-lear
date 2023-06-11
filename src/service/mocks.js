import { theme } from "../styles/global";
import codes from "../imgs/codes.jpg";

export const users = [
  {
    id: "1",
    name: "Lear",
    email: "lear@mail.com",
    password: "12345678Cc*",
    accessLevel: 2,
    siteId: "1",
  },
  {
    id: "2",
    name: "Iago Vinícius",
    email: "iago@mail.com",
    password: "12345678Cc*",
    accessLevel: 1,
    siteId: "1",
  },
  {
    id: "3",
    name: "Maria Silva",
    email: "maria@mail.com",
    password: "12345678Cc*",
    accessLevel: 0,
    siteId: "1",
  },
];

export const sites = [
  {
    id: "1",
    url: "http://www.lear.com.br/",
    theme: theme,
  },
];

export const courses = [
  {
    id: "1",
    name: "Curso frontend",
    siteId: "1",
  },
];

export const modules = [
  {
    id: "1",
    title: "Lógica",
    course_id: "1",
  },
];

export const classes = [
  {
    id: "1",
    index: 1,
    name: "Introdução",
    video: "",
    introduction: "",
    module_id: "1",
  },
  {
    id: "2",
    index: 2,
    name: "Exercitando o cérebro",
    video: "",
    introduction: "",
    module_id: "1",
  },
  {
    id: "3",
    index: 3,
    name: "Exercício juntos",
    video: "",
    introduction: "",
    module_id: "1",
  },
  {
    id: "4",
    index: 4,
    name: "Proposição condicional",
    video: "",
    introduction: "",
    module_id: "1",
  },
  {
    id: "5",
    index: 5,
    name: "Importancia dos jogos",
    video: "",
    introduction: "",
    module_id: "1",
  },
];

export const lessonArticles = [
  {
    id: "1",
    title: "Exercitando o cerebro",
    text: [
      "A lógica é uma ferramenta vital para o programador. Refinar seu raciocínio lógico é vital para quem deseja trabalhar nessa área.",
      "A lógica na programação é usada para criar soluções para problemas variados, que podem necessitar da aplicação de raciocínio matemáticos por exemplo, por meio de um conjunto de ferramentas, como a linguagem de programação.",
      "Entre os principais benefícios da aplicação da lógica de programação é a capacidade de criar aplicações capazes de tomar decisões baseadas em condições e o uso dos laços de repetição, estruturas que permitem a repetição de instruções de forma eficiente e automatizada, economizando nosso tempo e esforço.",
      "Na programação muitas vezes precisamos resolver problemas complexos, aonde precisamos analisar cuidadosamente tudo, inclusive quebrando todo o processo em partes menores. Com um bom raciocínio lógico devemos não apenas solucionar o problema, mas também criar códigos legíveis, sem redundâncias e fáceis de serem atualizados e corrigidos.",
      "Ou seja, a lógica é extremamente importante para criar soluções usando as diversas estruturas que veremos no curso. Com ela o programador pode criar softwares de qualidade, com escalabilidade, com flexibilidade e que atende a demanda do usuário. Investir no desenvolvimento das habilidades lógicas é vital para a formação do profissional da programação e para a evolução de sua carreira.",
    ],
    img_url: "",
    img_alt: "",
    lesson_id: "2",
  },
  {
    id: "2",
    title: "Exercicio 01",
    text: [
      "A lógica é uma ferramenta vital para o programador. Refinar seu raciocínio lógico é vital para quem deseja trabalhar nessa área. A lógica.",
    ],
    img_url: codes,
    img_alt: "códigos na tela de um computador",
    lesson_id: "2",
  },
];
