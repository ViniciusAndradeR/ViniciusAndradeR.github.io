const questNum = document.getElementById("quest-num");
const questEnunciado = document.getElementById("quest-enunciado");
const questAlternativas = document.getElementById("quest-alternativas");
const divBotoesAlternativas = document.querySelector(".quest-letras-alts");
const btnAlternativas = document.querySelectorAll(".btn-alternativa");
const btnProximaQuestao = document.querySelector(".proxima-questao");
const divContainerFizQuiz = document.querySelector(".container-fim-quiz");

let questaoAtual = 0;
let questoesCorretas = 0;
let qtdTotalQuestoes = questoes.length;

function preencherQuestao(questaoAtual) {
	// finaliza o quiz e apresenta quantidade de questões corretas
	if (questaoAtual == qtdTotalQuestoes) {
		questNum.textContent = "Quiz Finalizado";
		questEnunciado.innerHTML =
			`Você acertou <span style="font-weight: bold">` +
			questoesCorretas +
			`</span> de <span style="font-weight: bold">` +
			qtdTotalQuestoes +
			"</span> questões! Obrigado por jogar :D";
		questAlternativas.textContent = "";
		divBotoesAlternativas.textContent = "";
		divContainerFizQuiz.classList.remove("esconder-fim-quiz");
	} else {
		// continua o quiz e gera a próxima questão
		questNum.textContent =
			"Questão " +
			questoes[questaoAtual].id +
			" - " +
			questoes[questaoAtual].tema;
		questEnunciado.innerHTML = questoes[questaoAtual].enunciado;
		questAlternativas.textContent = "";
		for (let i = 0; i < questoes[questaoAtual].alts.length; i++) {
			// Gerar as alternativas na tela
			const novaAlternativa = document.createElement("p");
			novaAlternativa.textContent =
				questoes[questaoAtual].alts[i][0] +
				") " +
				questoes[questaoAtual].alts[i][1]; // insere Letra e Valor da Alternativa
			questAlternativas.append(novaAlternativa);
		}

		// mostrar todos os botões das alternativas
		btnAlternativas.forEach((alt) => {
			alt.classList.remove("btn-alternativa-esconder");
		});

		// Se questão conter apenas 2 alternativas (Certo ou Errado),
		// esconder os botões 'C', 'D' e 'E'
		if (questoes[questaoAtual].alts.length == 2) {
			btnAlternativas.forEach((alt) => {
				if (
					alt.textContent === "C" ||
					alt.textContent === "D" ||
					alt.textContent === "E"
				) {
					alt.classList.add("btn-alternativa-esconder");
				}
			});
		}
	}
}

// Verificar se questão foi correta
btnAlternativas.forEach((alternativa) => {
	alternativa.addEventListener("click", () => {
		if (alternativa.textContent === questoes[questaoAtual].altCorreta) {
			questoesCorretas++;
			alternativa.classList.add("resposta-certa");
		} else {
			alternativa.classList.add("resposta-errada");
		}
		btnAlternativas.forEach((alt) => {
			alt.classList.add("alternativa-selecionada");
		});
		questaoAtual++;
		btnProximaQuestao.classList.add("mostrar-botao");
	});
});

btnProximaQuestao.addEventListener("click", () => {
	preencherQuestao(questaoAtual);

	btnAlternativas.forEach((alt) => {
		alt.classList.remove(
			"alternativa-selecionada",
			"resposta-certa",
			"resposta-errada"
		);
	});
	btnProximaQuestao.classList.remove("mostrar-botao");
});

// Iniciar o quiz inserindo a primeira questão
preencherQuestao(questaoAtual);
