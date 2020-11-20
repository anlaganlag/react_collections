import React from 'react';

class Form extends React.Component {
    state = { value: '' }

    handleChange = (event) => {
        console.log(event);
        this.setState({ value: event.target.value })
    }

    handleSubmit = (event) => {
        alert('Submited value is ' + this.state.value)
        event.preventDefault();

    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                   <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit"  />
            </form>
        </div>
    }
}

export default Form;