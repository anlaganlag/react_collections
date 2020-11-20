import React from 'react';
import BoilingVerdict from './BoilingVerdict';

class Calculator extends React.Component {

    state = {temperatue : ''}

    handleChange = (event) => {
        this.setState({
            temperatue : event.target.value
        })
    }


    render() {
        const temperature = this.state.temperatue;
        return <div>
            <fieldset>
                <legend> Enter the Temperature in celsius </legend>
                <input type="text" onChange={this.handleChange} />
                <BoilingVerdict 
                celsius={parseFloat(temperature)} 
                />
            </fieldset>
        </div>
    }
}

export default Calculator;