import React from 'react';
import '../index.css';

const hourlyData = ({hourlyData}) => (
  <div className="bottom">
  <div className="feels">
    {hourlyData.hourly ? <p>{new Date(hourlyData.hourly[0].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData.hourly ? <p>{hourlyData.hourly[0].temp.toFixed()}°</p> : null}
    {hourlyData.daily ? <img src={`http://openweathermap.org/img/wn/${hourlyData.hourly[0].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="humidity">
    {hourlyData.hourly ? <p>{new Date(hourlyData.hourly[1].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData.hourly ? <p>{hourlyData.hourly[1].temp.toFixed()}°</p> : null}
    {hourlyData.daily ? <img src={`http://openweathermap.org/img/wn/${hourlyData.hourly[1].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="wind">
    {hourlyData.hourly ? <p>{new Date(hourlyData.hourly[2].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData.hourly ? <p>{hourlyData.hourly[2].temp.toFixed()}°</p> : null}
    {hourlyData.daily ? <img src={`http://openweathermap.org/img/wn/${hourlyData.hourly[2].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="wind">
    {hourlyData.hourly ? <p>{new Date(hourlyData.hourly[3].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData.hourly ? <p>{hourlyData.hourly[3].temp.toFixed()}°</p> : null}
    {hourlyData.daily ? <img src={`http://openweathermap.org/img/wn/${hourlyData.hourly[3].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
  <div className="wind">
    {hourlyData.hourly ? <p>{new Date(hourlyData.hourly[4].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    {hourlyData.hourly ? <p>{hourlyData.hourly[4].temp.toFixed()}°</p> : null}
    {hourlyData.daily ? <img src={`http://openweathermap.org/img/wn/${hourlyData.hourly[4].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  </div>
</div>
)

export default hourlyData;