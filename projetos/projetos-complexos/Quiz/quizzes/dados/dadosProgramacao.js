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
];
