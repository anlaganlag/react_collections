import React, { useContext } from "react";

import { PokemonContext } from "./PokemonContext";
import { listPokemons } from "./listPokemons";
import Grid from "./Grid";
import { Data } from "./Data";

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  console.log(capturedPokemons,"xxxxx");
  
  return (
    <div className="pokedex">
      <Grid>
        {capturedPokemons.sort( (a,b)=>a.id-b.id).map((pokemon) => (
          <div
            className="image-container"
            key={pokemon}
            onClick={release(pokemon)}
          >
            <img
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                pokemon.id +
                ".png"
              }
              alt=""
              className="sprite"
            />
            {/* <span>{pokemon.url.split("/")[6] + ":" + Data[pokemon.url.split("/")[6]-1].name.chinese}</span> */}

            <span>
              {" "}
              {(Data[pokemon.id - 1] &&
                Data[pokemon.id - 1].name.chinese) ||
                (pokemon && pokemon.name)}
            </span>
            <div>{pokemon.id}</div>

          </div>
        ))}
      </Grid>
      {capturedPokemons.length > 0 && <h2>已捕获寶貝:</h2>}

      {listPokemons({
        pokemons: capturedPokemons,
        onClick: release,
        buttonLabel: "",
      })}
    </div>
  );
};

export default Pokedex;
