import React from "react";
import "../index.css";
import { Data } from "./Data";

export const Pokemon = ({ pokemon, onClick, buttonLabel }) =>
  pokemon && (
    <span key={pokemon.name}>
      <button
        className={
          onClick.name === "capture" ? "list-num-right" : "list-num-left"
        }
        onClick={onClick(pokemon)}
      >
        {pokemon.url.split("/")[6]}{" "}
        <span>
          {" "}
          {(Data[pokemon.url.split("/")[6]] &&
            Data[pokemon.url.split("/")[6]].name.chinese) ||
            (pokemon && pokemon.name)}
        </span>
      </button>
    </span>
  );

export default Pokemon;
