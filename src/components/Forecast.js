import React, { Component } from "react";
import axios from "axios";
import Period from "../Period";
import Spinner from "./Spinner";

class Forecast extends Component {
  state = {
    periods: [],
    forecasts: [],
    day: [],
    isLoading: true,
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
    this.setState({
      isLoading: true,
    })
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&lang=fr&units=metric&appid=8c3a54c385c9c9d874d88f2cd6b3dda8`
      )
      .then((res) => {
        this.setState({
          periods: res.data.list,
          forecasts: res.data.list.filter((weather) =>
            weather.dt_txt.split(" ").includes("12:00:00")
          ),
          isLoading : false,
        });
      });
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <div className="weatherForecast">
            <h2 className="has-text-centered title is-2 has-text-info">
              {this.props.city}
            </h2>
            <div className="columns">
              {this.state.forecasts.slice(0, 1).map((forecast, index) => (
                <Period key={`forecast`} forecast={forecast} />
              ))}
            </div>
            <div className="columns has-text-centered">
              {this.state.forecasts.slice(1, 5).map((forecast, index) => (
                <Period key={`forecast`} forecast={forecast} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Forecast;
