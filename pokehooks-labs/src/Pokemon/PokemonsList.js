import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { listPokemons } from "./listPokemons";

const url = "https://pokeapi.co/api/v2/pokemon";
const url1 = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
const url2 = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20";
const url3 = "https://pokeapi.co/api/v2/pokemon?offset=60&limit=20";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);
  const [items, setItems] = useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url1);
      const data = await response.json();
      // const randomNum =  () =>   Math.floor(Math.random() * (data.results.length))
      // const randomList =   [...Array(5)].map(randomNum)
      // addPokemons(data.results.slice(randomNum,randomNum+3));
      // console.log(randomList);
      // setItems(randomList)
      addPokemons(items.map((i) => data.results[i]));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokemons-list">
      <h2>神奇寶貝列表</h2>

      <table>
        <tr>
          <th>寶貝</th>
          <th>捕獲</th>
          {useState}
        </tr>
        {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: "+",
        })}
      </table>
      <h1>圖片</h1>
      {items.map((pokemon) => (
        <span key={pokemon}>
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              (pokemon + 21) +
              ".png"
            }
            alt="无"
            className="sprite"
          />
          <span>id:{pokemon + 21}</span>
        </span>
      ))}
    </div>
  );
};

export default PokemonsList;
