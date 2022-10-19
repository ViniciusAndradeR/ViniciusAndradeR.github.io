const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());

const PORT = 8000;

app.get("/voos", (req, res) => {
	const options = {
		method: "GET",
		url: "https://toronto-pearson-airport.p.rapidapi.com/departures",
		headers: {
			"X-RapidAPI-Key": process.env.RAPID_API_KEY,
			"X-RapidAPI-Host": "toronto-pearson-airport.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			console.log(response.data);
			res.json(response.data.slice(0, 6));
		})
		.catch(function (error) {
			console.error(error);
		});
});

app.listen(PORT, () => console.log("Executando Servidor na Porta " + PORT));
