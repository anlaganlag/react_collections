import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { listPokemons } from "./listPokemons";

// const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons,page,f1,url } = useContext(PokemonContext);

  let items = f1(page)

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // const randomNum =  () =>   Math.floor(Math.random() * (data.results.length))
      // const randomList =   [...Array(5)].map(randomNum)
      // addPokemons(data.results.slice(randomNum,randomNum+3));
      // setItems(randomList)
      addPokemons(f1(1).map((i) => data.results[i]));
      items = f1(page)

    };

    fetchPokemons();
  }, [page]);

  return (
    <div className="pokemons-list">
      <h2>野生的宝贝</h2>

        {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: "🦮 ",
        })}
      <h1>嘗試捕獲...</h1>
      {items.map((pokemon) => (
        <span key={pokemon}>
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              (pokemon+1 ) +
              ".png"
            }
            alt="无"
            className="sprite"
          />
          <span>{pokemon+1 }</span>
        </span>
      ))}
    </div>
  );
};

export default PokemonsList;
