import React, { Component } from 'react';
import axios from 'axios';
import '../css/search.scss';
import '../css/search.css'
import {Table,Container} from 'reactstrap'
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



class Search extends Component {

  state ={
  data: []
}

  search = e => {
    e.preventDefault();
    axios.post("/results",{search_question: document.getElementById("buscar").value})
    .then((res) => {
      // console.log(res.data)

      const data = res.data

      const question = []

      for(var i in data)
        {question.push(data[i])}

      console.log(question)

      this.setState({paas:question[1]})

    })
     

    }
  

  render() {

    const{paas = []} = this.state
    
    return (
      <div>
      <form onSubmit={this.search} method="post">
                <p>
                <div className="searchbar">
                  <div className="form__group field">
                     <div className="searchbox">
                        <input type="input" class="form__field" placeholder="Search" id='buscar' required />
                         <label for="name" class="form__label">E.g Netflix Stocks</label>
                    </div>
                       <div className="button">
                         <AwesomeButtonProgress
                            type="primary"
                            size="medium"
                            action={(element, next) => {
                            console.log('clicked');
                            setTimeout(() => {
                            next();
                            }, 10000);
                            }}> Search 
                          </AwesomeButtonProgress>
                          
                    </div>
                  </div>
                </div>
               </p>
               <p>

                  
               </p>
            </form>

             <div>
            {paas.length ? paas.map(paa => (
              <p>{paa.Questions}</p>
              ))
            :
            (<p> </p>)
              
                  }
               </div>
              
        </div>            

        
    );
  }
}

export default Search;