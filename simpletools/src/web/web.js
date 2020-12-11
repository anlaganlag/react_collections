import React, { Component } from 'react';
import Helmet from "react-helmet";
import Nav from '../web/nav'
import Footer from './footer'







class App extends Component {


  

  render() {
    return (
      <div>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Simpletools.io - People Also Ask and Machine Learning for New Content Ideas</title>
        <meta name="description" content="Discover new content ideas and sentiment analysis of the questions your users are asking around a topic, Brand or category." />
        <link rel="canonical" href="https://simpletools.io/" />

        {/*<!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://simpletools.io/"/>
        <meta property="og:title" content="Simpletools.io - People Also Ask and Machine Learning for New Content Ideas"/>
        <meta property="og:description" content="Discover new content ideas and sentiment analysis of the questions your users are asking around a topic, Brand or category."/>
        <meta property="og:image" content="https://simpletools.io/images/og-img.png"/>
       
        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://simpletools.io/"/>
        <meta property="twitter:title" content="Simpletools.io - People Also Ask and Machine Learning for New Content Ideas"/>
        <meta property="twitter:description" content="Discover new content ideas and sentiment analysis of the questions your users are asking around a topic, Brand or category."/>
        <meta property="twitter:image" content="https://simpletools.io/images/og-img.png"/>

        {/*<!-- Theme Color for Chrome, Firefox OS and Opera --> */}
        <meta name="theme-color" content="#000000"/>

        {/*<!-- Links to information about the author(s) of the document -->*/}
        <link rel="author" href="humans.txt"/>

        {/*<!-- Prefetching, preloading, prebrowsing --> */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://s3-us-west-2.amazonaws.com"/>
        <link rel="preconnect" href="https://www.google-analytics.com"/>
        {/*<!-- Prefetching, preloading, prebrowsing --> */}
        <link rel="dns-prefetch" href="https://fonts.gstatic.com"/>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>
        <link rel="dns-prefetch" href="https://s3-us-west-2.amazonaws.com"/>
        <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
        
        


      </Helmet>

<Nav/>

<Footer />

    </div>
        
    );
  }
}

export default App;
