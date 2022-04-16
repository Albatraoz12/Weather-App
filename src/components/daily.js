import React from 'react';
import '../index.css';

const dailyData = ({dailyData}) => (
  <div className="bottom">
          <div className="feels">
            {dailyData.daily ? <p>{new Date(dailyData.daily[1].dt * 1000).getMonth()+ "/" +new Date(dailyData.daily[1].dt * 1000).getDate()}</p> : null}
            {dailyData.daily ? <p>{dailyData.daily[1].temp.max.toFixed()}°</p> : null}
            {dailyData.daily ? <img src={`http://openweathermap.org/img/wn/${dailyData.daily[1].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="humidity">
            {dailyData.daily ? <p>{new Date(dailyData.daily[2].dt * 1000).getMonth()+ "/" +new Date(dailyData.daily[2].dt * 1000).getDate()}</p> : null}
            {dailyData.daily ? <p>{dailyData.daily[2].temp.max.toFixed()}°</p> : null}
            {dailyData.daily ? <img src={`http://openweathermap.org/img/wn/${dailyData.daily[2].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="wind">
            {dailyData.daily ? <p>{new Date(dailyData.daily[3].dt * 1000).getMonth()+ "/" +new Date(dailyData.daily[3].dt * 1000).getDate()}</p> : null}
            {dailyData.daily ? <p>{dailyData.daily[3].temp.max.toFixed()}°</p> : null}
            {dailyData.daily ? <img src={`http://openweathermap.org/img/wn/${dailyData.daily[3].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="wind">
            {dailyData.daily ? <p>{new Date(dailyData.daily[4].dt * 1000).getMonth()+ "/" +new Date(dailyData.daily[4].dt * 1000).getDate()}</p> : null}
            {dailyData.daily ? <p>{dailyData.daily[4].temp.max.toFixed()}°</p> : null}
            {dailyData.daily ? <img src={`http://openweathermap.org/img/wn/${dailyData.daily[4].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="wind">
            {dailyData.daily ? <p>{new Date(dailyData.daily[5].dt * 1000).getMonth()+ "/" +new Date(dailyData.daily[5].dt * 1000).getDate()}</p> : null}
            {dailyData.daily ? <p>{dailyData.daily[5].temp.max.toFixed()}°</p> : null}
            {dailyData.daily ? <img src={`http://openweathermap.org/img/wn/${dailyData.daily[5].weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
        </div>
)

export default dailyData;