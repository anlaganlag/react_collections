import React, { useEffect } from "react";
import { proxy, useProxy } from "valtio";

import "./App.css";

const URL =
  "https://gist.githubusercontent.com/wobsoriano/33c6fad65fc3ac1685574006683e15a8/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

// [{
//   "id": 1,
//   "name": {
//     "english": "Bulbasaur",
//     "japanese": "フシギダネ",
//     "chinese": "妙蛙种子",
//     "french": "Bulbizarre"
//   },
//   "type": [
//     "Grass",
//     "Poison"
//   ],
//   "base": {
//     "HP": 45,
//     "Attack": 49,
//     "Defense": 49,
//     "Sp. Attack": 65,
//     "Sp. Defense": 65,
//     "Speed": 45
//   }
// },

const state = proxy({
  pokemon: [],
  filter: "",
});

function FilterInput() {
  const snapshot = useProxy(state);

  const handleChange = (evt) => {
    state.filter = evt.target.value;
  };

  return <input value={snapshot.filter} onChange={handleChange} />;
}

function PokemonTable() {
  const snapshot = useProxy(state);

  return (
    <section className="table-box">
      <table width="100%">
        <thead className="table-header">
          <th>序號</th>
          <th>神奇寶貝</th>
          <th>品系</th>
          <th>生命值</th>
          <th>攻擊</th>
          <th>防御</th>
          <th>特殊.攻擊</th>
          <th>特殊.防御</th>
          <th>速度</th>
        </thead>
        <tbody>
          {snapshot.pokemon
            .filter((p) =>
              p.name.chinese.toLowerCase().includes(snapshot.filter)
            )
            .map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name.chinese}</td>
                <td>{p.type.join(", ")}</td>
                <td>{p.base.HP}</td>
                <td>{p.base.Attack}</td>
                <td>{p.base.Defense}</td>
                <td>{p.base["Sp. Attack"]}</td>
                <td>{p.base["Sp. Defense"]}</td>
                {/* <td>{p[base]["Sp. Attack"]}</td> */}
                {/* <td>{p[base][Sp. Defense]}</td> */}
                <td>{p.base.Speed}</td>
                {/* Sp. Attack
            Sp. Defense */}
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}

function App() {
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        state.pokemon = data;
      });
  }, []);

  return (
    <div className="App">
      <FilterInput />
      <PokemonTable />
    </div>
  );
}

export default App;
