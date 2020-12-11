import React, { Component } from 'react';
import {
  
  Row,
  Container,
} from 'reactstrap';

import pipeline from '../images/pipeline_onlyquestions.jpg'
import '../css/content.css'



class Content extends Component {

  

  render() {
    return (
    <Container>
    
    <h2 className="h2content">People Also Ask</h2>

    <p className="contentp">  This SEO tool extracts Google's People Also Ask box that are around your query. </p>
     <p className="contentp"> Search for a specific topic, brand, product, or service!</p>

     <Row>
     
     <img src={pipeline} alt="Pipeline" className="image_home" width="640" height="360" />
    </Row>



<h3> Frequently Asked Questions </h3>


  <h4><b>What is this tool for? </b></h4>
  <p> This tool can be used to get content ideas.</p>

  <h4><b>How to use the Tool? </b></h4>
  <p> Simply add a keyword and wait for the results. It usually takes like 40 seconds to get you result back.</p>

  <h4><b>What is Google’s People Also Ask?</b></h4>
<p>People Also Ask boxes are a dynamic SERP feature, containing sets of questions related to the original search query. </p>

  

<p>Find the official <a href="https://cloud.google.com/natural-language/docs"> NLP documentation here</a>.</p>

<h4><b>How is the tool made?</b> </h4>
<p> The tool is built using different technologies. Front end was built using ReactJS . The backend was built with <a href="https://www.python.org/">Python</a> (Flask). People Also ask scraperwas built using the Python library Selenium and Pandas. For sentiment analysis, I used the Python Library google.cloud. </p>



<h4><b>Why did you remove sentiment analysis</b> </h4>
<p> Because it was getting very expensive. I will add it with password protecton and for some users.</p>
<p>If you want to get on the list you can email me <a href="mailto:hello@kburchardt.com"> here </a>.</p>


<h4> <b>How to support?</b> </h4>

<p>There are multiple ways you can help:

<ul>
<li> Share new ideas </li>
<li> Share the site </li>
<li> Contribute so that I can keep building tools!. You can <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=sundios%40gmail.com&currency_code=USD&source=url">donate here </a>. </li>

</ul>

 </p>
    
<Row>

</Row>

  	</Container>

  		
        
    );
  }
}

export default Content;