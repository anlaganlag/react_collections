import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { IDContext } from "./components/IdContext.js";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <IDContext.Provider
        value={{
          todo,
          setTodo
        }}
      >
        <h1>Todo</h1>
        <TodoForm submit={setTodo} />
        <TodoList todo={todo} />
      </IDContext.Provider>
    </div>
  );
}

export default App;
