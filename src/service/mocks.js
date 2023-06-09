// components
import { Imagem } from "../components/imagem";
import { Button } from "../components/button";
import cake_mobile from "../imgs/cake_mobile.png";
import cake_solution from "../imgs/cake_solution.jpg";
import cake_partial_solution from "../imgs/cake_partial_solution.jpg";
import divisao_7_por_3 from "../imgs/divisao_7_por_3.png";
import demonstracao_divisao from "../imgs/demonstracao_divisao.png";
import divisao_8_por_2 from "../imgs/divisao_8_por_2.png";

// style
import { theme } from "../styles/global";

export const users = [
  {
    id: "1",
    name: "Lear",
    email: "lear@mail.com",
    number: "9 9999-9999",
    password: "12345678Cc*",
    access_level: 2,
    site_id: "1",
  },
  {
    id: "2",
    name: "Iago Vinícius",
    email: "iago@mail.com",
    number: "9 9999-9999",
    password: "12345678Cc*",
    access_level: 1,
    site_id: "1",
  },
  {
    id: "3",
    name: "Maria Silva",
    email: "maria@mail.com",
    number: "9 9999-9999",
    password: "12345678Cc*",
    access_level: 0,
    site_id: "1",
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
    site_id: "1",
    percentage_complete: 6,
  },
];

export const modules = [
  {
    id: "1",
    title: "Lógica",
    course_id: "1",
    disabled: false,
    percentage_complete: 35,
  },
  {
    id: "2",
    title: "Exemplo",
    course_id: "1",
    disabled: true,
    percentage_complete: 0,
  },
  {
    id: "3",
    title: "Exemplo",
    course_id: "1",
    disabled: true,
    percentage_complete: 0,
  },
  {
    id: "4",
    title: "Exemplo",
    course_id: "1",
    disabled: true,
    percentage_complete: 0,
  },
  {
    id: "5",
    title: "Exemplo",
    course_id: "1",
    disabled: true,
    percentage_complete: 0,
  },
  {
    id: "6",
    title: "Exemplo",
    course_id: "1",
    disabled: true,
    percentage_complete: 0,
  },
];

export const classes = [
  {
    id: "1",
    index: 1,
    name: "Introdução",
    video: "https://youtu.be/Bq_IM6SLL7g",
    introduction:
      "A lógica é uma ferramenta vital para o programador. Refinar seu raciocínio lógico é vital para quem deseja trabalhar nessa área.",
    module_id: "1",
  },
  {
    id: "2",
    index: 2,
    name: "Exercitando o cérebro",
    video: "https://youtu.be/roH1cXgdNJ8",
    introduction:
      "Agora que você entendeu a importância da lógica na programação nós podemos começar a trabalhar isso. O cérebro tem uma semelhança com o músculo: Você pode exercitar ele. Você exercita o músculo na academia e o cérebro quebrando a cabeça!",
    module_id: "1",
  },
  {
    id: "3",
    index: 3,
    name: "Fazendo exercícios juntos",
    video: "https://youtu.be/_HDfrFK7rZ4",
    introduction:
      "Vamos pôr a mão na massa juntos! Vamos observar o desafio de lógica proposto pela Vunesp/TJ SP 2017.",
    module_id: "1",
  },
  {
    id: "4",
    index: 4,
    name: "Tabela Verdade",
    video: "https://youtu.be/xmzMPaw444A",
    introduction:
      "Imagine que você precisa verificar se uma afirmação é verdadeira ou falsa, mas para isso você precisa verificar um conjunto de condições relacionadas a outros fatos...",
    module_id: "1",
  },
  {
    id: "5",
    index: 5,
    name: "Proposição Condicional",
    video: "https://youtu.be/lTtS2A_p-lg",
    introduction:
      'A proposição condicional é um conceito muito importante da lógica. Ele cria uma relação de implicação entre duas afirmações. É representado pelo símbolo "→" ou pelo “se... então”. Nela há duas partes: a antecedente e a consequente...',
    module_id: "1",
  },
  {
    id: "6",
    index: 6,
    name: "Importância dos jogos",
    video: "https://youtu.be/upvL8w5-2ZU",
    introduction:
      "Jogos podem criar ambientes desafiadores aonde temos que resolver problemas, tomar decisões rápidas com informações limitadas, identificar padrões, criar estratégias, fazer avaliações lógicas...",
    module_id: "1",
  },
  {
    id: "7",
    index: 7,
    name: "Exercitando alguns conceitos da matemática",
    video: "https://youtu.be/YJwDzjvCw6g",
    introduction:
      "média aritmética, progressão aritmética e geométrica, fatorial, fibonacci, resto da divisão",
    module_id: "1",
  },
  {
    id: "8",
    index: 8,
    name: "Exercícios",
    video: "https://youtu.be/Ne5XO2LwxmE",
    introduction: "Preparece para a avaliação!",
    module_id: "1",
  },
  {
    id: "9",
    index: 9,
    name: "Prova de Lógica I",
    video: "https://youtu.be/Ne5XO2LwxmE",
    introduction: "Avaliação para testar como estão indo...",
    module_id: "1",
  },
  {
    id: "10",
    index: 10,
    name: "Dicas",
    video: "https://youtu.be/3HNlepEfPqc",
    introduction: "Algumas dicas para os estudos de programação...",
    module_id: "1",
  },
];

