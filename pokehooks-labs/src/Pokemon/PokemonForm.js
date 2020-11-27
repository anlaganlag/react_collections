import React, { useContext, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { generateID } from './generateID';

const PokemonForm = () => {
  const [pokemonName, setPokemonName] = useState();
  const { addPokemon,page,setPage } = useContext(PokemonContext);

  const handleNameOnChange = (e) => {
    setPage(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPokemon({
      id: generateID(),
      name: pokemonName
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="number" placeholder="輸入頁碼" value = {page} onChange={handleNameOnChange} />
      <input type="submit" value="添加" />
    </form>
  );
};

export default PokemonForm;
