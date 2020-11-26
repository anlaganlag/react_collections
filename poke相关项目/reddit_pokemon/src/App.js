import React, { useState, useEffect } from "react";
const App = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState(5);
  const pokeId = (num = input) => {
    const id = 893; //共893个
    setItems([
      ...new Set(
        [...Array(num)]
          .map(() => Math.floor(Math.random() * id + 1))
          .sort((a, b) => a - b)
      ),
    ]);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    // pokeId(parseInt(e.target.value));

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    pokeId(parseInt(input));
    // setTimeout(()=> setInput(""),1500)
    setInput("")
  };

  useEffect(() => {
    pokeId();
  }, []);
  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <label>数量</label>
          <input value={input} onChange={handleChange} type="number"/>
        </form>

        <h2>按照id排列</h2>

        {items.map((pokemon,idx) => (
          <span key={pokemon}>
          
            <img
              src={
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                pokemon +
                ".png"
              }
              alt="无"
              className="sprite"
            />
            <span>id:{pokemon}</span>
          </span>
        ))}
      </section>
    </>
  );
};

export default App;