export const lessonArticles = [
  {
    id: "3",
    title: "",
    Content: () => {
      return (
        <>
          <p>
            A lógica é uma ferramenta vital para o programador. Refinar seu
            raciocínio lógico é vital para quem deseja trabalhar nessa área.
          </p>
          <p>
            A lógica na programação é usada para criar soluções para problemas
            variados, que podem necessitar da aplicação de raciocínio
            matemáticos por exemplo, por meio de um conjunto de ferramentas,
            como a linguagem de programação.
          </p>
          <p>
            Um dos principais benefícios da aplicação da lógica de programação é
            a capacidade de criar aplicações capazes de tomar decisões baseadas
            em condições e o uso dos laços de repetição, estrutura que permitem
            a repetição de instruções de forma eficiente e automatizada,
            economizando nosso tempo e esforço.
          </p>
          <p>
            Na programação muitas vezes precisamos resolver problemas complexos,
            aonde precisamos analisar cuidadosamente tudo, inclusive quebrando
            todo o processo em partes menores. Com um bom raciocínio lógico
            devemos não apenas solucionar o problema, mas também criar códigos
            legíveis, sem redundâncias e fáceis de serem atualizados e
            corrigidos.
          </p>
          <p>
            Ou seja, a lógica é extremamente importante para criar soluções
            usando as diversas estruturas que veremos no curso. Com ela o
            programador pode criar softwares de qualidade, com escalabilidade,
            com flexibilidade e que atende a demanda do usuário. Investir no
            desenvolvimento das habilidades lógicas é vital para a formação do
            profissional da programação e para a evolução de sua carreira.
          </p>
        </>
      );
    },
    lesson_id: "1",
  },
  {
    id: "4",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>
            "Você sabe como cortar um bolo em 8 partes com apenas 3 cortes?
            Tente desvendar esse enigma antes de ir para o próximo material...",
          </p>
          <Imagem
            src={cake_mobile}
            alt="bolo enfeitado"
            figcaption="Imagem de Jill Wellington encontrada em pixabay.com"
            width="300px"
            height="200px"
          />
        </>
      );
    },
    lesson_id: "1",
  },
  {
    id: "5",
    title: "Vamos exercitar!",
    Content: () => {
      return (
        <>
          <p>
            Agora que você entendeu a importância da lógica na programação nós
            podemos começar a trabalhar isso. O cérebro tem uma semelhança com o
            músculo: Você pode exercitar ele. Você exercita o músculo na
            academia e o cérebro quebrando a cabeça!
          </p>
          <p>
            Lembra da atividade do bolo? E aí, conseguiu? Se sim parabéns! Se
            não, vamos a solução!
          </p>
          <p>
            Com dois cortes você pode cortar o bolo em quatro partes facilmente:
          </p>
          <Imagem
            src={cake_partial_solution}
            alt="demonstração da solução parcial do problema"
            width="300px"
            height="300px"
          />
          <p>
            E agora vem o pulo do gato. Podemos fazer um corte na metade da
            altura do bolo para dividir todas essas partes em duas!
          </p>
          <Imagem
            src={cake_solution}
            alt="demonstração da solução parcial do problema"
            width="300px"
            height="300px"
          />
          <p>
            Uma solução bastante engenhosa né? As vezes um programador precisa
            pensar fora da caixa para resolver seus problemas.
          </p>
          <p>
            Agora você deve realizar uma lista de exercícios que vão exercitar
            seu raciocínio. Se precisar, faça anotações e divida o raciocínio em
            partes. Se estiver muito confuso pode ser necessário recomeçar tudo
            do zero. Vamos lá!
          </p>
        </>
      );
    },
    lesson_id: "2",
  },
  {
    id: "6",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Tente resolver essa lista de exercícios de lógica</p>
          <nav>
            <ul>
              <li>
                <a
                  href="https://rachacuca.com.br/logica/problemas/basico-1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Básico 1
                </a>
              </li>
              <li>
                <a
                  href="https://rachacuca.com.br/logica/problemas/basico-2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Básico 2
                </a>
              </li>
              <li>
                <a
                  href="https://rachacuca.com.br/logica/problemas/basico-3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Básico 3
                </a>
              </li>
              <li>
                <a
                  href="https://rachacuca.com.br/logica/problemas/amigas-na-escola/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Amigas na escola
                </a>
              </li>
              <li>
                <a
                  href="https://rachacuca.com.br/logica/problemas/amigas-na-piscina/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Amigas na piscina
                </a>
              </li>
            </ul>
          </nav>
        </>
      );
    },
    lesson_id: "2",
  },
  {
    id: "7",
    title: "Vamos pôr a mão na massa juntos!",
    Content: () => {
      return (
        <>
          <p>
            Vamos observar o desafio de lógica abaixo proposto pela Vunesp/TJ SP
            2017.
          </p>
          <p>
            Em um edifício com apartamentos somente nos andares de 1º ao 4º,
            moram 4 meninas, em andares distintos: Joana, Yara, Kelly e Bete,
            não necessariamente nessa ordem. Cada uma delas tem um animal de
            estimação diferente: gato, cachorro, passarinho e tartaruga, não
            necessariamente nessa ordem. Bete vive reclamando do barulho feito
            pelo cachorro, no andar imediatamente acima do seu. Joana, que não
            mora no 4º, mora um andar acima do de Kelly, que tem o passarinho e
            não mora no 2º andar. Quem mora no 3º andar tem uma tartaruga. Sendo
            assim, é correto afirmar que:
          </p>
          <ol className="letters">
            <li>Kelly não mora no 1º andar.</li>
            <li>Bete tem um gato.</li>
            <li>Joana mora no 3º andar e tem um gato.</li>
            <li>
              O gato é o animal de estimação da menina que mora no 1º andar.
            </li>
            <li>Yara mora no 4º andar e tem um cachorro.</li>
          </ol>
          <h2>Vamos raciocinar</h2>
          <p>
            Temos um conjunto de fatos que sabemos que nos levarão a uma das
            alternativas. Podemos começar por listar esses fatos:
          </p>
          <ol>
            <li>São 4 andares</li>
            <li>Cada andar tem uma menina: Joana, Yara, Kelly, Bete</li>
            <li>
              Cada uma tem um animal: gato, cachorro, passarinho e tartaruga
            </li>
            <li>
              Bete vive reclamando do barulho feito pelo cachorro, no andar
              imediatamente acima do seu
            </li>
            <li>Joana não mora no 4º</li>
            <li>Joana mora um andar acima do de Kelly</li>
            <li>Kelly tem o passarinho</li>
            <li>Kelly não mora no 2º andar</li>
            <li>Quem mora no 3º andar tem uma tartaruga</li>
          </ol>
          <p>
            Agora que temos essas informações, temos que chegar a conclusões com
            elas...
          </p>
          <p>
            Se tem um cachorro acima de bete, ele (o cachorro) não pode estar no
            primeiro andar. Se tem uma tartaruga no terceiro andar então o
            cachorro ou está no segundo ou no quarto.
          </p>
          <p>
            Se Joana não mora no quarto andar (fato 5) e mora um andar acima da
            Kelly (fato 6), que não mora no segundo (fato 8), ela só poderia
            estar no segundo pois:
          </p>
          <ul>
            <li>
              O primeiro andar não está acima de ninguém (conflito com o fato 6)
            </li>
            <li>
              Terceiro andar está acima do segundo, que sabemos que a Kelly não
              mora lá (fato 8)
            </li>
            <li>Ela não mora no quarto (fato 5)</li>
          </ul>
          <p>
            Ou seja, a Kelly mora no primeiro andar, já que mora abaixo de Joana
            (fato 6).
          </p>
          <p>
            Lembrando que a Bete reclama do cachorro no andar acima, mas no
            primeiro temos a Kelly, no segundo a Joana, então para existir um
            andar acima da Bete só sobrou o terceiro, logo ela que possui a
            tartaruga (fato 9). De bônus sabemos que no quarto está Yara
            (deduzimos por eliminação) e tem um cachorro (por causa do fato 4).
          </p>
          <p>Sabendo disso podemos descobrir a questão correta!</p>
          <ol className="letters">
            <li>
              <p>Kelly não mora no 1º andar.</p>
              <p>
                <span className="red">
                  Errado, nós descobrimos que ela mora de fato no primeiro
                  andar.
                </span>
              </p>
            </li>
            <li>
              <p>Bete tem um gato.</p>
              <p>
                <span className="red">
                  Como descobrimos, Bete possui uma tartaruga.
                </span>
              </p>
            </li>
            <li>
              <p>Joana mora no 3º andar e tem um gato.</p>
              <p>
                <apan className="red">Joana mora no segundo andar.</apan>
              </p>
            </li>
            <li>
              <p>
                O gato é o animal de estimação da menina que mora no 1º andar.
              </p>
              <p>
                <span className="red">
                  Kelly é a menina que mora no primeiro andar e ela possui o
                  passarinho.
                </span>
              </p>
            </li>
            <li>
              <p>Yara mora no 4º andar e tem um cachorro.</p>
              <p>
                <span className="green">
                  Por eliminação ou usando nossas conclusões, podemos afirmar
                  que essa alternativa está certa!
                </span>
              </p>
            </li>
          </ol>
          <p>
            Não conseguiu acompanha? Pegue um papel e uma caneta e tente tornar
            o problema mais visual com desenhos e setas ou faça suas próprias
            anotações para entender.
          </p>
          <p>
            O importante aqui é perceber que separamos nosso problema em pedaços
            de forma que facilitasse nossa compreensão. Poderíamos despedaçar
            esse problema de várias outras formas. Sempre que estiver com
            dificuldade com um problema, separe ele em partes! Se preciso, faça
            anotações.
          </p>
        </>
      );
    },
    lesson_id: "3",
  },
  {
    id: "8",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Sua vez agora!</p>
          <p>
            <a
              href="https://rachacuca.com.br/logica/problemas/barraca-de-pastel/"
              target="_blank"
              rel="noreferrer"
            >
              Barraco de pastel
            </a>
          </p>
        </>
      );
    },
    lesson_id: "3",
  },
  {
    id: "9",
    title: "Tabela Verdade",
    Content: () => {
      return (
        <>
          <p>
            Imagine que você precisa verificar se uma afirmação é verdadeira ou
            falsa, mas para isso você precisa verificar um conjunto de condições
            relacionadas a outros fatos. Nós podemos criar uma tabela que
            relaciona todas as possíveis relações dessas condições com a
            veracidade ou a falsidade da afirmação que estamos observando. Essa
            é a tabela verdade!
          </p>
          <p>
            Vamos começar com um exemplo simples. Vamos supor que existem duas
            condições, A e B, aonde cada uma pode ser verdadeira (V) ou falsa
            (F). Quando podemos afirmar que A E B são verdadeiras? Usando a
            tabela verdade podemos analisar todas as possibilidades.
          </p>
          <table>
            <tr>
              <th>A</th>
              <th>B</th>
              <th>A E B</th>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>F</td>
            </tr>
          </table>
          <p>
            Na tabela podemos observar que todas as possibilidades do conjunto
            de veracidade e falsidade de A e B foram observadas e que apenas um
            caso a afirmação A E B é verdadeira, nos demais a afirmação é falsa.{" "}
          </p>
          <p>
            Agora vamos ver um exemplo menos abstrato, vamos supor duas
            informações:
          </p>
          <ul>
            <li>Tony gosta de gatos</li>
            <li>Tony gosta de cachorros</li>
          </ul>
          <p>
            Como seria a tabela verdade da frase “Tony gosta de gatos E de
            cachorros”?
          </p>
          <table>
            <tr>
              <th>Tony gosta de gatos</th>
              <th>Tony gosta de cachorros</th>
              <th>Tony gosta de gatos E de cachorros</th>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>F</td>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>V</td>
            </tr>
          </table>
          <p>
            Simples, né? Porém poderia ocorrer um conjunto mais complexo de
            condições que se relacionam em uma tabela verdade. Por exemplo:
          </p>
          <p>
            Sabemos que Maria irá sair para brincar se for um final de semana ou
            feriado, desde que não esteja chovendo. Podemos dividir essas
            condições da seguinte forma:
          </p>
          <ul>
            <li>É final de semana</li>
            <li>É feriado</li>
            <li>Está chovendo</li>
          </ul>
          <p>
            Então para que seja final de semana ou feriado e não esteja
            chovendo:
          </p>
          <table>
            <tr>
              <th>Final de semana</th>
              <th>Feriado</th>
              <th>Chovendo</th>
              <th>(Final de semana OU feriado) E NÃO chove</th>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>F</td>
              <td>V</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>F</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>F</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>F</td>
              <td>F</td>
            </tr>
          </table>
        </>
      );
    },
    lesson_id: "4",
  },
  {
    id: "10",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Sua vez! Faça a tabela verdade para as seguintes frases:</p>
          <ol className="letters">
            <li>Tony gosta de gatos ou de cachorros</li>
            <li>Tony gosta ou de gatos ou de cachorros</li>
            <li>
              Maria irá para a aula se a kombi da escola chegar ou se seu pai
              puder levar, desde que não esteja doente. Faça a tabela da
              afirmação “Maria irá para a escola”.
            </li>
          </ol>
          <p>
            <span className="red">Respostas na próxima aula</span>
          </p>
        </>
      );
    },
    lesson_id: "4",
  },
  {
    id: "11",
    title: "Gabarito do exercício anterior",
    Content: () => {
      return (
        <>
          <table>
            <tr>
              <th>Tony gosta de gatos</th>
              <th>Tony gosta de cachorros</th>
              <th>Tony gosta de gatos OU de cachorros</th>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>V</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>F</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Tony gosta de gatos</th>
              <th>Tony gosta de cachorros</th>
              <th>Tony gosta OU de gatos OU de cachorros</th>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>F</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Kombi chegou</th>
              <th>Pai pode levar</th>
              <th>Está doente</th>
              <th>Maria irá para a escola</th>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>F</td>
              <td>V</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>F</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>F</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>F</td>
              <td>F</td>
            </tr>
          </table>
        </>
      );
    },
    lesson_id: "5",
  },
  {
    id: "12",
    title: "Proposição condicional",
    Content: () => {
      return (
        <>
          <p>
            A proposição condicional é um conceito muito importante da lógica.
            Ele cria uma relação de implicação entre duas afirmações. É
            representado pelo símbolo "→" ou pelo “se... então”. Nela há duas
            partes: a antecedente e a consequente, sendo elas a primeira e a
            segunda afirmação, respectivamente. A relação é a seguinte: Se a
            antecedente for verdade podemos concluir que a consequente é também.
            Porém se a antecedente for falsa nada podemos concluir da
            consequente.
          </p>
          <p>
            Por exemplo: Se Tony tiver alergia a gatos então não vai gostar do
            Bichano. Se Tony tiver alergia a gatos podemos concluir que ele não
            vai gostar do Bichano. Mas se Tony não gostar do Bichano, não
            podemos concluir que ele tem alergia. Ele pode não gostar do Bichano
            por outros motivos.
          </p>
          <p>
            É possível montar uma tabela verdade de uma proposição condicional,
            porém repare nesse caso estamos analisando se a relação de “se...
            então” é verdadeira, e não se ocorreu ou não um fato.
          </p>
          <p>
            Aqui está a tabela-verdade para a proposição condicional "p → q":
          </p>
          <table>
            <tr>
              <th>p</th>
              <th>q</th>
              <th>p → q</th>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>V</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>V</td>
            </tr>
          </table>
          <p>
            Observe que a tabela verdade só dará falso em uma situação aonde p é
            verdadeiro e q é falso, pois é impossível que p seja verdade e q não
            seja.
          </p>
          <p>
            No nosso exemplo “Se Tony tiver alergia a gatos então não vai gostar
            do Bichano” a tabela seria:
          </p>
          <table>
            <tr>
              <th>Tony tem alergia</th>
              <th>Tony não gostou do Bichano</th>
              <th>Tem alergia → não gostou do Bichano</th>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>V</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>V</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>V</td>
            </tr>
          </table>
          <p>Nesse exemplo temos...</p>
          <ul>
            <li>
              Primeira linha: Tony tem a alergia e não gostou do Bichano
              (possível).
            </li>
            <li>
              Segunda linha: Tony tem alergia e gostou do Bichano (impossível
              segunda a nossa afirmação)
            </li>
            <li>
              Terceira linha: Tony não tem alergia e não gostou do Bichano
              (possível, ele pode não gostar do Bichano por qualquer outro
              motivo)
            </li>
            <li>
              Quarta linha: Tony não tem alergia e gostou do Bichano (possível)
            </li>
          </ul>
          <p>
            Ou seja, a proposição condicional é uma relação de duas afirmativas,
            onde a primeira afirmação verdadeira implica na veracidade da
            segunda, mas aonde o inverso não ocorre. Podemos construir uma frase
            com essas afirmativas usando “se... então” e é comum usar o símbolo
            "→" para essa relação.
          </p>
        </>
      );
    },
    lesson_id: "5",
  },
  {
    id: "13",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>
            Semelhante ao “se... então” existe o “...se e somente se...” cujo o
            símbolo é ⇿. Como seria a tabela verdade de “...se e somente se...”?
          </p>
          <p>
            <span className="red">Respostas na próxima aula</span>
          </p>
        </>
      );
    },
    lesson_id: "5",
  },
  {
    id: "14",
    title: "Gabarito do exercício anterior",
    Content: () => {
      return (
        <>
          <table>
            <tr>
              <th>p</th>
              <th>q</th>
              <th>P ⇿ q</th>
            </tr>
            <tr>
              <td>V</td>
              <td>V</td>
              <td>V</td>
            </tr>
            <tr>
              <td>V</td>
              <td>F</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>V</td>
              <td>F</td>
            </tr>
            <tr>
              <td>F</td>
              <td>F</td>
              <td>V</td>
            </tr>
          </table>
        </>
      );
    },
    lesson_id: "6",
  },
  {
    id: "15",
    title: "Importância dos jogos no desenvolvimento do raciocínio lógico",
    Content: () => {
      return (
        <>
          <p>
            Jogos podem criar ambientes desafiadores aonde temos que resolver
            problemas, tomar decisões rápidas com informações limitadas,
            identificar padrões, criar estratégias, fazer avaliações lógicas...
            ou seja, ter a experiência prática de usar suas habilidades lógicas
            e aprimorar elas! Será que você anda desenvolvendo suas habilidades
            com lógica em seu momento de lazer e nem sabia?
          </p>
          <p>
            Iremos usar esse potencial em algumas atividades na sequencia desse
            curso.
          </p>
        </>
      );
    },
    lesson_id: "6",
  },
  {
    id: "16",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Jogue esse joguinho de navegador até o fim:</p>
          <a href="https://poki.com.br/g/pink" target="_blank" rel="noreferrer">
            Pink
          </a>
        </>
      );
    },
    lesson_id: "6",
  },
  {
    id: "17",
    title: "Média aritmética",
    Content: () => {
      return (
        <>
          <p>
            Média aritmética é a média de um conjunto de valores. Pode ser
            calculada pela seguinte formula:
          </p>
          <p>Média = (valor1 + valor2 + valor3 + ... + valorN)/N</p>
          <p>
            Aonde “Média” é a média, “valor1”, “valor2”, “valor3” e “valorN” são
            valores do conjunto de valores e “N” é o número de valores.
          </p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "18",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Qual a média aritmética dos valores "3, 12, 23, 15, 2"?</p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "19",
    title: "Progressão aritmética e geométrica",
    Content: () => {
      return (
        <>
          <p>
            Progressão aritmética é uma progressão numérica aonde a diferença
            entre cada termo é sempre a mesma. Por exemplo: 5, 10, 15, 20, 25,
            30. É uma progressão que sobe de 5 em 5.
          </p>
          <p>
            Já na progressão geométrica o termo seguinte sempre é resultado do
            anterior multiplicado por um valor constante (com exceção do
            primeiro). Por exemplo: 2, 4, 8, 16, 32, 64. É uma progressão aonde
            o valor seguinte é sempre o dobro do anterior.
          </p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "20",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <ol>
            <li>Determine o vigésimo elemento da sequência 2, 7, 12, 17...</li>
            <li>Determine o oitavo elemento da sequência 2, 6, 18, 54....</li>
          </ol>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "21",
    title: "Fatorial",
    Content: () => {
      return (
        <>
          <p>
            O fatorial de um número inteiro positivo é a multiplicação deste por
            todos os seus antecessores até 1 e é denotado pelo símbolo de
            exclamação (!). Por exemplo:
          </p>
          <p>5! = 5x4x3x2x1 = 120</p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "22",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Qual o fatorial de 6?</p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "23",
    title: "Fibonacci",
    Content: () => {
      return (
        <>
          <p>
            Fibonacci é uma sequência numérica criada pelo matemático italiano
            Leonardo Fibonacci. A sequência começa com os números 0 e 1 e cada
            número seguinte é igual à soma dos dois anteriores. A sequência
            então fica 0, 1, 1, 2, 3, 5, 8, 13...
          </p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "24",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Qual o vigésimo termo da sequência Fibonacci?</p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "25",
    title: "Resto de divisão",
    Content: () => {
      return (
        <>
          <p>Você deve lembrar desse método de divisão...</p>
          <Imagem
            src={divisao_7_por_3}
            alt="divisão de 7 por 3"
            width="348px"
            height="306px"
          />
          <p>
            Nessa divisão nós dividimos 7 por 3, porém essa divisão não dá um
            número inteiro então nós retiramos o “resto” do número para torna-lo
            divisível por 3. Tiramos 1 de 7, ficando com 6. 6 dividido por 3 é
            igual a 2 e “sobra” 1. O valor do resto sempre será menor que a do
            divisor (no caso, o 3).
          </p>
          <Imagem
            src={demonstracao_divisao}
            alt="demonstração dos elementos da divisão"
            width="536px"
            height="352px"
          />
          <p>
            Logo um número dividido por 3 tem resto 0, 1 ou 2, necessariamente.
          </p>
          <p>
            Além disso podemos afirmar que se o resto for zero é porque o
            dividendo é divisível pelo divisor.
          </p>
          <Imagem
            src={divisao_8_por_2}
            alt="divisão de 8 por 2"
            width="333px"
            height="246px"
          />
          <p>O resto é 0, logo podemos afirmar que 8 é divisível por 2.</p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "26",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Qual o resto de um número ímpar dividido por dois?</p>
          <p className="red">Respostas na próxima aula</p>
        </>
      );
    },
    lesson_id: "7",
  },
  {
    id: "27",
    title: "Gabarito do exercício anterior",
    Content: () => {
      return (
        <>
          <p>Qual a média aritmética dos valores "3, 12, 23, 15, 2"?</p>
          <p>
            <span className="lightblue">3 + 12 + 23 + 15 + 2 = 55</span>
          </p>
          <p>
            <span className="lightblue">
              55/5 = <span className="bold">11</span>
            </span>
          </p>
          <p>Determine o vigésimo elemento da sequência 2, 7, 12, 17...</p>
          <p>
            <span className="lightblue">
              2, 7, 12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72, 77, 82,
              87, 92, <span className="bold">97</span>
            </span>
          </p>
          <p>Determine o oitavo elemento da sequência 2, 6, 18, 54....</p>
          <p>
            <span className="lightblue">
              2, 6, 18, 54, 162, 486, 1458, <span className="bold">4374</span>
            </span>
          </p>
          <p>Qual o fatorial de 6?</p>
          <p>
            <span className="lightblue">
              6x5x4x3x2x1 = <span className="bold">720</span>
            </span>
          </p>
          <p>Qual o vigésimo termo da sequência Fibonacci?</p>
          <p>
            <span className="lightblue">
              0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
              1597, 2584, <span className="bold">4181</span>
            </span>
          </p>
          <p>Qual o resto de um número ímpar dividido por dois?</p>
          <p>
            <span className="lightblue bold">1</span>
          </p>
        </>
      );
    },
    lesson_id: "8",
  },
  {
    id: "28",
    title: "Subindo de nível",
    Content: () => {
      return (
        <>
          <p>
            Parabéns por chegar até aqui. Muitos desses assuntos você verá
            novamente no curso de JavaScript, então são muito importantes. Agora
            iremos para uma sequencia de exercícios mais difíceis para você
            chegar na matéria de programação com a mente afiada para os desafios
            da programação! Vamos lá!
          </p>
        </>
      );
    },
    lesson_id: "8",
  },
  {
    id: "29",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>Tente resolver essa lista de exercícios de lógica</p>
          <a
            href="https://www.todamateria.com.br/raciocinio-logico-exercicios/"
            target="_blank"
            rel="noreferrer"
          >
            Exercícios de raciocínio lógico
          </a>
        </>
      );
    },
    lesson_id: "8",
  },
  {
    id: "30",
    title: "Prova de Lógica I",
    Content: () => {
      return (
        <>
          <p>Aguarde a liberação da prova...</p>
          <Button type={0} size={1} disabled>
            Fazer prova
          </Button>
        </>
      );
    },
    lesson_id: "9",
  },
  {
    id: "31",
    title: "Dicas",
    Content: () => {
      return (
        <>
          <h2>Cansaço Mental</h2>
          <p>
            O <span className="bold">cansaço mental</span> não é tão perceptível
            quando o físico. Confundimos o cansaço psicológico com{" "}
            <span className="bold">preguiça e procrastinação</span>, porém,
            diferente destes, o cansaço mental reduz nossa capacidade de
            raciocínio. Passar muito tempo estudando ou sob estresse pode deixar
            sua mente esgotada e fazer com que você trave em um problema.
            Perceber que precisa descansar faz parte do{" "}
            <span className="bold">autoconhecimento</span>. Nessas horas podemos
            tomar um banho, fazer uma caminhada, se deitar, brincar com o pet e
            etc... Ao retornar... “puff”, a solução do problema vem à cabeça!
          </p>
          <h2>Paciência</h2>
          <p>
            Não adianta achar que todos os problemas vão ser resolvido em
            minutos ou em horas... as vezes problemas ocupam nossa mente por
            dias! Programadores estão lá para resolver problemas, incluindo
            problemas que talvez ninguém nunca tenha pensado sobre e sejam muito
            cabeludos. Então <span className="bold">seja persistente</span>. Eu
            gosto de pensar que quando mais desafiador o problema mais prazeroso
            será superá-lo.
          </p>
          <h2>Não é uma competição</h2>
          <p>
            Lembre-se que não é uma competição,{" "}
            <span className="bold">é um processo de aprendizado</span>. Então
            não importa se alguém resolveu antes de você.
          </p>
          <h2>Não confie demais na sua intuição</h2>
          <p>
            Não confie demais que sabe exatamente aonde erro. Podemos passar
            horas prezo analisando um mesmo ponto da lógica, com a certeza de
            que o erro está lá. Se estiver preso, procure o erro que cometeu em
            cada paço do processo, ou melhor, recomece do zero!
          </p>
          <h2>Existe mais de uma solução</h2>
          <p>
            Não existe apenas uma resolução para um problema. Ok... alguns
            problemas podem ter apenas uma resolução apenas... mas quando
            falamos de programação não é o caso! Se você viu uma forma de
            resolver um problema não precisa se limitar a ela.
          </p>
          <h2>Artigo interessante com mais dicas:</h2>
          <p>
            <a
              href="https://novosalunos.com.br/raciocinio-logico/"
              target="_blank"
              rel="noreferrer"
            >
              4 dicas para melhorar seu raciocínio lógico de forma divertida
            </a>
          </p>
        </>
      );
    },
    lesson_id: "10",
  },
  {
    id: "32",
    title: "Atividade",
    Content: () => {
      return (
        <>
          <p>
            <a
              href="https://poki.com.br/g/dark-light-swap"
              target="_blank"
              rel="noreferrer"
            >
              Dark Light Swap
            </a>
          </p>
        </>
      );
    },
    lesson_id: "10",
  },
];
