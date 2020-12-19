import React, { useState } from "react";

function App() {
  const list = [
    {
      title: "Gal",
      url: "https://reactjs.org/",
      author: "Best Pro",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 1,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 2,
    },
  ];
  const [language, setLanguage] = useState("");
  const handleLanguage = lang =>  setLanguage(lang);
  return (
    <div>
      <h1>当前选中的:{language}</h1>

      <Search onSearch={handleLanguage} list={list} />
    </div>
  );
}
const Search = ({ onSearch, list }) => (
  <div>
    <select onChange = {e=>onSearch(e.target.value)}>
      {list.map((item) => (
        <option value={item.title}>{item.title}</option>
      ))}
    </select>
  </div>
);

export default App;
