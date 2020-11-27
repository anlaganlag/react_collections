import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { listPokemons } from "./listPokemons";

// const url = "https://pokeapi.co/api/v2/pokemon";
const url1 = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
const url2 = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20";
const url3 = "https://pokeapi.co/api/v2/pokemon?offset=60&limit=20";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons,page,setPage } = useContext(PokemonContext);
  const f1 = (a) => [...Array(a * 20).keys()].slice(a * 20 - 20);
  const oneTo20 = f1(1)

  const [items, setItems] = useState(f1(page));
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${
    (page - 1) * 20
  }&limit=20`;

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // const randomNum =  () =>   Math.floor(Math.random() * (data.results.length))
      // const randomList =   [...Array(5)].map(randomNum)
      // addPokemons(data.results.slice(randomNum,randomNum+3));
      console.log(data,"xxxxxxxxxxxxxx");
      // setItems(randomList)
      addPokemons(oneTo20.map((i) => data.results[i]));
      console.log(pokemons,"yyyyyyy");

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
              (pokemon+1 ) +
              ".png"
            }
            alt="无"
            className="sprite"
          />
          <span>id:{pokemon+1 }</span>
        </span>
      ))}
    </div>
  );
};

export default PokemonsList;
