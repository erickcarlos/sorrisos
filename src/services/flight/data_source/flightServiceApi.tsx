export default function FlightServiceApi() {
	async function fetchFlights(params: SearchInput) : Promise<Array<Flight>> {
		return new Promise ((result) => 
			setTimeout(() => {
				result( [
					{
						id: 1,
						origin: "GRU",
						destination: "CDG",
						price: 2000,
						date: "2021-10-10",
					},
					{
						id: 2,
						origin: "GRU",
						destination: "CDG",
						price: 2000,
						date: "2021-10-10",
					},
					{
						id: 3,
						origin: "GRU",
						destination: "CDG",
						price: 2000,
						date: "2021-10-10",
					},
				]);
			}, 3000)
		);
	}

	return {
		fetchFlights
	};
}
