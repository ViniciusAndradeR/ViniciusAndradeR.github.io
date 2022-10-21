const questoes = [
	{
		id: 1,
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
		id: 2,
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
		id: 3,
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
		id: 4,
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
		id: 5,
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
		id: 6,
		tema: "Ciência da Computação",
		enunciado: `Sistema operacional é o software que controla a alocação e o uso de recurso de hardware, tais como memória, tempo da unidade central de processamento (UCP), espaço em disco e controle dos dispositivos periféricos. Em relação aos sistemas operacionais, julgue a seguinte afirmação: "Em relação a interface com o usuário, o Windows é o único sistema operacional que apresenta ambiente de janelas".`,
		alts: [
			["A", "Certo"],
			["B", "Errado"],
		],
		altCorreta: "B",
	},
	{
		id: 7,
		tema: "Ciência da Computação",
		enunciado: `Para resolver problemas a respeito da transferência do conhecimento organizado, a ciência da informação se utiliza das ciências da computação, da psicologia e da linguística.`,
		alts: [
			["A", "Certo"],
			["B", "Errado"],
		],
		altCorreta: "A",
	},
	{
		id: 8,
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
		id: 9,
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
		id: 10,
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
];
