import React, { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import { listPokemons } from "./listPokemons";
import Grid from "./Grid";

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <Grid>
        {capturedPokemons.map((pokemon) => (
          <span key={pokemon}>
            <img
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                pokemon.url.split("/")[6] +
                ".png"
              }
              alt=""
              className="sprite"
            />
            <span>{pokemon.url.split("/")[6] + ":" + pokemon.name}</span>
          </span>
        ))}
      </Grid>
      {capturedPokemons.length > 0 && <h2>已捕寶貝</h2>}

      {listPokemons({
        pokemons: capturedPokemons,
        onClick: release,
        buttonLabel: "",
      })}
    </div>
  );
};

export default Pokedex;
