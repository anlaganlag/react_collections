import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { listPokemons } from "./listPokemons";
import Grid from "./Grid";

// const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons, page, f1, url } = useContext(
    PokemonContext
  );

  let items = f1(page);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // const randomNum =  () =>   Math.floor(Math.random() * (data.results.length))
      // const randomList =   [...Array(5)].map(randomNum)
      // addPokemons(data.results.slice(randomNum,randomNum+3));
      // setItems(randomList)
      addPokemons(f1(1).map((i) => data.results[i]));
      items = f1(page);
    };

    fetchPokemons();
  }, [page]);

  return (
    <div className="pokemons-list">
      <h2>野生的宝贝</h2>

      {listPokemons({
        pokemons,
        onClick: capture,
        buttonLabel: " ",
      })}
      <Grid header={pokemons.length > 0 && "嘗試捕獲..."}>
        {pokemons.map((pokemon) => (
          <div>

          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              pokemon.url.split("/")[6] +
              ".png"
            }
            alt="无图"
            className="sprite"
            />
            <span>{pokemon.url.split("/")[6] +":"+pokemon.name}</span>
          </div>

        ))}
      </Grid>
    </div>
  );
};

export default PokemonsList;
