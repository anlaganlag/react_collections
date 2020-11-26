import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>寶貝圖鑑</h2>

      <table>
        <tr>
          <th>寶貝</th>
          <th>釋放</th>
        </tr>
        {listPokemons({
          pokemons: capturedPokemons,
          onClick: release,
          buttonLabel: '-'
        })}
      </table>
    </div>
  )
}

export default Pokedex;
