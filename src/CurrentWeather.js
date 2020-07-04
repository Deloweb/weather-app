import React, { Component } from "react";
import axios from "axios";
import Period from "./Period";
import "./Forecast.css";

class CurrentWeather extends Component {
  state = {
    city: 'paris',
    periods: [],
  };

  componentDidMount() {
      this.setState({
          city: this.props.city,
      })
      console.log(this.state.city);
    this.fetchWeather(this.state.city);
  }

  fetchWeather = () => {
    console.log(this.props.city);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          periods: res.data.list,
        });
      });
  };

  render() {
    console.log(this.state.city);
    let periodsList = this.state.periods.map((period) => {
      return <Period period={period}/>;
    });

    return (
      <div className="currentWeather">
        <div className="weathersystem">{periodsList}</div>
        <div>{this.props.city}</div>
      </div>
    );
  }
}

export default CurrentWeather;
