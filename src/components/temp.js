import React from "react";
import '../index.css';

const temp = ({tempData}) => (
  <div className="top">
  <div className="location">
    <h1>{tempData.timezone}</h1>
    {tempData.current ? <p>Time {new Date(tempData.current.dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {tempData.current ? <p>Sunrise {new Date(tempData.current.sunrise * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {tempData.current ? <p>Sunset {new Date(tempData.current.sunset * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
  </div>
  <div className="temp">
    {tempData.current ? <h2>{tempData.current.temp.toFixed()}°</h2> : null}
    {tempData.current ? <img src={`http://openweathermap.org/img/wn/${tempData.current.weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="description">
  {tempData.current ? <p>{tempData.current.weather[0].main}</p> : null}
  </div>
</div>
)

export default temp;