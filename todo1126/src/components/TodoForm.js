import React, { useState, useContext } from "react";
import { IDContext } from "./IdContext.js";
import { v4 as uuid } from "uuid";
export default function TodoForm(props) {
  const [todoDetail, setTodoDetail] = useState();
  const { todo, setTodo } = useContext(IDContext);
  const handleChange = (e) => {
    setTodoDetail({ task: e.target.value, completed: false });
  };
  console.log(todoDetail);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(todoDetail.task);
  };
  console.log(todo);
  return (
    //       <IDContext.Consumer>
    //         { value => {
    //           console.log(value);
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
    //           }}
    //         </IDContext.Consumer>
  );
}
