import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import './WeatherView.scss';

export default class WeatherView extends Component {
	
  componentDidMount() {
    this.props.getWeather();
  }

  componentDidUpdate(prevProps) {
	  if(prevProps.city !== this.props.city) {
		  this.props.getWeather();
	  }
  }

  render() {
	const { city, isLoading, weather} = this.props;
    if (isLoading) {
      return <Spinner />;
    } else {
      return (
        <div className="main">
          <h1 className='main__logo'>{city}</h1>
          <p className='main__temp'>Temperature: {weather.temp} </p>
        </div>
      );
    }
  }
}
