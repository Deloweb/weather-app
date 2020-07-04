import React, { Component } from 'react';
import "./Period.css";

class Period extends Component {
    state = { 
        period: []
     }

  currentDay = () => {
    this.setState({
        periods: [this.props.period.filter(this.props.peio)]
    })
}

    render() { 
        let period = this.props.period;
        let iconURL = `http://openweathermap.org/img/wn/${period.weather[0].icon}@2x.png`;
        return ( 
        <div className="period">

            <span className="period__d">{period.dt_txt}</span><br/>
            <img src={iconURL} className="period__img" alt=""/>
            <span className="period__temp">{period.main.temp}</span>
            
        </div>
        );
    }
}
 
export default Period;