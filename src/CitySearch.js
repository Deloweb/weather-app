import React, { Component } from "react";

class CitySearch extends Component {
  state = {
    city: "",
  };

  handleChange = (e) => {
      this.setState({
          city: e.target.value
      })
  }

  handleClick = () => {
      console.log(this.state.city);
  }

  render() {
    return (
      <div className="search">
        <input type="text" onChange={this.handleChange} value={this.state.city}/>
        <button onClick={this.handleClick}>Valider</button>
      </div>
    );
  }
}

export default CitySearch;
