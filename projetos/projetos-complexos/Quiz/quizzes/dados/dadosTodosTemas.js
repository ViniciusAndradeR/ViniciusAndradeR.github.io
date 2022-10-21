const questoes = [
	{
		id: 1,
		tema: "Programação",
		enunciado: `Em relação à tecnologias e linguagens utilizadas na construção de websites, numere as alternativas que apresente a sequência CORRETA: <br><br> 
		(1) CSS. <br> 
		(2) PHP.<br>  
		(3) HTML. <br><br>
		(  ) É uma linguagem de programação open source, que é interpretada pelo servidor, muito utilizada para o desenvolvimento de aplicações voltadas para a internet.<br><br> 
		(  ) Serve para promover o acabamento visual das páginas web. Pode ser compartilhado entre várias páginas, permitindo, assim, uma padronização visual muito simplificada e lógica.<br><br> 
		( ) É uma linguagem de marcação, que é interpretada pelo browser para dar formatação e posicionamento ao conteúdo do website.`,
		alts: [
			["A", "1 - 2 - 3"],
			["B", "3 - 2 - 1"],
			["C", "2 - 3 - 1"],
			["D", "2 - 1 - 3"],
			["E", "3 - 1 - 2"],
		],
		altCorreta: "D",
	},
	{
		id: 2,
		tema: "Programação",
		enunciado: `Considere que um programa orientado a objeto possui 5 classes: Máquina, Motor, MotorExplosão, MotorVapor e Gerador. MotorExplosão e MotorVapor são especializações de Motor. Motor e Gerador são especializações de Máquina. Todas as classes respondem a uma mensagem chamada “calcularPotencia”, sem argumentos, que calcula e retorna um número real que indica potência do objeto, em watts, de acordo com os valores de alguns atributos, com um algoritmo diferente em cada classe.<br><br>O exemplo acima caracteriza a capacidade de enviar a mesma mensagem para vários objetos e que cada objeto responda a essa mensagem de acordo com sua classe. Tal característica é conhecida como`,
		alts: [
			["A", "Polimorfismo"],
			["B", "Refatoração"],
			["C", "Herança Múltipla"],
			["D", "Independência de Dados"],
			["E", "Tratamento de Exceção"],
		],
		altCorreta: "A",
	},
	{
		id: 3,
		tema: "Programação",
		enunciado: `Julgue os itens seguintes, relativos à lógica de programação e construção de algoritmos. <br><br> "É possível implementar procedimentos cujos valores gerados podem ser armazenados em variáveis que garantem sua existência mesmo após o término da execução de tais procedimentos".`,
		alts: [
			["A", "Certo"],
			["B", "Errado"],
		],
		altCorreta: "B",
	},
	{
		id: 4,
		tema: "Programação",
		enunciado: `A respeito de depuração de programas e algoritmos, julgue a seguinte afirmação: "Para a depuração de programas em sistema operacional Windows, é necessário que o espaço de memória RAM esteja paginado, além do uso de uma máquina virtual conectada diretamente ao controle da CPU".`,
		alts: [
			["A", "Certo"],
			["B", "Errado"],
		],
		altCorreta: "B",
	},
	{
		id: 5,
		tema: "Programação",
		enunciado: "Para os códigos CSS, marque a opção sintaticamente CORRETA:",
		alts: [
			["A", "body {color: black}"],
			["B", "body:color=black"],
			["C", "{body;color:black}"],
			["D", "{body:color=black(body}"],
			["E", "{body = color: black}"],
		],
		altCorreta: "A",
	},
	{
		id: 6,
		tema: "Programação",
		enunciado:
			"O elemento em que uma das partes de uma informação é armazenada como cadeia de texto na máquina do usuário e cuja função principal é a de manter a persistência de sessões HTTP é denominado",
		alts: [
			["A", "frame"],
			["B", "JavaScript"],
			["C", "tag"],
			["D", "cookie"],
			["E", "XML"],
		],
		altCorreta: "D",
	},
	{
		id: 7,
		tema: "Programação",
		enunciado: `Em relação à utilização dos padrões Web (Web Standards), julgue a seguinte afirmação: "Estrutura e apresentação se reúnem em um mesmo código gerando assim um código único e simplificado".`,
		alts: [
			["A", "Certo"],
			["B", "Errado"],
		],
		altCorreta: "B",
	},
	{
		id: 8,
		tema: "Programação",
		enunciado: `Quando um Técnico criou uma página web usando HTML e CSS, um elemento ficou sobreposto ao outro na tela e ele deseja inverter a ordem de sobreposição desses elementos. Para definir ou mudar a ordem de sobreposição dos elementos ele deve utilizar a propriedade CSS`,
		alts: [
			["A", "z-index"],
			["B", "inverter"],
			["C", "position"],
			["D", "flex-position"],
			["E", "x-order"],
		],
		altCorreta: "A",
	},
	{
		id: 9,
		tema: "Programação",
		enunciado: `Com relação às Ferramentas de desenvolvimento Web: CSS, o Cascading Style Sheets (CSS) possibilita a apresentação visual da estrutura de um arquivo XHTML. As definições dos estilos dos objetos XHTML podem ser feitas externa ou internamente ao arquivo. Essas definições podem utilizar um ou mais arquivos CSS à parte ou ter declarações internas no arquivo XHTML. O CSS é declarado externo quando as estruturas de marcação são escritas de determinada forma. <br><br>Indique a alternativa que atende à forma CORRETA.`,
		alts: [
			[
				"A",
				"Ter um arquivo CSS à parte do arquivo XHTML. Inserir no arquivo XHTML a tag <a href> no escopo da tag <head></head>, indicando o arquivo externo.",
			],
			[
				"B",
				"Ter um arquivo CSS à parte do arquivo XHTML. Inserir no arquivo XHTML a tag <link> no escopo da tag <body></body>, indicando o arquivo externo.",
			],
			[
				"C",
				"Ter um arquivo CSS à parte do arquivo XHTML. Inserir no arquivo XHTML a tag <a hef> no escopo da tag <body></body>, indicando o arquivo externo.",
			],
			[
				"D",
				"Ter um arquivo CSS à parte do arquivo XHTML. Inserir no arquivo XHTML a tag   <link> no escopo da tag <head></head>, indicando o arquivo externo.",
			],
			[
				"E",
				"Escrever o código CSS diretamente no arquivo XHTML, mais precisamente no escopo da tag <html></html>",
			],
		],
		altCorreta: "D",
	},
	{
		id: 10,
		tema: "Programação",
		enunciado: `Com relação às Ferramentas de desenvolvimento Web: CSS, assinale a alternativa que completa a sentença: “A Cascading Style Sheets (CSS) é uma linguagem de folha de estilo criada para...”:`,
		alts: [
			[
				"A",
				"Separar a forma e o conteúdo em arquivos distintos de maneira a reduzir o tempo de carregamento de uma página web.",
			],
			[
				"B",
				"Descrever a apresentação de arquivos no formato HTML, utilizando definições de exibição dos elementos deste arquivo.",
			],
			[
				"C",
				"Permitir elaborar e executar, a partir do código HTML, funções matemáticas complexas.",
			],
			[
				"D",
				"Simplificar a diagramação em HTML com elementos definidos em estruturas hierárquicas.",
			],
			[
				"E",
				"Gerar automaticamente cores nos elementos dispostos no arquivo HTML de acordo com o conteúdo do mesmo.",
			],
		],
		altCorreta: "B",
	},
	{
		id: 11,
		tema: "Ciência da Computação",
		enunciado: `Considere que na Defensoria há uma lista ordenada com o nome de 1000 cidadãos amazonenses. Utilizando o método de pesquisa binária para localizar o nome de um destes cidadãos, serão necessárias, no máximo: `,
		alts: [
			["A", "1.000 comparações"],
			["B", "10 comparações"],
			["C", "500 comparações"],
			["D", "200 comparações"],
			["E", "5 comparações"],
		],
		altCorreta: "B",
	},
	{
		id: 12,
		tema: "Ciência da Computação",
		enunciado: `Assim como a Engenharia de Software, existe também na área de informática a chamada Ciência da Computação. Assinale a alternativa que melhor apresenta a diferença entre Engenharia de Software e Ciência da Computação.`,
		alts: [
			[
				"A",
				"A Ciência da Computação tem como objetivo o desenvolvimento de teorias e fundamentações. Já a Engenharia de Software se preocupa com as práticas de desenvolvimento de software.",
			],
			[
				"B",
				"A Engenharia de Software trata da criação dos sistemas de computação (softwares) enquanto a Ciência da Computação está ligada ao desenvolvimento e criação de componentes de hardware.",
			],
			[
				"C",
				"A Engenharia de Software trata dos sistemas com base em computadores, que inclui hardware e software, e a Ciência da Computação trata apenas dos aspectos de desenvolvimento de sistemas.",
			],
			[
				"D",
				"A Ciência da Computação trata dos sistemas com base em computadores, que inclui hardware e software, e a Engenharia de Software trata apenas dos aspectos de desenvolvimento de sistemas.",
			],
			[
				"E",
				"A Ciência da Computação destina-se ao estudo e solução para problemas genéricos das áreas de rede e banco de dados e a Engenharia de Software restringe- se ao desenvolvimento de sistemas.",
			],
		],
		altCorreta: "A",
	},
	{
		id: 13,
		tema: "Ciência da Computação",
		enunciado: `Em Ciência da Computação o conceito de barramento é`,
		alts: [
			[
				"A",
				"um slot de expansão encontrado nas placas mães de alguns tipos de computadores pessoais.",
			],
			[
				"B",
				"a parte do computador com a finalidade de conectar e interligar todos os componentes internos entre si.",
			],
			[
				"C",
				"um padrão para interligar dispositivos de armazenamento, como discos rígidos e drives de CD- ROMs, no interior de computadores pessoais.",
			],
			[
				"D",
				"um conjunto de linhas de comunicação, formada por fios elétricos condutores em paralelo, que permitem a interligação entre dispositivos de um sistema de computação.",
			],
			[
				"E",
				"uma interface, projetada inicialmente apenas para conectar discos rígidos.",
			],
		],
		altCorreta: "D",
	},
	{
		id: 14,
		tema: "Ciência da Computação",
		enunciado: `Uma pequena quantidade de memória volátil usada para armazenar os dados de configuração do computador é denominada`,
		alts: [
			["A", "DMA"],
			["B", "IRQ"],
			["C", "SETUP"],
			["D", "CMOS"],
			["E", "BIOS"],
		],
		altCorreta: "D",
	},
	{
		id: 15,
		tema: "Ciência da Computação",
		enunciado:
			"Nos conceitos de ciência da computação, um processo é um módulo executável que pode conter threads. Um conceito importante sobre threads que estão contidas no mesmo processo é que",
		alts: [
			["A", "podem compartilhar a memória do processo."],
			[
				"B",
				"evitam que processos concorrentes acessem recursos do processo principal.",
			],
			[
				"C",
				"acessam a memória estática ao contrário de processos convencionais.",
			],
			[
				"D",
				"controlam o acesso da memória dinâmica (heap) dos processos externos.",
			],
			[
				"E",
				"possuem proteção contra problemas comuns de processos, como vazamento e acessos inválidos da memória.",
			],
		],
		altCorreta: "A",
	},
	{
		id: 16,
		tema: "Ciência da Computação",
		enunciado: `Sistema operacional é o software que controla a alocação e o uso de recurso de hardware, tais como memória, tempo da unidade central de processamento (UCP), espaço em disco e controle dos dispositivos periféricos. Em relação aos sistemas operacionais, julgue a seguinte afirmação: "Em relação a interface com o usuário, o Windows é o único sistema operacional que apresenta ambiente de janelas".`,
		alts: [
			["A", "Certo"],
			["B", "Errado"],
		],
		altCorreta: "B",
	},
	{
		id: 17,
		tema: "Ciência da Computação",
		enunciado: `Para resolver problemas a respeito da transferência do conhecimento organizado, a ciência da informação se utiliza das ciências da computação, da psicologia e da linguística.`,
		alts: [
			["A", "Certo"],
			["B", "Errado"],
		],
		altCorreta: "A",
	},
	{
		id: 18,
		tema: "Ciência da Computação",
		enunciado: `Um sistema de arquivos, ou filesystem, é o método ou modo utilizado para o armazenamento das informações nos discos. Existem vários modelos de sistemas de arquivos, porém é INCORRETO dizer que dentre estes modelos esteja o`,
		alts: [
			["A", "NTFS"],
			["B", "FAT"],
			["C", "HFS"],
			["D", "EXT"],
			["E", "RSS"],
		],
		altCorreta: "E",
	},
	{
		id: 19,
		tema: "Ciência da Computação",
		enunciado: `No modelo de referência OSI (Open Systems Interconnection) da ISO (International Organization for Standardization), uma de suas camadas garante que as mensagens sejam entregues sem erros, em sequência e sem perdas ou duplicações. Essa é a camada de`,
		alts: [
			["A", "Apresentação"],
			["B", "Enlace de Dados."],
			["C", "Rede."],
			["D", "Sessão."],
			["E", "Transporte"],
		],
		altCorreta: "E",
	},
	{
		id: 20,
		tema: "Ciência da Computação",
		enunciado: `Qual dos seguintes protocolos é utilizado para, a partir do endereço IP de uma máquina, determinar o seu endereço MAC (endereço de hardware)?`,
		alts: [
			["A", "ARP"],
			["B", "DHCP"],
			["C", "RARP"],
			["D", "ICMP"],
			["E", "DNS"],
		],
		altCorreta: "A",
	},
	{
		id: 21,
		tema: "Conhecimentos Gerais",
		enunciado: `Em dezembro de 2013, a África do Sul perdeu seu ex-presidente e maior símbolo da luta contra o apartheid - regime de segregação racial - no país, Nelson Mandela. É correto afirmar que Mandela:`,
		alts: [
			[
				"A",
				"confiscou a propriedade dos brancos e puniu severamente os acusados de crimes raciais enquanto esteve governando a África do Sul.",
			],
			[
				"B",
				"desmantelou o regime segregacionista sul-africano por meio de negociações pacíficas.",
			],
			[
				"C",
				"eliminou as desigualdades sociais entre brancos e negros quase totalmente, garantindo a estes últimos melhores condições de vida.",
			],
			[
				"D",
				"atuou na luta armada contra o apartheid no início dos anos 1960, com a ajuda financeira dos Estados Unidos, já há décadas uma democracia racial.",
			],
			[
				"E",
				"atuou na luta armada contra o apartheid no início dos anos 1960, com a ajuda financeira dos Estados Unidos, já há décadas uma democracia racial.",
			],
		],
		altCorreta: "B",
	},
	{
		id: 22,
		tema: "Conhecimentos Gerais",
		enunciado: `Sustentabilidade é a capacidade de sustentação ou conservação de um processo ou sistema. No que diz respeito ao assunto “Sustentabilidade” analise as questões abaixo e identifique a sequência correta: <br><br>
        I. O conceito de sustentabilidade aborda a maneira como se deve agir em relação à natureza. <br> II. O desenvolvimento sustentável tem como objetivo a preservação do planeta e atendimento das necessidades empresariais. <br> III. Um recurso natural explorado de modo sustentável durará para sempre e com condições de também ser explorado por gerações futuras. <br> IV. Como exemplo de sustentabilidade temos: economia de água, garantia de alimentação em longo prazo e controle da urbanização e integração entre campo e cidades maiores.<br><br>
        A sequência correta é:`,
		alts: [
			["A", "Apenas a alternativa I está correta."],
			["B", "As alternativas I, II, III e IV estão corretas."],
			["C", "As alternativas II e III estão corretas."],
			["D", "As alternativa I e III estão corretas."],
			["E", "Nenhuma alternativa está correta."],
		],
		altCorreta: "D",
	},
	{
		id: 23,
		tema: "Conhecimentos Gerais",
		enunciado: `Fazendo parte dos chamados BRICS, esse país é bastante temido e respeitado pelo seu poder bélico, derivado dos períodos de guerra. Está em desenvolvimento econômico e exporta combustíveis fósseis. O país em questão é?`,
		alts: [
			["A", "Brasil"],
			["B", "Venezuela"],
			["C", "Índia"],
			["D", "África do Sul"],
			["E", "Rússia"],
		],
		altCorreta: "E",
	},
	{
		id: 24,
		tema: "Conhecimentos Gerais",
		enunciado: `A maior autoridade do Poder Executivo dos Estados da República Federativa do Brasil é:`,
		alts: [
			["A", "O Governador."],
			["B", "O Presidente da República."],
			["C", "O Presidente do Congresso Nacional."],
			["D", "O Presidente da Assembléia Legislativa."],
			["E", "O Presidente do Supremo Tribunal Federal."],
		],
		altCorreta: "A",
	},
	{
		id: 25,
		tema: "Conhecimentos Gerais",
		enunciado:
			"Longe da sonhada paz, 2019 herdará pelo menos oito das maiores guerras e conflitos armados em curso, com seus graus de complexidade elevados pela interferência de potências regionais e mundiais. O quadro para o próximo ano será tão intrincado para a diplomacia e doloroso para as populações civis envolvidas quanto o registrado em 2018. A guerra na Síria se tornou ainda mais violenta e complicada com o envolvimento, principalmente, de quais países?",
		alts: [
			["A", "Irã, Turquia e Portugal."],
			["B", "Rússia, Estados Unidos, Brasil e França."],
			["C", "Estados Unidos, Itália, Venezuela e França."],
			["D", "Turquia, China, Japão e Rússia."],
			["E", "Rússia, Estados Unidos, Irã e Turquia."],
		],
		altCorreta: "E",
	},
	{
		id: 26,
		tema: "Conhecimentos Gerais",
		enunciado: `Há consenso, nesses tempos de economia mundializada e em que a sociedade da  informação encaminha-se para uma sociedade do conhecimento, a respeito da  fundamental importância da educação para a superação do atraso material e para  a prevalência de uma autêntica cidadania. Oferecer à população uma educação  de boa qualidade e promover o desenvolvimento científico e tecnológico parecem  ser dois dos maiores desafios que os Estados contemporâneos têm à sua frente,  na atualidade. A esse respeito, julgue o  item  que se segue, relativo  ao caso  brasileiro. <br><br> Hoje, no Brasil, os municípios devem responsabilizar-se, prioritariamente, pelo ensino fundamental, e os estados, pelo ensino médio. Em termos de educação básica, a função do governo federal é mais suplementar – especialmente ajudando a financiá-la -, além de formular as políticas públicas para o setor, coordenar sua aplicação e avaliar o desempenho dos sistemas educacionais.`,
		alts: [
			["A", "Certo"],
			["B", "Errado"],
		],
		altCorreta: "A",
	},
	{
		id: 27,
		tema: "Conhecimentos Gerais",
		enunciado: `O Índice de Desenvolvimento Humano (IDH) foi concebido para superar uma abordagem meramente econômica de desenvolvimento, baseada na renda nacional. <br><br> Assinale a opção que apresenta os critérios que são adotados para estabelecer o IDH.`,
		alts: [
			[
				"A",
				"A taxa de desemprego, os investimentos em pesquisa e a média de anos de educação de adultos.",
			],
			[
				"B",
				"A expectativa de vida, o acesso ao conhecimento e a renda medida em paridade com o poder de compra.",
			],
			[
				"C",
				"A longevidade com saúde, a taxa de alfabetização e o produto interno bruto per capta.",
			],
			[
				"D",
				"A esperança de vida ao nascer, a matrícula escolar nos três níveis do ensino e o índice de empregabilidade.",
			],
			[
				"E",
				"O percentual da população economicamente ativa, o rendimento médio por gênero e o grau de desigualdade social.",
			],
		],
		altCorreta: "B",
	},
	{
		id: 28,
		tema: "Conhecimentos Gerais",
		enunciado: `Nos dias de hoje, o agronegócio desempenha papel relevante na pauta das exportações brasileiras. Em larga medida, o avanço obtido pelo país na produção de alimentos deve-se ao trabalho de uma instituição científica voltada para o campo e com reconhecimento internacional. Essa instituição é o(a)`,
		alts: [
			["A", "Ministério da Ciência e da Tecnologia (MCT)."],
			[
				"B",
				"Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq).",
			],
			["C", "Empresa Brasileira de Pesquisa Agropecuária (Embrapa)."],
			["D", "Financiadora de Estudos e Projetos (Finep)."],
			["E", "Banco Nacional de Desenvolvimento Econômico e Social (BNDES)."],
		],
		altCorreta: "C",
	},
	{
		id: 29,
		tema: "Conhecimentos Gerais",
		enunciado: `O cuidado com o planeta em que vivemos vem recebendo mais atenção, nas últimas décadas, devido ao ritmo de degradação do ambiente natural. Um exemplo dessa atenção foi a assinatura do Protocolo de Kyoto, por vários países, com o objetivo de preservar a Terra. O Protocolo de Kyoto tem como tema principal a(o)`,
		alts: [
			["A", "vegetação."],
			["B", "hidrografia."],
			["C", "solo."],
			["D", "relevo."],
			["E", "clima."],
		],
		altCorreta: "E",
	},
	{
		id: 30,
		tema: "Conhecimentos Gerais",
		enunciado: `Por ser a região mais desenvolvida, é a mais representativa no PIB brasileiro, correspondendo a 55,2% do PIB nacional. Destacam-se o setor industrial, financeiro e comercial. As indústrias automobilísticas, siderúrgicas e petrolíferas apresentam-se em grande quantidade. <br><br> A Região a que se refere o texto é:`,
		alts: [
			["A", "Norte"],
			["B", "Nordeste"],
			["C", "Sul"],
			["D", "Sudeste"],
			["E", "Centro-Oeste."],
		],
		altCorreta: "D",
	},
];
