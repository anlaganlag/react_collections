import React, { createContext, useState } from "react";
import { usePokemonReducer } from "./usePokemonReducer";
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from "./actions";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [{ pokemons, capturedPokemons }, dispatch] = usePokemonReducer();
  const [page, setPage] = useState(40);
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${
    (page - 1) * 20
  }&limit=20`;

  const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
  const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });

  const f1 = (a) => [...Array(a * 20).keys()].slice(a * 20 - 20);
  const oneTo20 = f1(1);

  const providerValue = {
    pokemons,
    capturedPokemons,
    page,
    url,
    capture,
    release,
    addPokemon,
    addPokemons,
    setPage,
    f1,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
