import React, { Component } from "react";
import "./Period.css";

class Period extends Component {
  state = {
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Satruday",
    ],
  };

  render() {
    let period = this.props.forecast;
    let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;
    return (
      <div className="period">
        <p className="period__d">
          {this.state.days[new Date(period.dt_txt).getDay()]}
        </p>
        <img src={iconURL} className="period__img" alt="" />
        <p className="period__temp">{Math.round(period.main.temp*10)/10}°C</p>
      </div>
    );
  }
}

export default Period;
