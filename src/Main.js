import React, { Component } from 'react';
import {fetchData} from './Forecast.js';
import axios from 'axios';


class Main extends Component {
    state = { 
        weather: {},
     }

    componentDidMount() {
        const data = fetchData();
        console.log(data);
    }

    async fetchWeather () {
        this.setState({
            weather : data,
        })
        const data = await fetchData();
    }
    
    render() { 
        console.log(this.state.weather);

        return ( 
            <div>hello</div>
         );
    }
}
 
export default Main;