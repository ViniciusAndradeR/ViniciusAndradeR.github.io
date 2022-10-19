const tableBody = document.getElementById("table-body");

const getVoo = () => {
	fetch("http://localhost:8000/voos")
		.then((response) => response.json())
		.then((voos) => {
			preencherTabela(voos);
		})
		.catch((err) => console.log(err));
};

getVoo();

function preencherTabela(voos) {
	console.log(voos);
	for (const voo of voos) {
		const tableRow = document.createElement("tr");
		const tableIcon = document.createElement("td");
		tableIcon.textContent = "✈";
		tableRow.append(tableIcon);

		const vooDetalhes = {
			horario: voo.departing,
			destino: voo.destination.toUpperCase(),
			voo: voo.flightNumber.shift(),
			portao: voo.gate,
			status: voo.status.toUpperCase(),
		};

		for (const vooDetalhe in vooDetalhes) {
			const tableData = document.createElement("td");
			const palavra = Array.from(vooDetalhes[vooDetalhe]);

			for (const [index, letra] of palavra.entries()) {
				const letraDiv = document.createElement("div");

				setTimeout(() => {
					letraDiv.classList.add("flip");
					letraDiv.textContent = letra;
					tableData.append(letraDiv);
				}, 100 * index);
			}
			tableRow.append(tableData);
		}

		tableBody.append(tableRow);
	}
}
