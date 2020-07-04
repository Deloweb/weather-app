import React, { Component } from "react";
import axios from "axios";
import Period from "./Period";
import "./Forecast.css";

class CitySearch extends Component {
  state = {
    city: "Paris",
    periods: [],
  };

  componentDidMount() {
    this.fetchWeather(this.state.city);
  }

  fetchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=lens&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          periods: res.data.list,
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleClick = () => {
    this.fetchWeather();
  };

  render() {
    let periodsList = this.state.periods.map((period) => {
      return <Period period={period} />;
    });

    return (
      <div className="search">
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.city}
          />
          <button onClick={this.handleClick}>Valider</button>
        </div>
        <div className="weathersystem">{periodsList}</div>
      </div>
    );
  }
}

export default CitySearch;
