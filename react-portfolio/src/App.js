import React, { Component } from "react";    
//为了使用ajax..即后面的$.ajax
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  //初次装载
  componentDidMount() {
    this.getResumeData();
  }

  render() {
    const { main, resume, portfolio, testimonials } = this.state.resumeData;

    return (
      <div className="App" id="top">
        <Header data={main} />
        <About data={main} />
        <Resume data={resume} />
        <Portfolio data={portfolio} />
        <Testimonials data={testimonials} />
        <Contact data={main} />
        <Footer data={main} />
      </div>
    );
  }
}

export default App;
