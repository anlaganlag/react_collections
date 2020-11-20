import React from 'react';

class LoginControl extends React.Component {

    state = { isLoggedIn: false }

    handleClick = (event) => {
        this.setState({
            isLoggedIn : !this.state.isLoggedIn
        })
    }

    render() {
        if (this.state.isLoggedIn) {

            return <div>
                <button onClick={this.handleClick}>Log-Out</button>
                   You have been logged into your account </div>
        }
        else {
            return <div>
                <button onClick={this.handleClick}>Login</button>
                     Please login into your account </div>
        }
    }
}

export default LoginControl;