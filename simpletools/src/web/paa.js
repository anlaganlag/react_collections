import React, { Component , createRef } from 'react';
import {Helmet} from "react-helmet";
import '../css/home.css'
import axios from 'axios';

//search input styling
import '../css/search.scss';

//search button styling
import '../css/search.css'

//Table results styling
import '../css/table.css'


//Useless button
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

//Bootstrap
import {
  Container,
  Table,
} from 'reactstrap';

//Tooltip
import '@polymer/paper-tooltip/paper-tooltip.js';

import Loading from './loader'
import Loading2 from './loader2'


// top legend with scores color range 
import Legend from './legend'

//This is to Export Data into CSV
import { CSVLink } from "react-csv";

//Home content
import Content from './paa_content'




class Home extends Component {


// This is to make the table appear when clicking
// Setting state false so that it doesnt appear.
//setting empty data that will hold api results

constructor() {
  super();
    this.state = {
    showMessage:false,
    loading:false
  }


  }


  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  

//this gets triggered on line 85
  search = e => {
    this.setState({loading:true})
    e.preventDefault();

    //Here we send the input that we add on line 90 value to Flask
    axios.post("/results",{search_question: document.getElementById("buscar").value})

    //Then we call it back
    .then((res) => {

      console.log(res.data)
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
      this.setState({paas:question[1],loading:false})
      
    })
  
   

  

}


  render() {


    //empty variable and set is a state
    const{paas = [] } = this.state
    const {loading} = this.state


    return (
  <div className="demo">
      // I need to style this shit

      
   <div className="Search"> 
            <form onSubmit={this.search}  method="post">
                  <p>
                  <div className="searchbar">
                  <p> Type a keyword below and find what people are asking </p>
                    <div className="form__group field">
                       <div className="searchbox">
                          <input type="input" className="form__field" placeholder="Search" id='buscar' required />
                           <label for="buscar" className="form__label">E.g Netflix Stock</label>
                    </div>
                        <div className="button">

                           <AwesomeButton
                           //useless button that waits 15 seconds
                              type="primary"
                              size="medium"
                              action={this._showMessage.bind(null, true)}> Search 
                            </AwesomeButton>
                        </div>
                    </div>
                  </div>
                 </p>
              </form>
          </div>

<div className = "top-loader">
{loading ? <Loading2 /> : <h1> Results </h1> }
</div>




{this.state.showMessage &&(
   <Container>
<div ref={this.scrollDiv}></div>
  
     <Table>
                    <thead>
                      <tr>
                        <th>Question</th>
                      </tr>
                    </thead>
                    <tbody>
                {paas.length ? paas.map(paa => (
                    <tr>
                      <td key="Questions">{paa.Questions}</td> 
            
                    </tr>
                   
                  ))
                :
                (<tr><td><Loading /> </td>
                  </tr>)
                      }
                       </tbody>
                 </Table>
                 <a href="mailto:hello@kburchardt.com"><p> Need more Questions? Click here</p></a>
                 <CSVLink data={paas}>
                 <AwesomeButton
                  size="large"
                  type="secondary">
                  Download Data
                </AwesomeButton>
                 </CSVLink>
                  </Container>) 
}


  
  </div>
    
        
    );
  }
}

export default Home;



 







