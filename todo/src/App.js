import React from 'react';

import Header from './Header';
import TodoList from './TodoList';
import SubmitForm from './SubmitForm';

import 'bulma/css/bulma.css';
import './style.css';

class App extends React.Component {

    state = {
        tasks: []
    };

    handleDelete = (index) => {
        const newArr = [...this.state.tasks];
        newArr.splice(index, 1);
        this.setState({tasks: newArr});
    }

    handleSubmit = task => {
        this.setState({tasks: [...this.state.tasks, task]});
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='card frame'>
                    <Header num={this.state.tasks.length} />
                    <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
                    <SubmitForm onFormSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default App;