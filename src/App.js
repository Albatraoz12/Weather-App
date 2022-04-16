import React, {useEffect, useState} from "react";
import axios from "axios";
import Weather from './components/weather';
import Hourly from './components/hourly';
import Daily from './components/daily';

function App() {
  const [data,setData] = useState({})
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  
  const getCelcius = async () => {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   setLat(position.coords.latitude);
    //   setLong(position.coords.longitude);
    // });
    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", long)
    if (lat && long !== undefined) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
      await axios.get(apiUrl)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      });
    }
  }
  const getRadar2 = async () => {
    // navigator.geolocation.getCurrentPosition(function(position) {
    //   setLat(position.coords.latitude);
    //   setLong(position.coords.longitude);
    // });
    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", long)
    if (lat && long !== undefined) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=imperial `;
      await axios.get(apiUrl)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      });
    }
  }
  

  useEffect(() => {
    // console.log(process.env)
    const getRadar = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      // console.log("Latitude is:", lat)
      // console.log("Longitude is:", long)
      if (lat && long !== undefined) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
        await axios.get(apiUrl)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        });
      }
    }
    
    getRadar();

  }, [lat, long]);

  const handleChange = (e) => {
    e.preventDefault();
    getRadar2();
  }
  const handleChange2 = (e) => {
    e.preventDefault();
    getCelcius();
  }
  
  // const removeTime = (date = new Date()) => {
  //   return new Date(
  //     date.getFullYear(),
  //     date.getMonth(),
  //     date.getDate()
  //   );
  // }


  return (
    <div className="app">
      <div className="container">
      {data !== undefined &&
        <div className="top">
          <div className="location">
            <h1>{data.timezone}</h1>
            {data.current ? <p>Time {new Date(data.current.dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.current ? <p>Sunrise {new Date(data.current.sunrise * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.current ? <p>Sunset {new Date(data.current.sunset * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
          </div>
          <div className="temp">
            {data.current ? <h2>{data.current.temp.toFixed()}°</h2> : null}
            {data.current ? <img src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt="weather"></img> : null}
          </div>
          <div className="description">
          {data.current ? <p>{data.current.weather[0].main}</p> : null}
          </div>
          <div className="change">
          <input type="submit" onClick={handleChange} value="Change to F"></input>
          <input type="submit" onClick={handleChange2} value="Change to C"></input>
          </div>
        </div>
        }
        
      {data.current !== undefined && 

      <Weather weatherData={data}/>
        // <div className="bottom">
        //   <div className="feels">
        //     {data.current ? <p className="bold">{data.current.feels_like.toFixed()}°</p> : null}
        //     <p>Feels Like</p>
        //   </div>
        //   <div className="humidity">
        //     {data.current ? <p className="bold">{data.current.humidity}%</p> : null}
        //     <p>Humidity</p>
        //   </div>
        //   <div className="wind">
        //   {data.current ? <p className="bold">{data.current.wind_speed.toFixed()} M/S</p> : null}
        //     <p>Wind Speed</p>
        //   </div>
        // </div>
      }

          {/*                     hourly               */}

      {data !== undefined && 
      <Hourly hourlyData={data}/>
        // <div className="bottom">
        //   <div className="feels">
        //     {data.hourly ? <p>{new Date(data.hourly[0].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
        //     {data.hourly ? <p>{data.hourly[0].temp.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.hourly[0].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        //   <div className="humidity">
        //     {data.hourly ? <p>{new Date(data.hourly[1].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
        //     {data.hourly ? <p>{data.hourly[1].temp.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.hourly[1].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        //   <div className="wind">
        //     {data.hourly ? <p>{new Date(data.hourly[2].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
        //     {data.hourly ? <p>{data.hourly[2].temp.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.hourly[2].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        //   <div className="wind">
        //     {data.hourly ? <p>{new Date(data.hourly[3].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
        //     {data.hourly ? <p>{data.hourly[3].temp.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.hourly[3].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        //   <div className="wind">
        //     {data.hourly ? <p>{new Date(data.hourly[4].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
        //     {data.hourly ? <p>{data.hourly[4].temp.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.hourly[4].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        // </div>
      }
        
        {/*                         Temp for 5 days forward                       */}

      {data !== undefined &&
      <Daily dailyData={data} />
        // <div className="bottom">
        //   <div className="feels">
 
        //     {data.daily ? <p>{new Date(data.daily[1].dt * 1000).getMonth()+ "/" +new Date(data.daily[1].dt * 1000).getDate()}</p> : null}
        //     {data.daily ? <p>{data.daily[1].temp.max.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        //   <div className="humidity">
        //     {data.daily ? <p>{new Date(data.daily[2].dt * 1000).getMonth()+ "/" +new Date(data.daily[2].dt * 1000).getDate()}</p> : null}
        //     {data.daily ? <p>{data.daily[2].temp.max.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        //   <div className="wind">
        //     {data.daily ? <p>{new Date(data.daily[3].dt * 1000).getMonth()+ "/" +new Date(data.daily[3].dt * 1000).getDate()}</p> : null}
        //     {data.daily ? <p>{data.daily[3].temp.max.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        //   <div className="wind">
        //     {data.daily ? <p>{new Date(data.daily[4].dt * 1000).getMonth()+ "/" +new Date(data.daily[4].dt * 1000).getDate()}</p> : null}
        //     {data.daily ? <p>{data.daily[4].temp.max.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        //   <div className="wind">
        //     {data.daily ? <p>{new Date(data.daily[5].dt * 1000).getMonth()+ "/" +new Date(data.daily[5].dt * 1000).getDate()}</p> : null}
        //     {data.daily ? <p>{data.daily[5].temp.max.toFixed()}°</p> : null}
        //     {data.daily ? <img src={`http://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png`} alt="weather"></img> : null}
        //   </div>
        // </div>
      //</div>
      }
      </div>
    </div>
  );
}

  

export default App;
