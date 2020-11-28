import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});

  useEffect(() => {
      encounterWildPokemon();
  }, []);

  const pokeId = () => {
    const min = 1;
    const max = 893; //共893个
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const encounterWildPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokeId())
      .then((response) => {
        setWildPokemon(response.data);
      });
    console.log(wildPokemon);
  };

  const catchPokemon = (pokemon) => {
    setPokedex((state) => {
      const monExists = state.filter((p) => pokemon.id === p.id).length > 0;

      if (!monExists) {
        state = [...state, pokemon];
        state.sort(function (a, b) {
          return a.id - b.id;
        });
      }
      return state;
    });
    encounterWildPokemon();
  };

  const releasePokemon = (id) => {
    setPokedex((state) => state.filter((p) => p.id != id));
  };

  return (
    <div className="app-wrapper">
      <header>
        <h1 className="title">React</h1>
        <h3 className="subtitle">宝可梦捕获项目</h3>
      </header>

      <section className="wild-pokemon">
        <h2>野外遭遇到：</h2>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            wildPokemon.id +
            ".png"
          }
          className="sprite"
          alt =  ''
        />
        <h3>{wildPokemon.name}</h3>
        <button className="catch-btn" onClick={() => catchPokemon(wildPokemon)}>
          捕获它
        </button>
      </section>

      <section className="pokedex">
        <h2>按照id排列</h2>
        <div className="pokedex-list">
          {pokedex.map((pokemon) => (
            <div className="pokemon" key={pokemon.id}>
              <span>{pokemon.id}</span>
              <img
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                  pokemon.id +
                  ".png"
                }
                alt=""
                className="sprite"
              />
              <h3 className="pokemon-name">{pokemon.name}</h3>
              <button
                className="remove"
                onClick={() => releasePokemon(pokemon.id)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
