import React, { Component } from "react";
import Forecast from "./api/Forecast";

class CitySearch extends Component {
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
      <div className="container mainContent">
        <div className="has-text-centered">
          <input
            className="input is-hovered"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <button className="button is-info mt-3" onClick={this.handleClick}>
            Valider
          </button>
        </div>
        <Forecast city={this.state.city} />
      </div>
    );
  }
}

export default CitySearch;
