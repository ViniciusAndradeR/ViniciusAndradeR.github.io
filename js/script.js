const menuTopo = document.querySelector(".container-menu-topo");
const botaoMenuToggle = document.querySelector(".icone-hamburguer");
const menuToggle = document.querySelector(".menu-toggle");
const secaoSobre = document.getElementById("sobre");
const containerTopoAfter = document.styleSheets[1].cssRules[0]; // gambiarra para poder alterar alguma propriedade do pseudo container-topo::after (neste caso propriedade height do menu-topo)

botaoMenuToggle.addEventListener("click", function () {
	menuToggle.classList.toggle("esconder-menu-toggle");
});

window.addEventListener("resize", function () {
	let larguraTela = window.innerWidth;
	if (larguraTela > 730) {
		containerTopoAfter.style.height = "80vh";
		menuToggle.classList.add("esconder-menu-toggle");
	}
});

/* Fixar menu ao deslizar tela para baixo */

window.addEventListener("scroll", function () {
	menuTopo.classList.toggle("fixar-menu", window.scrollY > 40);
});

function esconderMenuToggle() {
	menuToggle.classList.add("esconder-menu-toggle");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
