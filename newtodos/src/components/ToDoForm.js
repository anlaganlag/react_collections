import React from 'react';
import shortid from 'shortid';

class ToDoForm extends React.Component {

    state = {
        text: ""
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (this.state.text.length > 0) {
            this.props.addToDo({
                id: shortid.generate(),
                text: this.state.text,
                complete: false
            })
        }

        this.setState({
            text: ""
        })

    }

    render() {

        return <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter here"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        </div>
    }
}
export default ToDoForm;