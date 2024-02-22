export default function AirportServiceApi() {
	async function fetchAirports() : Promise<Array<Airport>> {
		return new Promise ((result) => 
			setTimeout(() => {
				result( [
					{
						id: 1,
						name: "Congonhas",
						city: "São Paulo",
						state: "SP",
						country: "Brasil",
						value: "CGH",
					},
					{
						id: 2,
						name: "Guarulhos",
						city: "São Paulo",
						state: "SP",
						country: "Brasil",
						value: "GRU",
					},
					{
						id: 3,
						name: "Galeão",
						city: "Rio de Janeiro",
						state: "RJ",
						country: "Brasil",
						value: "GIG",
					},
					{
						id: 4,
						name: "Santos Dumont",
						city: "Rio de Janeiro",
						state: "RJ",
						country: "Brasil",
						value: "SDU",
					},
					{
						id: 5,
						name: "Juscelino Kubitschek",
						city: "Brasília",
						state: "DF",
						country: "Brasil",
						value: "BSB",
					},
					{
						id: 6,
						name: "Viracopos",
						city: "Campinas",
						state: "SP",
						country: "Brasil",
						value: "VCP",
					},
					{
						id: 7,
						name: "Deputado Luís Eduardo Magalhães",
						city: "Salvador",
						state: "BA",
						country: "Brasil",
						value: "SSA",
					},
					{
						id: 8,
						name: "Salgado Filho",
						city: "Porto Alegre",
						state: "RS",
						country: "Brasil",
						value: "POA",
					},
					{
						id: 9,
						name: "Afonso Pena",
						city: "Curitiba",
						state: "PR",
						country: "Brasil",
						value: "CWB",
					},
					{
						id: 10,
						name: "Val-de-Cans",
						city: "Belém",
						state: "PA",
						country: "Brasil",
						value: "BEL",
					},
					{
						id: 11,
						name: "Pinto Martins",
						city: "Fortaleza",
						state: "CE",
						country: "Brasil",
						value: "FOR",
					},
					{
						id: 12,
						name: "Santa Genoveva",
						city: "Goiânia",
						state: "GO",
						country: "Brasil",
						value: "GYN",
					},
					{
						id: 13,
						name: "Tancredo Neves",
						city: "Belo Horizonte",
						state: "MG",
						country: "Brasil",
						value: "CNF",
					},
					{
						id: 14,
						name: "Hercílio Luz",
						city: "Florianópolis",
						state: "SC",
						country: "Brasil",
						value: "FLN",
					},
					{
						id: 15,
						name: "Zumbi dos Palmares",
						city: "Maceió",
						state: "AL",
						country: "Brasil",
						value: "MCZ",
					},
				]);
			}, 3000)
		);
	}

	return {
		fetchAirports
	};
}