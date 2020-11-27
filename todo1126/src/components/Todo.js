import React,{useContext} from 'react';
import {IDContext} from "./IdContext.js";
export default function Todo(props) {
    // const {todo} = useContext(Context);
    return (
        <div>
            <input type="checkbox"/>
            <li>{props.todo.task}</li>
            <button>Delete</button>
        </div>
    )
}
