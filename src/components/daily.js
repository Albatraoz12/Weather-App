import React from 'react';
import '../index.css';

const dailyData = ({dailyData}) => (

    // {hourlyData.map((item, index) => {
  //   index++;
  //   if(index <= 5 ) {
  //   return (
  //     //skriv ut html
  //      <div className="bottom">
  //      <div className="hourly">
  //      {item ? <p>{new Date(item[index].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
  //      {item ? <p>{item[index].temp.toFixed()}°</p> : null}
  //      {item ? <img src={`http://openweathermap.org/img/wn/${item[index].weather[0].icon}@2x.png`} alt="weather"></img> : null}
  //    </div>
  //    </div>
  //   )
  //   }
  // })}
  <div className="bottom">
          <div className="daily">
            {dailyData ? <p>{new Date(dailyData[1].dt * 1000).toLocaleDateString([], {weekday: 'long'})}</p> : null}
            {dailyData ? <p>{new Date(dailyData[1].dt * 1000).getMonth()+1 + "/" +new Date(dailyData[1].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[1].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[1].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="daily">
          {dailyData ? <p>{new Date(dailyData[2].dt * 1000).toLocaleDateString([], {weekday: 'long'})}</p> : null}
            {dailyData ? <p>{new Date(dailyData[2].dt * 1000).getMonth()+1 + "/" +new Date(dailyData[2].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[2].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[2].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="daily">
          {dailyData ? <p>{new Date(dailyData[3].dt * 1000).toLocaleDateString([], {weekday: 'long'})}</p> : null}
            {dailyData ? <p>{new Date(dailyData[3].dt * 1000).getMonth()+1 + "/" +new Date(dailyData[3].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[3].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[3].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="daily">
          {dailyData ? <p>{new Date(dailyData[4].dt * 1000).toLocaleDateString([], {weekday: 'long'})}</p> : null}
            {dailyData ? <p>{new Date(dailyData[4].dt * 1000).getMonth()+1 + "/" +new Date(dailyData[4].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[4].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[4].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="daily">
          {dailyData ? <p>{new Date(dailyData[5].dt * 1000).toLocaleDateString([], {weekday: 'long'})}</p> : null}
            {dailyData ? <p>{new Date(dailyData[5].dt * 1000).getMonth()+1 + "/" +new Date(dailyData[5].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[5].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[5].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
        </div>
)

export default dailyData;