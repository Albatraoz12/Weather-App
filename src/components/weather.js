import React from 'react';
import '../index.css';

const CardExampleCard = ({weatherData}) => (
  <div className="bottom">
          <div className="feels">
            {weatherData ? <p className="bold">{weatherData.feels_like.toFixed()}°</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {weatherData ? <p className="bold">{weatherData.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {weatherData ? <p className="bold">{weatherData.wind_speed.toFixed()} M/S</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
)

export default CardExampleCard;