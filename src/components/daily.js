import React from 'react';
import '../index.css';

const dailyData = ({dailyData}) => (
  <div className="bottom">
          <div className="feels">
            {dailyData ? <p>{new Date(dailyData[1].dt * 1000).getMonth()+ "/" +new Date(dailyData[1].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[1].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[1].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="humidity">
            {dailyData ? <p>{new Date(dailyData[2].dt * 1000).getMonth()+ "/" +new Date(dailyData[2].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[2].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[2].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="wind">
            {dailyData ? <p>{new Date(dailyData[3].dt * 1000).getMonth()+ "/" +new Date(dailyData[3].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[3].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[3].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="wind">
            {dailyData ? <p>{new Date(dailyData[4].dt * 1000).getMonth()+ "/" +new Date(dailyData[4].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[4].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[4].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="wind">
            {dailyData ? <p>{new Date(dailyData[5].dt * 1000).getMonth()+ "/" +new Date(dailyData[5].dt * 1000).getDate()}</p> : null}
            {dailyData ? <p>{dailyData[5].temp.max.toFixed()}°</p> : null}
            {dailyData ? <img src={`http://openweathermap.org/img/wn/${dailyData[5].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
        </div>
)

export default dailyData;