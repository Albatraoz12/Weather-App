import React from 'react';
import '../index.css';

const CardExampleCard = ({weatherData}) => (
  <div className="bottom">
          <div className="feels">
            {weatherData.current ? <p className="bold">{weatherData.current.feels_like.toFixed()}°</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {weatherData.current ? <p className="bold">{weatherData.current.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {weatherData.current ? <p className="bold">{weatherData.current.wind_speed.toFixed()} M/S</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
)

export default CardExampleCard;