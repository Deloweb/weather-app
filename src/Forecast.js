import React, { Component } from 'react';
// import axios from 'axios';
import "./Forecast.css";
import CurrentWeather from "./CurrentWeather";
// import Period from "./Period";
// import CitySearch from "./CitySearch";
// import Input from "./Input";

class Forecast extends Component {
    state = {
        value: 'Paris',
        city: '',
     }

     handleChange = (e) => {
        this.setState({
          value: e.target.value,
        });
      };
    
      handleClick = () => {
          this.setState({
              city: this.state.value,
          })
      }
    
      render() {
        let city = this.state.city;
        return (
          <div className="input">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <button onClick={this.handleClick}>Valider</button>
            <CurrentWeather city={city} />
          </div>
        );
      }
    }
    
    export default Forecast;