import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesGeralService {

  carrinho = new BehaviorSubject<number>(0);
  arrayLivros: Array<any> = [];

  constructor() { }

  getLivros(){
    return [
      {
        nome_livro: 'Jogos 2D com Stencyl',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_e3935e38-118f-406e-abdf-395acfcac7c1_large.jpg?v=1577997570'
        }],
        preco: 29.90,
        id: 1,
        descricao: 'Stencyl é um software para o desenvolvimento de games 2D utilizado tanto por profissionais como amadores, sendo até utilizado em escolas. A criação dos jogos se dá pelo método de arrastar e soltar blocos que contêm os códigos de programação prontos, com uma interface intuitiva e amigável que auxilia na compreensão e no desenvolvimento das funcionalidades. Personagens, cenários e níveis do jogo são importados e utilizados dessa forma, sem a necessidade sequer de utilização de uma linha de código de programação. Assim, o Stencyl abre possibilidades para um público maior que quer desenvolver seus próprios jogos, capacitando-o para, no futuro, utilizar-se dessa ferramenta na produção de seus projetos e também para atuar no mercado de trabalho.',
        paginas: 161,

      },
      {
        nome_livro: 'Kodular',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/cover_1cacb530-b6bb-457e-84b3-36b2130be8e0_large.jpg?v=1574392677'
        }],
        preco: 39.90,
        id: 2,
        descricao: 'Para quem está começando no mundo da programação e já quer colocar as mãos na massa, existem ferramentas que auxiliam na criação de aplicativos para smartphones, tablets e outros dispositivos, mesmo sem muito conhecimento técnico. Uma delas é o Kodular, que permite converter nossas ideias em aplicativos Android utilizando uma plataforma online gratuita de programação visual e intuitiva de arrastar e soltar. Você não precisa dominar uma linguagem de programação, pois ele já traz os blocos os códigos necessários. Os projetos desenvolvidos no Kodular ficam hospedados com segurança no Google Cloud Platform, assim não é necessário ficar fazendo backups nem download.',
        paginas: 206,

      },
      {
        nome_livro: 'Introdução ao kit robótico LEGO® EV3',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_fb293b37-d07d-44d3-b1b0-54196a4b7ffc_large.jpg?v=1537554040'
        }],
        preco: 49.90,
        id: 3,
        descricao: 'Os kits robóticos da LEGO® vêm alcançando um espaço cada vez maior na educação e aprendizagem. Dentre os fatores que mais contribuem para sua popularidade estão sua versatilidade e as inúmeras possibilidades que eles abrem, podendo ser usados por professores, alunos e pais, chegando até as olimpíadas de robótica. O próprio software oferece uma vasta gama de recursos e informações para que você dê seus primeiros passos e aprenda mais sobre programação por meio de uma linguagem visual de blocos.',
        paginas: 347,

      },
      {
        nome_livro: 'Construct 2',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_e3935e38-118f-406e-abdf-395acfcac7c1_large.jpg?v=1577997570'
        }],
        preco: 69.90,
        id: 4,
        descricao: 'O mercado de jogos no Brasil e o número de pessoas interessadas em ingressar nele não param de crescer. Porém, a maioria das plataformas para produção de jogos exige tanto background tecnológico que acaba desanimando qualquer um. Felizmente, o Construct 2 surgiu pensando no usuário que deseja desenvolver suas próprias ideias, sem a necessidade de possuir algum conhecimento técnico prévio.',
        paginas: 226,

      },
      {
        nome_livro: 'App Inventor',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/CaMWGHXUhWVSWaH4aZazotOcKm3ckVDokQ0IQ5fM0KU_large.jpg?v=1512148345'
        }],
        preco: 19.90,
        id: 5,
        descricao: 'O App Inventor 2 é uma ferramenta inovadora, desenvolvida pelo Google e mantida hoje pelo Instituto de Tecnologia de Massachusetts (MIT). Com ela, é possível criar aplicativos para dispositivos móveis Android, por meio de uma linguagem visual, sem precisar decorar ou escrever códigos de linguagem de programação. Com um simples arrastar e inserir blocos para a área de programação, em uma interface intuitiva, é uma excelente ferramenta de aprendizado que permite que os recém-chegados à programação de computador criem aplicativos completos.',
        paginas: 313,

      },
      {
        nome_livro: 'Scratch',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/YenvGixkQWFaq3oZpZr7dGXue8geB59fbwBHgS23orQ_large.jpg?v=1496341655'
        }],
        preco: 30.90,
        id: 6,
        descricao: 'O Scratch é um programa de computador de código aberto, no qual é possível escrever uma série de instruções que dirá ao computador o que deve ser feito. Com ele, podemos criar nossas próprias histórias, jogos ou animações, e tudo isso é feito através de uma linguagem visual: nós apenas precisamos arrastar blocos para dentro da área de programação. ',
        paginas: 161,

      },
      {
        nome_livro: 'Coleção Comece a Programar',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/casadocodigo-colecao-comece-programar_large.png?v=1470959480'
        }],
        preco: 74.90,
        id: 7,
        descricao: 'Começar no mundo da programação pode abrir portas, tanto de conhecimento, como para a sua carreira. E mais ainda, com pouco tempo produzir algo que realmente funciona é recompensador.',
        paginas: 311,

      },
      {
        nome_livro: 'Introdução à programação em C',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/introducao-c-featured_large.png?v=1440011167'
        }],
        preco: 79.90,
        id: 8,
        descricao: 'Você já programou alguma vez na vida? Pois então, prepare-se: sua vida vai mudar. Ensinar a máquina a fazer o que quer que ela faça é extremamente divertido. C é uma ótima linguagem para quem quer aprender programação: é bastante popular, poderosa, e nos dá diferentes níveis de abstração.',
        paginas: 290,

      },
      {
        nome_livro: 'Introdução à Computação',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/introducao-ruby-featured_9c39896f-ea67-4389-9f96-43a7a4de2b64_large.png?v=1432680156'
        }],
        preco: 69.90,
        id: 9,
        descricao: 'Em uma sociedade global que esbanja desenvolvimento tecnológico, aprender a programar passa a ser um conhecimento estratégico. Pensamentos transformados em linhas de código se tornam programas, jogos, sites e aplicativos. O homem pensa em ir até Marte e mergulha nos mistérios da ciência. Na fronteira de tudo isso, está o código.',
        paginas: 293,

      },
      {
        nome_livro: 'Lógica de Programação',
        categoria: 'programacao',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/programacao-featured_large.png?v=1411490523'
        }],
        preco: 39.90,
        id: 10,
        descricao: 'Com apenas um navegador e um editor de textos, você estará pronto para criar seus primeiros programas de computador. Lógica de programação e comandos como o if, for e while são motivados por meio de problemas que vivemos no nosso dia a dia. Dessa forma, ganha-se familiaridade com as instruções das linguagens de programação desde o começo do aprendizado!',
        paginas: 180,

      },
      /**
       * MOBILE
       */
      {
        nome_livro: 'Xamarin Forms e MVVM',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_09ec0fb9-e11f-4d31-b2ad-0d61a6b33de9_large.jpg?v=1547233267'
        }],
        preco: 99.90,
        id: 11,
        descricao: 'Desenvolver aplicativos multiplataformas se tornou uma tarefa muito mais simples com Xamarin e com Xamarin Forms, frameworks para desenvolvimento de aplicações mobile. São ferramentas com boa estabilidade e consistência, com uma curva de aprendizado muito tênue. O desenvolvimento de páginas para os dispositivos pode ser feito em arquivos XAML e/ou por meio de classes C#, com diversos recursos, como layout e gerenciadores de conteúdo, entre outros que você conhecerá aqui.',
        paginas: 476,

      },
      {
        nome_livro: 'Cordova avançado e PhoneGap',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/Amazon-Cordova-Avancado-Phonegap_large.jpg?v=1520620175'
        }],
        preco: 19.90,
        id: 12,
        descricao: 'Construir um aplicativo híbrido com Cordova e PhoneGap vai muito além de simplesmente codificar um HTML com JavaScript, ou mesmo usar um framework popular do mercado. É preciso uma base sólida de conhecimento nos mínimos detalhes para poder construir um aplicativo na íntegra e entregar um resultado profissional.',
        paginas: 292,

      },
      {
        nome_livro: 'Ionic Framework',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/OsdcfBgqoPY_jv4WXwum3vhGtACPSTDD8MT6eUXHRfo_large.jpg?v=1498853001'
        }],
        preco: 59.90,
        id: 13,
        descricao: 'Com a crescente difusão dos SmartPhones, surgiu uma grande quantidade de Sistemas Operacionais, o que por consequência aumentava a dificuldade em padronizar uma linha de desenvolvimento de aplicações que fossem portáveis ou multiplataforma. Por conta disto, surgiram os frameworks para compilação híbrida de aplicativos sendo desenvolvidos em uma única linguagem. Hoje, sabe-se que isso é possível com a mesclagem de HTML, JavaScript e CSS, basicamente. Dentro deste contexto, uma ferramenta se destaca, não apenas por compilar de forma híbrida, mas por oferecer diversos componentes, suporte a debugs e fácil aprendizado através de linguagens já conhecidas. Este é o poderoso Ionic Framework. Nele é possível utilizar componentes responsivos e atrativos para o desenvolvimento dos aplicativos, com a possibilidade de compilação e fácil instalação nas diferentes plataformas mobile. Seu foco é o front view dos aplicativos, isto é, fornece componentes para o desenvolvimento da interface dos aplicativos, fazendo o controle através do AngularJS e sendo compilado pelo PhoneGap.',
        paginas: 162,

      },
      {
        nome_livro: 'Xamarin Forms',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_2612a768-a47c-478a-a4a9-0911be3092dd_large.jpg?v=1552678840'
        }],
        preco: 69.90,
        id: 14,
        descricao: 'O Xamarin surgiu como uma inovação para o ramo do desenvolvimento móvel, tornando mais fácil e produtiva a entrega de aplicativos móveis para diferentes plataformas. Em conjunto com o Visual Studio, o Xamarin nos permite criar aplicativos móveis usando a linguagem C# e a plataforma .NET, a fim de ter a experiência de desenvolvimento híbrido para os principais dispositivos com iOS, Android e Windows Phone.',
        paginas: 308,

      },
      {
        nome_livro: 'Aplicações mobile híbridas com Cordova e PhoneGap',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/KfILNc_rMuuHlT3Jgh1nLQWbAM9Ct8Y_3egeItyVI-s_size_mode_3_size_1024x768_large.jpeg?v=1454700566'
        }],
        preco: 89.90,
        id: 15,
        descricao: 'Mobile é a plataforma do futuro, e as Apps são parte importante desse cenário. Mas programar pensando no mundo multiplataforma de hoje é trabalhoso e custoso, sobretudo para quem vem da Web e está acostumado à portabilidade do HTML, do CSS e do JavaScript.',
        paginas: 202,

      },
      {
        nome_livro: 'Kotlin com Android',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_4d784e4f-769e-4f00-82d9-c1c81628055a_large.jpg?v=1532117965'
        }],
        preco: 69.90,
        id: 16,
        descricao: 'A linguagem Kotlin vem ganhando cada vez mais destaque no cenário do desenvolvimento de aplicativos. Projetada para ter uma interoperabilidade total com código Java, Kotlin tem sido a primeira escolha na criação de aplicativos Android, sendo multiparadigma e multiplataforma. Trata-se de uma linguagem moderna, concisa e poderosa, oferecendo segurança, clareza e suporte a ferramentas de alta produtividade.',
        paginas: 346,

      },
      {
        nome_livro: 'Jogos Android',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/games-android-featured_large.png?v=1433544805'
        }],
        preco: 49.90,
        id: 17,
        descricao: '195, 300, 800 milhões de dólares!!! Essas são as cifras por trás dos jogos Angry Birds, Candy Crush e Clash of Clans. Quer pensar em cifras menores? Que tal 120 mil reais por dia? Foi o que Flappy Bird chegou a faturar. Pois é, já pensou em trabalhar com algo criativo, divertido e recompensador? Desenvolver jogos pode ser assim.',
        paginas: 128,

      },
      {
        nome_livro: 'Desenvolvimento de Jogos para Android',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/jogos-android-featured_large.png?v=1411488637'
        }],
        preco: 49.90,
        id: 18,
        descricao: 'Crie histórias e jogos da forma que sempre imaginou! Se você já conhece um pouco de desenvolvimento Android, vai se surpreender com este livro. De forma didática e prática, conceitos são apresentados sempre com aplicações diretas no jogo que é desenvolvido.',
        paginas: 185,

      },
      {
        nome_livro: 'Swift',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/Swift-ebook_large.png?v=1418170204'
        }],
        preco: 29.90,
        id: 19,
        descricao: 'Desenvolver aplicativos para iPhone e iPad nunca foi tão prazeroso. Com a nova linguagem da Apple (Swift) e com a recente versão do iOS, o desenvolvimento se torna descomplicado, pois há uma nova gama de recursos disponíveis que mantêm a clássica elegância da principal plataforma mobile do mundo.',
        paginas: 254,

      },
      {
        nome_livro: 'Desenvolvimento de Jogos para iOS',
        categoria: 'mobile',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/jogos-ios-featured_large.png?v=1411488760'
        }],
        preco: 19.90,
        id: 20,
        descricao: 'Aprenda a criar seus próprios jogos para iPhone e iPad! Para quem já conhece um pouco do desenvolvimento de aplicativos para iOS e sempre teve vontade de entrar no mundo de desenvolvimento de jogos, este livro ensina como utilizar o Cocos2D, framework gratuito com diversos benefícios para criação de jogos.',
        paginas: 204,

      },
      /**
       * INFRA
       */
      {
        nome_livro: 'Desconstruindo a Web',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/Xchinb4LgqfBhX3PDCrk_1PhP-e8xqEQulmXt3l2Ubk_large.jpg?v=1472159580'
        }],
        preco: 59.90,
        id: 21,
        descricao: 'Desde o momento em que o usuário aperta a tecla Enter do teclado até a página aparecer completamente carregada na tela, ocorre uma série de eventos. Como o navegador faz a chamada? Como a requisição sai do sistema operacional e chega ao servidor de destino? Como o HTTPS funciona? Como o servidor de aplicação se integra ao framework de desenvolvimento web?',
        paginas: 261,

      },
      {
        nome_livro: 'Apache Lucene',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/p_f8bdc4b6-ee0c-4fe9-a72f-5e2f6d1c600a_large.jpg?v=1568918697'
        }],
        preco: 49.90,
        id: 22,
        descricao: 'Estamos na Era Digital. Geramos dados a todo o momento, notícias, livros, e-mails, cadastros, logs, redes sociais, trânsito - tudo o que a sociedade faz gera algum tipo de informação. Em função dessa grande quantidade de dados e do pouco tempo disponível para fazer nossas tarefas, nasceram os sistemas de busca, que fazem parte de uma área da computação chamada de Recuperação da Informação. A informação deve ser fácil de encontrar para ser útil e é nesse ponto que os buscadores tornam o trabalho mais produtivo. A internet mudou a forma como vivemos e hoje utilizamos as ferramentas de busca para tudo no nosso cotidiano.',
        paginas: 261,

      },
      {
        nome_livro: 'Machine Learning',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/3Z-lkXuKGocz6w7BqNQA5VliFXOhOiEEZWy4rVI23KM_large.jpg?v=1508514002'
        }],
        preco: 49.90,
        id: 23,
        descricao: 'Nós, como seres humanos, sabemos facilmente distinguir uma informação de outra, e por meio da experiência, podemos tirar conclusões em decisões simples, como reconhecer se um animal é um cão ou um porco, se um e-mail é spam ou não, decidir se uma movimentação bancária é uma fraude. O computador pode aprender de forma similar, em um processo chamado de classificação dentro da área de machine learning.',
        paginas: 261,

      },
      {
        nome_livro: 'PostgreSQL',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/eFkRLwyjeOC9WaY2iNllrpf1zbpjYeA488RG0tjKfCA_large.jpg?v=1489173482'
        }],
        preco: 89.90,
        id: 24,
        descricao: 'Tecnologias de banco de dados dão suporte diário para operações e tomadas de decisões nos mais diversos níveis da empresa, da operação à gerência. Eles são vitais para as organizações modernas que querem se manter competitivas no mercado e no cenário atual de extrema concorrência. O PostgreSQL é um poderoso sistema gerenciador de banco de dados objeto-relacional de código aberto. Seu recente aumento de popularidade veio de usuários de outros bancos de dados em busca de um sistema com melhores garantias de confiabilidade, melhores recursos de consulta, mais operação previsível, ou simplesmente querendo algo mais fácil de aprender, entender e usar.',
        paginas: 361,

      },
      {
        nome_livro: 'Business Intelligence',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/vVWirlCq9G_fBkVCaXORAxIuYG_F0-gZ_M49f7b8vhA_large.jpg?v=1487964576'
        }],
        preco: 39.90,
        id: 25,
        descricao: 'O que fazer quando é preciso melhorar o processo de tomada de decisões na sua empresa? A resposta geralmente é “Business Intelligence”, mas o que, de fato, é BI? Quais os reais benefícios e desafios dessa metodologia e das tecnologias existentes no mercado que prometem implementá-la? Qual o custo envolvido na implantação de uma solução de BI e em sua evolução dentro da empresa?',
        paginas: 161,

      },
      {
        nome_livro: 'Big Data',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/4MRnPs-gpoIYhwqavVoX2Mc64HktcIqFtQOyX8x0yDo_large.jpg?v=1480680976'
        }],
        preco: 99.90,
        id: 26,
        descricao: 'Estamos na era dos dados. Não importa qual seja a sua área de atuação, uma palavra atualmente em evidência é: Big Data. Podemos encontrar casos de uso em que esse conceito permitiu a redução do número de fraudes, redução de custos na produção, eficiência energética, aumento de segurança, entre outros benefícios tão almejados em diversos domínios. Muito embora o interesse esteja em alta, Big Data ainda é um termo incipiente, gerando incertezas sobre sua definição, características, aplicabilidade e desafios. Como obter dados de diferentes fontes? Como extrair valor a partir dos dados? Qual a infraestrutura necessária para criar uma solução de Big Data? Quais habilidades são necessárias para atuar com Big Data em seu projeto?',
        paginas: 561,

      },
      {
        nome_livro: 'NoSQL',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/QJqAPTPE3N1YMoK32lk4dVw2XtfE6jmYTk-u1SahDYE_large.jpg?v=1469129941'
        }],
        preco: 59.90,
        id: 27,
        descricao: 'Ao começar um novo projeto, surgem questões importantes sobre quais linguagens de programação serão usadas, os principais frameworks e como será a arquitetura. Nessa tomada de decisões, a escolha por um banco de dados relacional costuma ser praticamente unânime. Porém, com o aumento das exigências de um banco de dados com alto volume de armazenamento e leitura, surgiu o movimento NoSQL – Não apenas SQL, ressaltando a importância de se questionar qual a melhor ferramenta para a sua necessidade, que pode ser um banco relacional ou não.',
        paginas: 101,

      },
      {
        nome_livro: 'Elasticsearch',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/yhNMnf94VN2SR0dh0B5R282kei0hlLCFW2P90qYm8Nw_size_mode_3_size_1024x768_large.jpeg?v=1458329541'
        }],
        preco: 29.90,
        id: 28,
        descricao: 'Com o aumento massivo da produção de dados na atualidade, empresas como o Twitter, Facebook e Netflix precisam seguir modelos de estruturação formalizados para processar essas verdadeiras montanhas de dados, aproveitando-se de conceitos de computação distribuída. Dentre as novas tecnologias que permitem o processamento ou consulta de conjuntos enormes de dados textuais em tempo real está o Elasticsearch.',
        paginas: 171,

      },
      {
        nome_livro: 'MySQL',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/bancomysql-featured_large.png?v=1437417574'
        }],
        preco: 79.90,
        id: 29,
        descricao: 'O MySQL é praticamente onipresente nos projetos de software atuais. Boa parte deles o utiliza como banco de dados para armazenar as informações da sua aplicação, por conta da sua facilidade de instalação e configuração.',
        paginas: 581,

      },
      {
        nome_livro: 'PL/SQL',
        categoria: 'infra',
        imagens: [{
          url: 'https://cdn.shopify.com/s/files/1/0155/7645/products/plsql-featured_large.png?v=1434740236'
        }],
        preco: 79.90,
        id: 30,
        descricao: 'Neste livro, Eduardo Gonçalves mostra o poder da linguagem PL/SQL e como você pode conseguir um alto grau de produtividade e performance para as suas aplicações. Os leitores iniciantes terão contato com conceitos sobre a estrutura da linguagem PL/SQL e suas características, e criarão programas, dos mais simples até os mais complexos, para atender às mais diversas necessidades. Para os já experientes, ajudará como fonte de referência e para atualizar conceitos e técnicas da linguagem.',
        paginas: 461,

      },
    ]
  }

  getLivrosById(id: any){
    let livro = this.getLivros()[id - 1];
    return livro;
  }

  setItensCarrinho(item: any){    
    if(localStorage.getItem("carrinho") === null || localStorage.getItem("carrinho") === 'null') {
      this.arrayLivros.push(item)
      localStorage.setItem("carrinho", JSON.stringify(this.arrayLivros))
      //console.log(localStorage.getItem("carrinho"));
    } else {
      this.arrayLivros = (JSON.parse(localStorage.getItem("carrinho")));    
      this.arrayLivros.push(item); 
      this.carrinho.next(this.arrayLivros.length);
      console.log(this.carrinho)
      localStorage.setItem("carrinho", JSON.stringify(this.arrayLivros))
    }
  }

  getItensCarrinho(){
    localStorage.getItem("carrinho");
  }

  removeItemCart(livro: any){
    let array = JSON.parse(localStorage.getItem("carrinho"));
    array = array.filter(arr => arr.livro.id !== livro.livro.id)    
    localStorage.setItem("carrinho", JSON.stringify(array))
    this.carrinho.next(array.length);
    return array;
  }
  
}
