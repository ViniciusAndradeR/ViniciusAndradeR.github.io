const container = document.querySelector(".container");
const key = document.getElementById("id-event-key");
const keycode = document.getElementById("id-event-keycode");
const code = document.getElementById("id-event-code");

window.addEventListener("keydown", function (e) {
	container.innerHTML = `
            <div class="container-event">
				<p class="nome-event">event-key</p>
				<p class="result" id="id-event-key">${e.key === " " ? "Espaço" : e.key}</p>
			</div>
			<div class="container-event">
				<p class="nome-event">event-key-code</p>
				<p class="result" id="id-event-keycode">${e.keyCode}</p>
			</div>
			<div class="container-event">
				<p class="nome-event">event-code</p>
				<p class="result" id="id-event-code">${e.code}</p>
			</div>
    `;
});
