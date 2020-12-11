import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './css/stylesheet.css'
import ReactGA from 'react-ga';
import Website from './web/web'


ReactGA.initialize('UA-45251455-9');
ReactGA.pageview(window.location.pathname + window.location.search);




class App extends Component {


 

  render() {
    return (
    	
      
<Website />
    
        
    );
  }
}

export default App;