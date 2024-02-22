"use client";

import { useEffect, useState } from "react";
import Card from "../comum/card";
import FlightServiceApi from "@/services/flight/data_source/flightServiceApi";
import AirportServiceApi from "@/services/airport/data_source/airportServiceApi";
import useDate from "@/data/hooks/useDate";

export default function SearchFlight() {
  const {date, addDays, formatDate} = useDate();
  const {fetchFlights} = FlightServiceApi();
  const {fetchAirports} = AirportServiceApi();
  const [airports, setAirports] = useState<Array<Airport>>([]);
  const [loading, setLoading] = useState(false);
  const [flights, setFlights] = useState<Array<Flight>>([]);

  const [search, setSearch] = useState<SearchInput>({
    type: "complete",
    qtd_passager: 1,
    class: "economy",
    dateFrom: formatDate(date),
    dateTo: formatDate(addDays(date, 5)),
    from: "BSB",
    to: "GRU",
  })

  useEffect(() => {
    getAirports();
  }, []);

  async function getAirports() {
    setLoading(true);
    try {
      const result = await fetchAirports();
      setAirports(result);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function handleChange(e: any) {
    setSearch({ ...search, [e.target.name]: e.target.value });
    if (e.target.name === "dateFrom") {
      let dateTo = formatDate(addDays(new Date(e.target.value), 5));
      setSearch({ ...search, 
        dateTo: dateTo,
        dateFrom: e.target.value
      });
    }
  }
  
  async function handleSubmit() {
    setLoading(true);
    try {
      fetchFlights(search).then((result) => {
        setFlights(result);
        setLoading(false);
      });
    } finally {
      setLoading(false);
    }

  }

  return ( <>
    { loading ?
      <p>Carregando...</p> 
    :
      <Card>
        <h1>Buscar viagens</h1>
        <div className="flex">
          <select 
            className="h-8 w-1/3 m-5" 
            name="type" 
            value={search.type} 
            onChange={(e) => handleChange(e)}
          >
            <option value="complete">Ida e Volta</option>
            <option value="single">Somente Ida</option>
          </select>
          <select 
            className="h-8 w-1/3 m-5" 
            name="qtd_passager" 
            value={search.qtd_passager} 
            onChange={(e) => handleChange(e)}  
          >
            <option value="1">1 adulto</option>
            <option value="2">2 adultos</option>
            <option value="3">3 adultos</option>
            <option value="4">4 adultos</option>
          </select>
          <select className="h-8 w-1/3 m-5" name="class" onChange={(e) => handleChange(e)}>
            <option value="economy">Classe econômica</option>
            <option value="firstClass">Primeira classe</option>
          </select>
        </div>
        <div className="flex">
          <input
            type="date"
            className={(search.type == 'complete'? "w-1/4" : "w-1/3") + " h-10 m-5"}
            placeholder="Data de ida"
            name="dateFrom"
            value={search.dateFrom}
            onChange={(e) => handleChange(e)}
          />
          { search.type == 'complete' && <input
              type="date"
              className="h-10 w-1/4 m-5"
              placeholder="Data de volta"
              name="dateTo"
              value={search.dateTo}
              onChange={(e) => handleChange(e)}
            />
          }
          <select 
            className={(search.type == 'complete'? "w-1/4" : "w-1/3") + " h-10 m-5"}
            name="from"
            value={search.from}
            onChange={(e) => handleChange(e)}
          >
            {airports.length > 0 && airports.map((airport) => (
              <option key={airport.value} value={airport.value}>
                {airport.name}
              </option>
            ))}
          </select>
        
          <select 
            className={(search.type == 'complete'? "w-1/4" : "w-1/3") + " h-10 m-5"}
            name="to"
            value={search.to}
            onChange={(e) => handleChange(e)}
          >
            {airports.length > 0 &&  airports.map((airport) => (
              <option key={airport.value} value={airport.value}>
                {airport.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex">
          <button 
            className="bg-primary-color hover:bg-primary-color-dark text-white font-bold py-2 px-4 rounded m-5 w-full"
            onClick={() => handleSubmit()}
          >
            Buscar
          </button>
        </div>
      </Card>
    }
  </>);
}