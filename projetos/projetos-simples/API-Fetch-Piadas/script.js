const piada = document.getElementById("piada");
const piadaBtn = document.getElementById("piadaBtn");

// ao carregar a página chama a função para gerar uma piada
gerarPiada();

async function gerarPiada() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	const response = await fetch("https://icanhazdadjoke.com", config);

	const data = await response.json();

	piada.innerHTML = data.joke;
}

// function gerarPiada() {
// 	const config = {
// 		headers: {
// 			Accept: "application/json",
// 		},
// 	};
// 	fetch("https://icanhazdadjoke.com", config)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			piada.innerHTML = data.joke;
// 		});
// }

// ao usuário clicar no botão "Outra Piada", a piada atual será substituída por uma nova piada
piadaBtn.addEventListener("click", function () {
	gerarPiada();
});
