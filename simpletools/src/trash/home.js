import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../css/home.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

//search input styling
import '../css/search.scss';

//search button styling
import '../css/search.css'

//Table results styling
import '../css/table.css'

import logo from '../images/loading.gif'

//Useless button
import { AwesomeButtonProgress,AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

//Bootstrap
import {
  Container,
  Table,
  Row
} from 'reactstrap';

//Tooltip
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-tooltip/paper-tooltip.js';




// top legend with scores color range 
import Legend from './legend'

//This is to Export Data into CSV
import { CSVLink, CSVDownload } from "react-csv";

//Home content
import Content from './home_content'



class Home extends Component {

// This is to make the table appear when clicking
// Setting state false so that it doesnt appear
constructor() {
    super(); 
    this.state = { showMessage: false }
  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  

//Input sending data and Calling API back
  state ={
  data: []
}
//this gets triggered on line 85
  search = e => {
    e.preventDefault();
    //Here we send the input that we add on line 90 value to Flask
    axios.post("/results",{search_question: document.getElementById("buscar").value})
    //Then we call it back
    .then((res) => {
      // console.log(res.data)
      //We create data variable with our returned data
      const data = res.data
      //Empty variable to pass all values from data
      const question = []
      // for loop that goes into data and pused everything to questions variable.
      for(var i in data)
        {question.push(data[i])}
      //console log to make sure our API returned the correct data and we saved in question
      console.log(question)
      //creating the state of paa and selecting the second index in question
      this.setState({paas:question[1]})

    })
     

    }




//class to 
  resolveClass = (value) => {
    let className = ''

    switch (true) {
        case (value < 1 && value > 0.25):
            className = 'greenclass'
            break;
        case (value < 0.25 && value > -0.25):
            className = 'yellowclass'
            break;
        case (value < -0.25):
            className = 'redclass'
            break;
        default:
            break
    }

    return className
}


  render() {


    //empty variable and set is a state
    const{paas = []} = this.state


    return (
  <div className="demo">
      <Helmet>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js" type="text/javascript" />
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js" type="text/javascript" />
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js" type="text/javascript" />
      </Helmet>
    <div className="content">
      <div id="large-header" className="large-header">
        <canvas id="demo-canvas"></canvas>
        <h1 className="main-title"><span className="thin">Explore</span> what the world is asking</h1>
          <div className="Search"> 
            <form onSubmit={this.search} onClick={this._showMessage.bind(null, true)} method="post">
                  <p>
                  <div className="searchbar">
                    <div className="form__group field">
                       <div className="searchbox">
                          <input type="input" class="form__field" placeholder="Search" id='buscar' required />
                           <label for="name" class="form__label">E.g Food delivery</label>
                    </div>
                        <div className="button">

                           <AwesomeButtonProgress
                           //useless button that waits 15 seconds
                              type="primary"
                              size="medium"
                              action={(element, next) => {
                              console.log('clicked');
                              setTimeout(() => {
                              next();
                              }, 40000);
                              }}> Search 
                            </AwesomeButtonProgress>
                        </div>
                    </div>
                  </div>
                 </p>
              </form>
          </div>
      </div>
    </div>


{this.state.showMessage &&(
   <Container>
     <Legend />

  
     <Table>
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Sentiment</th>
                        <th>Magnitude</th> 
                        <paper-tooltip>Score of the sentiment ranges from -1.0 (very negative) to 1.0 (very positive).</paper-tooltip>
                      </tr>
                    </thead>
                    <tbody>
                {paas.length ? paas.map(paa => (
                    <tr>
                      <td key="Questions">{paa.Questions}</td> 
                      <td key="Sentiment" className={this.resolveClass(paa.Sentiment)}>{paa.Sentiment}<paper-tooltip>Score of the sentiment ranges from -1.0 (very negative) to 1.0 (very positive).</paper-tooltip></td>
                      <td key="Magnitude"className="blueclass"> {paa.Magnitude}<paper-tooltip>Magnitude is the strength of sentiment regardless of score, ranges from 0 to infinity.</paper-tooltip></td>
                    </tr>
                   
                  ))
                :
                (<tr><td><img src={logo} alt="loading..." /> </td>
                 <td><img src={logo} alt="loading..." /> </td>
                 <td><img src={logo} alt="loading..." /> </td> </tr>)
                      }
                       </tbody>
                 </Table>
                 <CSVLink data={paas}>
                 <AwesomeButton
                  size="large"
                  type="secondary">
                  Download Data
                </AwesomeButton>
                 </CSVLink>
                  </Container>) 
}

<Content/>
  
  </div>
    
        
    );
  }
}

export default Home;



 







