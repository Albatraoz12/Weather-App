import React from "react";
import './temp.css';
import sunriseIcon from '../../assets/sunRiseIcon.png'
import sunsetIcon from '../../assets/sunSetIcon.png'


const temp = ({tempData, grade}) => (
  <div className="top">
  <div className="location">
    <h1>{tempData.timezone}</h1>
    <p>Time {new Date(tempData.current.dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p>
  </div>
  <div className="temp">
    <h2>{tempData.current.temp.toFixed()}°{grade}</h2>
    <img src={`http://openweathermap.org/img/wn/${tempData.current.weather[0].icon}@2x.png`} alt="weather"></img>
  </div>
  <div className="description">
  <p>{tempData.current.weather[0].main}</p>
  </div>
  <div className="sundirection">
    <div>
      <img src={sunriseIcon} alt="sun rise icon" />
      <p>Sunrise {new Date(tempData.current.sunrise * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p>
    </div>
    <div>
      <img src={sunsetIcon} alt="sun rise icon" />
      <p>Sunset {new Date(tempData.current.sunset * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> 
    </div>
  </div>
</div>
)

export default temp;