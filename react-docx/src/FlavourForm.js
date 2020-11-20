import React from 'react';

class FlavourForm extends React.Component {
    state = { value: 'coconut' }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(this.state.value + ' was selected as the flavour')
        event.preventDefault();
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange} >
                    <option value="grapefruit">GrapeFruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">CocoNut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="submit" value="submit" />
            </form>
        </div>
    }
}

export default FlavourForm;