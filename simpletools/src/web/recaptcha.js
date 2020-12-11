import Recaptcha from 'react-recaptcha'
// import ReCAPTCHA from "react-google-recaptcha";
import React, { Component , createRef } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";



class Home extends Component {  
  constructor(){
    super()
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      isVerified:false}
  }

 

handleSubscribe() {
  if(this.state.isVerified){
    alert('Verified')
  } else {
    alert('please verified you are human')
  }
}

recaptchaLoaded() {
  console.log('Captcha loaded')
}

verifyCallback(response) {

  if(response){
    this.setState({
      isVerified:true
    })
  }


}
 
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

                           <AwesomeButton
                           //useless button that waits 15 seconds
                              type="primary"
                              size="medium"
                              action={this.handleSubscribe}> Search 
                            </AwesomeButton>

<Recaptcha
    sitekey="6LfurPgZAAAAAGP-mw1N1B4aqQg3QN0wc5l4B46v"
    render="explicit"
    verifyCallback={this.verifyCallback}
    onloadCallback={this.recaptchaLoaded}/>

      
     
                        </div>
                    </div>
                  </div>
                 </p>
              </form>




    
  )
 }
}

export default Home;
