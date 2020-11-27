import React, { createContext ,useState} from "react";
import { usePokemonReducer } from "./usePokemonReducer";
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from "./actions";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [{ pokemons, capturedPokemons }, dispatch] = usePokemonReducer();
  const [page, setPage] = useState(2)

  const capture = (pokemon) => () => dispatch({ type: CAPTURE, pokemon });
  const release = (pokemon) => () => dispatch({ type: RELEASE, pokemon });
  const addPokemon = (pokemon) => dispatch({ type: ADD_POKEMON, pokemon });
  const addPokemons = (pokemons) => dispatch({ type: ADD_POKEMONS, pokemons });

  const providerValue = {
    pokemons,
    capturedPokemons,
    page,
    capture,
    release,
    addPokemon,
    addPokemons,
    setPage
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
