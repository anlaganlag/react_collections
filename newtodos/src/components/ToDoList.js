import React from "react"
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import './ToDoList.css'

class ToDoList extends React.Component {

    state = {
        todos: [],
        toDoToShow: "all"
    }

    addToDo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleState = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                else {
                    return todo;
                }
            })
        })
    }

    changeView = (s) => {
        this.setState({
            toDoToShow: s
        })
    }

    deleteToDo = id => {
        this.setState({
            todos : this.state.todos.filter((todo)=> todo.id !== id)
        })
    }

    deleteAllCompleted = () =>{
        this.setState({
            todos : this.state.todos.filter((todo)=> !todo.complete)
        })
    }

    render() {

        let todos = []

        if (this.state.toDoToShow === "all") {
            todos = this.state.todos
        }
        else if (this.state.toDoToShow === "completed") {
            todos = this.state.todos.filter(todo => todo.complete)
        }
        else if (this.state.toDoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete)
        }
        return <div className="to-Do-list">
            <h1>To-Do-List</h1>
            <ToDoForm addToDo={this.addToDo} />
            {todos.map((todo) => {
                return <ToDo
                    key={todo.id}
                    todo={todo}
                    toggleState={() => this.toggleState(todo.id)}
                    deleteToDo={() => this.deleteToDo(todo.id)}
                />

            })}
            <div>
                No of active tods : {this.state.todos.filter(todo => !todo.complete).length}
            </div>
            <div>
                <button onClick={() => this.changeView("all")}>
                    ALL
                </button>
                <button onClick={() => this.changeView("active")}>
                    Active
                </button>
                <button onClick={() => this.changeView("completed")}>
                    Completed
                </button>
            </div>
            <div>
                <button onClick = {this.deleteAllCompleted}>
                    Delete all completed
                </button>
            </div>
        </div>
    }
}
export default ToDoList;