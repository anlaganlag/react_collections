import { useReducer } from "react";
import { CAPTURE, RELEASE, ADD_POKEMON, ADD_POKEMONS } from "./actions";
//捕獲的釋放一個,等價於除了釋放的都保留.


//釋放就是從右邊移動到左邊..
//被選中要釋放的
const releasePokemon = (releasedPokemon, state) => ({
  //pms相當於+1
  pokemons: [...state.pokemons, releasedPokemon],
  //捕獲的pms相當於-1
  capturedPokemons: [...state.capturedPokemons].filter(
    (p) => p !== releasedPokemon
  ),
});

const capturePokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons].filter((p) => p !== pokemon),
  capturedPokemons: [...state.capturedPokemons, pokemon],
});

const addPokemon = (pokemon, state) => ({
  pokemons: [...state.pokemons, pokemon],
  capturedPokemons: state.capturedPokemons,
});

const addPokemons = (pokemons, state) => ({
  pokemons,
  capturedPokemons: state.capturedPokemons,
});

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case CAPTURE:
      return capturePokemon(action.pokemon, state);
    case RELEASE:
      return releasePokemon(action.pokemon, state);
    case ADD_POKEMON:
      return addPokemon(action.pokemon, state);
    case ADD_POKEMONS:
      return addPokemons(action.pokemons, state);
    default:
      return state;
  }
};

export const usePokemonReducer = () =>
  useReducer(pokemonReducer, {
    pokemons: [],
    capturedPokemons: [],
  });
