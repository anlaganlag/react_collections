import React from "react";


import { PokemonProvider } from "./Pokemon/PokemonContext";
import PokemonsList from "./Pokemon/PokemonsList";
import Pokedex from "./Pokemon/Pokedex";
import PokemonForm from "./Pokemon/PokemonForm";

function App() {
  // const [items, setItems] = useState([]);

  

  return (


      <PokemonProvider>
        <div className="form-wrapper">
          <PokemonForm />
        </div>
        <div className="main">
          <PokemonsList />
          <Pokedex />
        </div>
      </PokemonProvider>
  );
}

export default App;
