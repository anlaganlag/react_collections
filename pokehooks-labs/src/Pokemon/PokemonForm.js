import React, { useContext, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import { generateID } from './generateID';

const PokemonForm = () => {
  const [pokemonName, setPokemonName] = useState();
  const { addPokemon,page,setPage } = useContext(PokemonContext);

  const handleNameOnChange = (e) => {
    if (e.target.value <=0 || e.target.value >56) return
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
      <input type="number" placeholder="輸入頁碼" value = {page} onChange={handleNameOnChange} min="1" max="55"/>
      <input type="submit" value="頁數" />
    </form>
  );
};

export default PokemonForm;
