import React, { useContext, useEffect,useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const url = "https://pokeapi.co/api/v2/pokemon";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);
  const [items, setItems] = useState([]);


  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const randomNum =  () =>   Math.floor(Math.random() * data.results.length)
      const randomList =   [...Array(2)].map(randomNum)
      // addPokemons(data.results.slice(randomNum,randomNum+3));
      setItems(randomList)
      addPokemons(randomList.map((i)=>data.results[i]));
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
        </tr>
        {listPokemons({
          pokemons,
          onClick: capture,
          buttonLabel: '+'
        })}
      </table>
      <h1>圖片</h1>
      {items.map((pokemon,idx) => (
          <span key={pokemon}>
          
            <img
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                pokemon +
                ".png"
              }
              alt="无"
              className="sprite"
            />
            <span>id:{pokemon}</span>
          </span>
        ))}
    </div>
  )
}

export default PokemonsList;
