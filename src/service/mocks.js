import { theme } from "../styles/global";

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
