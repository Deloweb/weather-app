import React, { Component } from "react";
import "./Forecast.css";
import CurrentWeather from "./CurrentWeather";

class Forecast extends Component {
  state = {
    value: "Paris",
    city: "Paris",
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = () => {
    this.setState({
      city: this.state.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="has-text-centered">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button onClick={this.handleClick}>Valider</button>
        </div>
        <CurrentWeather city={this.state.city} />
      </div>
    );
  }
}

export default Forecast;
