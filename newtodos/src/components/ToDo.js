import React from 'react'

const ToDo = props => {
    console.log(props);
    return <div>
        <div onClick={props.toggleState} style={{ textDecoration: props.todo.complete ? "line-through" : "" }}>
            {props.todo.text}

        </div>
        <div>
            <button onClick={props.deleteToDo}>x</button>
        </div>
    </div>
}
export default ToDo;