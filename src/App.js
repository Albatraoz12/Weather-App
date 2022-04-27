import React, {useEffect, useState} from "react";
import axios from "axios";
import Weather from './components/WeatherInfoComponent/weather';
import HourlyData from './components/HourlyComponent/hourly';
import Daily from './components/DailyComponent/daily';
import Temp from './components/CurrentTempComponent/temp';


function App() {
  const [data,setData] = useState(null)
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [units, setUnits] = useState("metric");
  const [grade, setgrade] = useState("C");
  const [windSpeed, setWindSpeed] = useState("km/h");
    
  const Imperial = (e) => {
    e.preventDefault();
    setUnits("imperial");
    setgrade("F");
    setWindSpeed("mp/h")
  }
  const Celsius = (e) => {
    e.preventDefault();
    setUnits("metric");
    setgrade("C");
    setWindSpeed("km/h")
  }

  useEffect(() => {
    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      if (lat && long) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}&units=${units}`;
        await axios.get(apiUrl)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        });
      }
    }
    
    getLocation();
  }, [lat, long, units, grade]);

  if (data) {
  return (

    <div className={(typeof data.current != "undefined") ? ((new Date(data.current.dt * 1000).getHours()+1 > 20) ? 'appNoone' : 'app') : 'app'}>
      <>
      <div className="container">        
        <Temp tempData={data} grade={grade} />
        <div className="change">
          <input type="submit" onClick={Imperial} value="Change to F"></input>
          <input type="submit" onClick={Celsius} value="Change to C"></input>
        </div>
        <Weather weatherData={data.current} grade={grade} speed={windSpeed} />
        <div className="bottom">
        <HourlyData hourlyData={data.hourly} grade={grade} />
        </div>
        <div className="bottom">
        <Daily dailyData={data.daily} grade={grade} />
        </div>
      </div>
      </>
      </div>

      );
}
}

export default App;
