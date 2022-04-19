import React, {useEffect, useState} from "react";
import axios from "axios";
import Weather from './components/weather';
import Hourly from './components/hourly';
import Daily from './components/daily';
import Temp from './components/temp';

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
  const getImperial = async () => {
    if (lat && long !== undefined) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=imperial `;
      await axios.get(apiUrl)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      });
    }
  }
  
  const Imperial = (e) => {
    e.preventDefault();
    getImperial();
  }
  const Celsius = (e) => {
    e.preventDefault();
    getCelcius();
  }

  useEffect(() => {
    const getLocation = async () => {
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
    
    getLocation();

  }, [lat, long]);

  return (
    <div className={(typeof data.current != "undefined") ? ((new Date(data.current.dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' }) > 20) ? 'appNoone' : 'app') : 'app'}>
      <div className="container">        
      { data !== undefined && 
      <>
        <Temp tempData={data} />
        <div className="change">
        <input type="submit" onClick={Imperial} value="Change to F"></input>
        <input type="submit" onClick={Celsius} value="Change to C"></input>
        </div>
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
