import React from 'react'
import { Navbar, Badge } from 'react-bootstrap';

class NavBar extends React.Component {

    render() {
        
        return <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    Cart-Example
                    <Badge variant="secondary">{this.props.cartItems}</Badge>
                </Navbar.Brand>
            </Navbar>
        </div>
    }
}

export default NavBar;

