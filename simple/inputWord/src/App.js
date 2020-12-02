
import React, { useState } from "react";
function App() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState("");

  const onChange = (e) => {
    setWord(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setWords((prev) => [...prev, word]);
    setWord("");
  };

  const wordList = words.map((word, i) => <span key={i}>{word+" "}</span>);

  return (
    <>
      <p>輸入</p>
      <form onSubmit={onSubmit}>
        <input  value={word} onChange={onChange}></input>
      </form>
      <span>存儲</span>
      <p>{wordList}</p>
    </>
  );
}

export default App;
