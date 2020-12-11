import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.scss";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="wrapper">
        <Slider {...settings}>
          <div className="img-1">
            <h3>1</h3>
          </div>
          <div className="img-2">
            <h3>2</h3>
          </div>
          <div className="img-3">
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
