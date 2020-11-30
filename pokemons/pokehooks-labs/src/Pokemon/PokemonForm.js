import React, { useContext, useState, useEffect, useRef } from "react";
import { PokemonContext } from "./PokemonContext";
import { generateID } from "./generateID";
import useKeyPress from "../usePressKeyHook";

const PokemonForm = () => {
  const [pokemonName, setPokemonName] = useState();
  const { addPokemon, page, setPage } = useContext(PokemonContext);
  const inputRef = useRef();
  const subPress = useKeyPress("j");
  const addPress = useKeyPress("k");
  const sub10Press = useKeyPress("h");
  const add10Press = useKeyPress("l");
  const sub5Press = useKeyPress("u");
  const add5Press = useKeyPress("i");
  const resetPress = useKeyPress("r");

  const handleNameOnChange = (e) => {
    if (e.target.value <= 0 || e.target.value > 56) return;
    setPage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPokemon({
      id: generateID(),
      name: pokemonName,
    });
  };

  // useEffect(() => inputRef.current.focus());

  return (
    <>
      <div style={{ display: "none" }}>
        {subPress && setTimeout(() => setPage(page - 1), 260)}
        {addPress && setTimeout(() => setPage(page + 1), 260)}
        {sub5Press && setTimeout(() => setPage(page - 5), 260)}
        {add5Press && setTimeout(() => setPage(page + 5), 260)}
        {sub10Press && setTimeout(() => setPage(page - 10), 260)}
        {add10Press && setTimeout(() => setPage(page + 10), 260)}
        {resetPress && setTimeout(() => setPage( Math.floor(Math.random()*55+1)), 260)}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          placeholder="輸入頁碼"
          value={page}
          onChange={handleNameOnChange}
          min="1"
          max="55"
          ref={inputRef}
        />
        <input type="submit" value="頁數" />
      </form>
    </>
  );
};

export default PokemonForm;
