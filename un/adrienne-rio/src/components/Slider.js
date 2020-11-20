import React from "react";
import "../css/Slider.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previous: true,
      next:
        this.refs && this.refs.offsetWidth >= this.refs.scrollWidth
          ? true
          : false,
    };
  }

  componentDidMount() {
    this.checkButtons(this.refs.offsetWidth, this.refs.scrollWidth);
  }
  checkButtons = (offsetWidthValue, scrollWidthValue) => {
    this.setState({
      previous: this.refs.scrollLeft <= 0 ? true : false,
      next:
        this.refs.scrollLeft + offsetWidthValue >= scrollWidthValue
          ? true
          : false,
    });
  };

  render() {
    const offsetWidthValue = this.refs.offsetWidth,
      scrollWidthValue = this.refs.scrollWidth;

    return (
      <div
        className="slider-container"
        ref={(el) => {
          this.refs = el;
        }}
        style={{ display: "flex" }}
      >
        <div className="slider-wrapper" style={{ display: "flex" }}>
          {this.props.children}
        </div>
        <div
          className={`btn prev ${this.state.previous ? "disable" : ""}`}
          disabled={this.state.previous}
          onClick={() => {
            this.refs.scrollLeft -= offsetWidthValue / 2;
            this.checkButtons(offsetWidthValue, scrollWidthValue);
          }}
        >
          {"<"}
        </div>
        <div
          className={`btn next ${this.state.next ? "disable" : ""}`}
          disabled={this.state.next}
          onClick={() => {
            this.refs.scrollLeft += offsetWidthValue / 2 - 70;
            this.checkButtons(offsetWidthValue, scrollWidthValue);
            console.log(offsetWidthValue, scrollWidthValue);
          }}
        >
          {">"}
        </div>
      </div>
    );
  }
}

export default Slider;
