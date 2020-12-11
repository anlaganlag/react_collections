
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


import React from 'react';
import Loader from 'react-loader-spinner'

 export default class loader2 extends React.Component {
  //other logic
    render() {
     return(
      <div className="col spinner_item" title="MutatingDots">

   <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />

   <p> This may take around 30 seconds </p>


            </div>
      
     );
    }
 }