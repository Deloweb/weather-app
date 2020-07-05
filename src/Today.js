import React, { Component } from "react";
import "./Period.css";

class Today extends Component {
  state = {
    forecast: [],
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

//   componentDidMount() {
//       this.setState({
//           forecast: this.props.forecast
//       });
//       console.log(this.state.forecast);
//     }
  

  render() {
    // let period = this.props.forecast;
    // console.log(this.props.forecast.weather[0]);
    // let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;
    return (
      <div className="period">
        {/* <p className="period__d">
          {this.state.days[new Date(period.dt_txt).getDay()]}
        </p>
        <img src={iconURL} className="period__img" alt="" />
        <p className="period__temp">{Math.round(period.main.temp*10)/10}°C</p> */}
      </div>
    );
    }
}

export default Today;
