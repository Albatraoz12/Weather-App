import React from 'react';
import '../index.css';

function DailyData ({dailyData}) {
  const firstFive = dailyData.filter((item, index) => {
    return index < 5
  })

  
  return firstFive.map((item, index) => {
    return (
     <div key={index} className="daily">
     {dailyData ? <p>{new Date(dailyData[1].dt * 1000).toLocaleDateString([], {weekday: 'long'})}</p> : null}
     {dailyData ? <p>{new Date(dailyData[1].dt * 1000).getMonth()+1 + "/" +new Date(dailyData[1].dt * 1000).getDate()}</p> : null}
     {dailyData ? <p>{dailyData[1].temp.max.toFixed()}°</p> : null}
     {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[1].weather[0].icon}@2x.png`} alt="weather"></img> : null}
     <span className='tooltiptext'>{item.weather[0].description}</span>
   </div>
    )})

}

export default DailyData;