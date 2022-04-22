import React from 'react';
import '../index.css';

// Slice 0,5 spara i variabel, nya variabel spara state.

// sedan mapar jag genom staten


function HourlyData ({hourlyData}) {
  return(

    // hourlyData.forEach((item, index) => {
    //   index++;
    //   if(index <= 5 ) {
    //     //skriv ut html
    //     // return (
    //     <div className="bottom">
    //     <div className="hourly">
    //     {item ? <p>{new Date(item[index].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
    //     {item ? <p>{item[index].temp.toFixed()}°</p> : null}
    //     {item ? <img src={`http://openweathermap.org/img/wn/${item[index].weather[0].icon}@2x.png`} alt="weather"></img> : null}
    //   </div>
    //   </div>
    //   // )
    //   }
    // })
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
}

export default HourlyData;