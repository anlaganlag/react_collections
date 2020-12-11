import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Questions + Sentiment
import PeopleAlsoAsk from '../web/paa_sentiment'


import About from '../web/about'


function Titles(props){
  return <p> {props.title}</p>;
}


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

<Router>
  <div className="nav">
  
    <div>
      <Navbar light expand="md">
        <NavbarBrand  href="/" >simpletools.io</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link to="/about">
            <NavLink>About</NavLink>
            </Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/sundios">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Tools
              </DropdownToggle>
              <DropdownMenu right>
              <Link to="/people-also-ask">
                <DropdownItem>
                  <Titles title="People Also Ask"/>
                </DropdownItem>
              
                 </Link>
                 

              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

</div>
    <Switch>
    <Route path="/keyword-tool">
        <Keywords />
      </Route>
    <Route path="/people-also-ask-nlp">
        <PAAnlp />
      </Route>
      <Route path="/people-also-ask">
        <PAA />
      </Route>
    	<Route path="/About">
	   		<About2 />
	    </Route>
	    <Route path="/">
	   		<Home />
	    </Route>
      
	</Switch>

   </Router> 

    
        
    );
  }
  //We can change the return component to display something different on the home page
  function Home() {
  return (<PeopleAlsoAsk />);
}

  function About2() {
  return (<About/>);
}

 function PAAnlp() {
  return (<h1> Coming Soon </h1>);
}

 function PAA() {
  return (<PeopleAlsoAsk />);
}

function Keywords() {
  return (<h1> Keywords Tool goes here</h1>);
}

export default Navigation;


