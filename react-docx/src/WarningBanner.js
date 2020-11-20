import React from 'react';
import Warn from './Warn'


class WarningBanner extends React.Component {

    state = { showWarning : true }

    handleClick = (event) => {
        this.setState({
            showWarning : !this.state.showWarning
        })
    }

    render(){
        return<div> 
            <Warn status = {this.state.showWarning} />
            <button onClick={this.handleClick}> {this.state.showWarning ? "Hide" : "Show"} </button>
           
        </div>
    }
}

export default WarningBanner;