const campoAddTarefa = document.getElementById("campo-add-tarefa");
const btnAddTarefa = document.querySelector(".btn-adicionar-tarefa");
const listaTarefas = document.querySelector(".lista-tarefas");

const btnMarcarFeito = document.querySelector(".feito");
const btnExcluir = document.querySelector(".excluir");

// LOCAL STORAGE
// funções que trata corretamente vetores armazenados em local storage
// créditos ao usuário sebastian (stack overflow)
// https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage
Storage.prototype.setObj = function (key, obj) {
	return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
	return JSON.parse(this.getItem(key));
};

if (
	localStorage.getObj("listaObjetosRegistros") == null ||
	localStorage.getObj("listaObjetosRegistros") == ""
) {
	var listaObjetosRegistros = [];
} else {
	var listaObjetosRegistros = JSON.parse(
		localStorage.getObj("listaObjetosRegistros")
	);
}

function preencherLista() {
	listaTarefas.innerHTML = "";
	listaObjetosRegistros.forEach((item) => {
		if (!item.excluido) {
			let novaTarefa = document.createElement("li");
			novaTarefa.classList.add("item-lista");
			novaTarefa.id = "elemento-" + item.id;
			if (item.feito) {
				novaTarefa.innerHTML = `<div class="item-opcoes marcado">
                                            <label for="item-${item.id}">${item.conteudo}</label>
                                            <div class="btns-item">
                                                <input
                                                    type="checkbox"
                                                    class="marcar-item"
                                                    name="item-${item.id}"
                                                    id="item-${item.id}"
                                                />
                                            </div>
                                        </div>`;
			} else {
				novaTarefa.innerHTML = `<div class="item-opcoes">
                                            <label for="item-${item.id}">${item.conteudo}</label>
                                            <div class="btns-item">
                                                <input
                                                    type="checkbox"
                                                    class="marcar-item"
                                                    name="item-${item.id}"
                                                    id="item-${item.id}"
                                                />
                                            </div>
                                        </div>`;
			}
			listaTarefas.append(novaTarefa);
		}
	});
	// localStorage.setItem("listaObjetosRegistros", listaObjetosRegistros);
	campoAddTarefa.focus();
}

function adicionarTarefa() {
	let conteudo = campoAddTarefa.value;
	if (listaObjetosRegistros.length == 0) {
		var itemId = 0;
	} else {
		var itemId = listaObjetosRegistros[listaObjetosRegistros.length - 1].id + 1;
	}
	if (conteudo == "") {
		window.alert("Digite uma tarefa");
	} else {
		var novoRegistro = {
			id: itemId,
			conteudo: conteudo,
			feito: false,
			excluido: false,
		};
		listaObjetosRegistros.push(novoRegistro);
		localStorage.setObj(
			"listaObjetosRegistros",
			JSON.stringify(listaObjetosRegistros)
		);

		campoAddTarefa.value = ""; // zera o campo de adicionar tarefa

		preencherLista();
	}
}

btnMarcarFeito.addEventListener("click", () => {
	let itensLista = document.querySelectorAll(".item-lista");
	itensLista.forEach(function (item) {
		let checkbox = item.lastElementChild.lastElementChild.lastElementChild;
		if (checkbox.checked) {
			let registroMarcar =
				checkbox.parentElement.parentElement.firstElementChild;
			listaObjetosRegistros.forEach((itemListaObjeto) => {
				if (itemListaObjeto.conteudo === registroMarcar.textContent) {
					itemListaObjeto.feito = true;
				}
			});
			checkbox.checked = false; // desmarcar a checkbox
		}
	});
	localStorage.setObj(
		"listaObjetosRegistros",
		JSON.stringify(listaObjetosRegistros)
	);
	preencherLista();
});

btnExcluir.addEventListener("click", () => {
	let itensLista = document.querySelectorAll(".item-lista");
	itensLista.forEach(function (item) {
		let checkbox = item.lastElementChild.lastElementChild.lastElementChild;
		if (checkbox.checked) {
			let registroExcluir =
				checkbox.parentElement.parentElement.firstElementChild.textContent;
			listaObjetosRegistros.forEach((itemListaObjeto) => {
				if (itemListaObjeto.conteudo === registroExcluir) {
					itemListaObjeto.excluido = true;
				}
			});
			checkbox.checked = false; // desmarcar a checkbox
		}
	});
	localStorage.setObj(
		"listaObjetosRegistros",
		JSON.stringify(listaObjetosRegistros)
	);
	preencherLista();
});

// Execute a function when the user presses a key on the keyboard
campoAddTarefa.addEventListener("keypress", function (event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		btnAddTarefa.click();
	}
});

preencherLista();
