import React, { useState, useEffect, createContext } from "react";
import { usePokemonReducer } from "./usePokemonReducer";
import {
  CAPTURE,
  RELEASE,
  ADD_POKEMON,
  ADD_POKEMONS,
  POPULATE_LS_POKEMONS,
} from "./actions";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [{ pokemons, capturedPokemons }, dispatch] = usePokemonReducer();
  const [page, setPage] = useState(Math.floor(Math.random() * 55 + 1));
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${
    (page - 1) * 20
  }&limit=20`;

  const lsKEY = "catchPM";

  useEffect(() => {
    const storageCatch = JSON.parse(localStorage.getItem(lsKEY));
    if (storageCatch) {
      console.log(storageCatch, populateLSPokemons, "ssssssssss");
      populateLSPokemons(storageCatch);
    }
  }, []);

  useEffect(() => {
    if (!capturedPokemons) return;
    localStorage.setItem(lsKEY, JSON.stringify(capturedPokemons));
    console.log(capturedPokemons, populateLSPokemons, "setsetset");
  }, [capturedPokemons]);

  const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
  const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });
  const populateLSPokemons = (pokemons) =>
    dispatch({ type: POPULATE_LS_POKEMONS, pokemons });

  const f1 = (a) => (a > 0 ? [...Array(a * 20).keys()].slice(a * 20 - 20) : []);
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
    populateLSPokemons,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
