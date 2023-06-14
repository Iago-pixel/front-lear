import { theme } from "../styles/global";
import cake_mobile from "../imgs/cake_mobile.png";
import cake_solution from "../imgs/cake_solution.jpg";
import cake_partial_solution from "../imgs/cake_partial_solution.jpg";
import { Imagem } from "../components/imagem";

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
];
