import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { listPokemons } from "./listPokemons";
import Grid from "./Grid";
import { Data } from "./Data";

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
      addPokemons(f1(1).map((i) =>({ ...data.results[i],"id":data.results[i].url.split("/")[6]} )|| "")); items = f1(page);
    };

    fetchPokemons();
  }, [page]);

  return (
    <div className="pokemons-list">
      <h2>(含ID)野生的宝贝</h2>
      <h5>按r随机展示一页</h5>
      <h6>vim控制页数</h6>

      {listPokemons({
        pokemons,
        onClick: capture,
        buttonLabel: " ",
      })}
      <Grid   header={pokemons.length > 0 && "嘗試捕獲..."}>
        {pokemons.map((pokemon) => (
          <div className="image-container" onClick={capture(pokemon)}>
            {/* <div className="image-idx">{pokemon&&(pokemon.url.split('/')[6])}</div> */}

            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon ? pokemon.url.split("/")[6] : 1000
              }.png`}
              alt=""
              className="sprite"
            />
            {/* <div className="image-idx">{pokemon&&(pokemon.url.split('/')[6])}</div> */}
            <div className="image-name" >
              {pokemon&&(Data[pokemon.url.split("/")[6]-1] &&
                Data[pokemon.url.split("/")[6]-1].name.chinese) ||
                (  pokemon.name)}
            </div>
          </div>
        ))}
      </Grid>
      {/* {listPokemons({
        pokemons,
        onClick: capture,
        buttonLabel: " ",
      })} */}
    </div>
  );
};

export default PokemonsList;
