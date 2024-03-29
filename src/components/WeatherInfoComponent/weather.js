import React from 'react';
import './weather.css';
import FeelsLike from '../../assets/FeelsLike.png'
import HumidityIcon from '../../assets/HumidityIcon.png'
import WindSpeedIcon from '../../assets/WindSpeedIcon.png'

const weather = ({weatherData, grade, speed}) => (
  <div className="bottom">
          <div className="feels">
            <img src={FeelsLike} alt="temperture glass icon" />
            <p className="bold">{weatherData.feels_like.toFixed()}°{grade}</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
          <img src={HumidityIcon} alt="temperture glass icon" />
            <p className="bold">{weatherData.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
          <img src={WindSpeedIcon} alt="temperture glass icon" />
          <p className="bold">{weatherData.wind_speed.toFixed()} {speed}</p>
            <p>Wind Speed</p>
          </div>
        </div>
)

export default weather;