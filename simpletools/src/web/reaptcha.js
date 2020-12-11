import Reaptcha from 'reaptcha';
// import ReCAPTCHA from "react-google-recaptcha";
import React, { Component , createRef } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



class Home extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      verified: false
    };
  }
  

onVerify = recaptchaResponse => {
    this.setState({
      verified: true
    });
  };

 
 render() {
  return (
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

                           <button type="submit" disabled={!this.state.verified}>
          Submit
        </button>
                        </div>
                    </div>
                  </div>
                 </p>
                 <Reaptcha sitekey="6LfurPgZAAAAAGP-mw1N1B4aqQg3QN0wc5l4B46v" onVerify={this.onVerify} />
              </form>



        
        
 


    
  )
 }
}

export default Home;
