import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>已捕获</h2>

      <table>
        <tr>
          <th>寶貝</th>
          <th>釋放</th>
        </tr>
        {listPokemons({
          pokemons: capturedPokemons,
          onClick: release,
          buttonLabel: '😺'
        })}
              {capturedPokemons.map((pokemon) => (
        <span key={pokemon}>
          <img
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              (pokemon.url.split("/")[6] ) +
              ".png"
            }
            alt="无"
            className="sprite"
          />
          <span>{pokemon.url.split("/")[6] }</span>
        </span>
      ))}
      </table>
    </div>
  )
}

export default Pokedex;
