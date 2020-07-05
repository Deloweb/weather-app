import React, { Component } from "react";
import axios from "axios";
import Period from "./Period";
import "./Forecast.css";

class CurrentWeather extends Component {
  state = {
    periods: [],
    forecasts: [],
  };

  componentDidMount() {
    this.setState({
      city: this.props.city,
    });
    this.fetchWeather(this.props.city);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.city !== this.props.city) {
      this.fetchWeather();
    }
  }

  fetchWeather = () => {
    console.log(this.props.city);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`
      )
      .then((res) => {
        // console.log(res.data);
        this.setState({
          periods: res.data.list,
          forecasts: res.data.list.filter((weather) =>
            weather.dt_txt.split(" ").includes("12:00:00")
          ),
        });
      });
    };
    
    render() {
    let test = this.state.forecasts[0];
    return (
      <div className="weathersystem">
        {this.state.forecasts.map((forecast, index) => (
          <Period key={`forecast${index}`} forecast={forecast} />
        ))}
      </div>
    );
  }
}

export default CurrentWeather;
