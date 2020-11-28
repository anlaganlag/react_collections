import React, { useContext } from 'react';
import { PokemonContext } from './PokemonContext';
import { listPokemons } from './listPokemons';

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">



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

        </span>
      ))}
      <h2>已捕..</h2>

{listPokemons({
          pokemons: capturedPokemons,
          onClick: release,
          buttonLabel: ''
        })}
    </div>
  )
}

export default Pokedex;
