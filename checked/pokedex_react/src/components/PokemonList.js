import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PokemonDetail from "./PokemonDetail";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${page}`)
      .then((response) => response.json())
      .then((json) => {
        json.results.forEach((pokemon) => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`)
            .then((res) => res.json())
            .then((data) => {
              setPokemons((prevData) => [...prevData, data]);
            });
        });
      });
    return function cleanUp() {
      setPokemons([]);
    };
  }, [page]);

  function previousPage() {
    if (page > 0) {
      setPage(page - 30);
    }
  }

  function nextPage() {
    setPage(page + 30);
  }

  return (
    <div>
      <div className="changePageBtnContainer">
        <button onClick={previousPage} className="btn btn-primary">
          前一頁
        </button>
        <button onClick={nextPage} className="btn btn-primary">
          下一頁
        </button>
      </div>
      <div className="row align-items-center">
        {pokemons.map((pokemon) => (
          <div className="card-wrapper">
            <PokemonDetail
              pokemonDetails={pokemon}
              key={pokemon.id}
            ></PokemonDetail>
          </div>
        ))}
      </div>

      <div className="changePageBtnContainer">
        <button onClick={previousPage} className="btn btn-primary">
          前一頁
        </button>
        <button onClick={nextPage} className="btn btn-primary">
          下一頁
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
