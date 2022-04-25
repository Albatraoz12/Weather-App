import React from 'react';
import '../index.css';


function HourlyData ({hourlyData}) {
  
  const firstFive = hourlyData.filter((item, index) => {
    return index < 5
  })

  
  return firstFive.map((item, index) => {
    return (
       <div key={index} className="hourly">
       <p>{new Date(item.dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p>
       <p>{item.temp.toFixed()}°</p>
       <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather"></img>
       <span className='tooltiptext'>{item.weather[0].description}</span>
     </div>
    )})
}

export default HourlyData;