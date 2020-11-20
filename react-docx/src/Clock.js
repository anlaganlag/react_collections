import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: new Date() };
    }

    componentDidMount() {
          setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID())
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }


    render() {
        return <div>
            <h2> The time is {this.state.time.toLocaleTimeString()} </h2>
        </div>
    }
}

export default Clock;