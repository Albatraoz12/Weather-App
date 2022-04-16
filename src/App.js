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
    const getRadar = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
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
        
      { data.current !== undefined && 
      <>
        <Weather weatherData={data.current} />
        <Hourly hourlyData={data.hourly} />
        <Daily dailyData={data.daily} />
      </>
      }
      </div>
    </div>
  );
}

  

export default App;
