import React from 'react';
import './weather.css';

const weather = ({weatherData}) => (
  <div className="bottom">
          <div className="feels">
            <p className="bold">{weatherData.feels_like.toFixed()}°</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{weatherData.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
          <p className="bold">{weatherData.wind_speed.toFixed()} M/S</p>
            <p>Wind Speed</p>
          </div>
        </div>
)

export default weather;