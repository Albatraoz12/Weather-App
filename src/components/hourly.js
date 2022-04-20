import React from 'react';
import '../index.css';

const hourlyData = ({hourlyData}) => (
  <div className="bottom">
  <div className="hourly">
    {hourlyData ? <p>{new Date(hourlyData[0].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData ? <p>{hourlyData[0].temp.toFixed()}°</p> : null}
    {hourlyData ? <img src={`http://openweathermap.org/img/wn/${hourlyData[0].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="hourly">
    {hourlyData ? <p>{new Date(hourlyData[1].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData ? <p>{hourlyData[1].temp.toFixed()}°</p> : null}
    {hourlyData ? <img src={`http://openweathermap.org/img/wn/${hourlyData[1].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="hourly">
    {hourlyData ? <p>{new Date(hourlyData[2].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData ? <p>{hourlyData[2].temp.toFixed()}°</p> : null}
    {hourlyData ? <img src={`http://openweathermap.org/img/wn/${hourlyData[2].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="hourly">
    {hourlyData ? <p>{new Date(hourlyData[3].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData ? <p>{hourlyData[3].temp.toFixed()}°</p> : null}
    {hourlyData ? <img src={`http://openweathermap.org/img/wn/${hourlyData[3].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="hourly">
    {hourlyData ? <p>{new Date(hourlyData[4].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData ? <p>{hourlyData[4].temp.toFixed()}°</p> : null}
    {hourlyData ? <img src={`http://openweathermap.org/img/wn/${hourlyData[4].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
</div>
)

export default hourlyData;