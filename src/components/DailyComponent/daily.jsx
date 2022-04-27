import React from 'react';
import './daily.css';

function DailyData ({dailyData, grade}) {
  const firstFive = dailyData.filter((item, index) => {
    return index < 5
  })

  
  return firstFive.map((item, index) => {
    return (
     <div key={index} className="daily">
      <p>{new Date(item.dt * 1000).toLocaleDateString([], {weekday: 'long'})}</p>
      <p>{new Date(item.dt * 1000).getMonth()+1 + "/" +new Date(item.dt * 1000).getDate()}</p>
      <p>{item.temp.max.toFixed()}°{grade}</p>
      <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather"></img>
     <span className='tooltiptext'>{item.weather[0].description}</span>
   </div>
    )})

}

export default DailyData;