import React, {useEffect, useState} from "react";
import axios from "axios";
import Weather from './components/weather';
import HourlyData from './components/hourly';
import Daily from './components/daily';
import Temp from './components/temp';


function App() {
  const [data,setData] = useState(null)
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [units, setUnits] = useState("metric");
    
  const Imperial = (e) => {
    e.preventDefault();
    setUnits("imperial")
  }
  const Celsius = (e) => {
    e.preventDefault();
    setUnits("metric")
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
  }, [lat, long, units]);

  if (data) {
  return (

    <div className={(typeof data.current != "undefined") ? ((new Date(data.current.dt * 1000).getHours()+1 > 20) ? 'appNoone' : 'app') : 'app'}>
      <>
      <div className="container">        
        <Temp tempData={data} />
        <div className="change">
        <input type="submit" onClick={Imperial} value="Change to F"></input>
        <input type="submit" onClick={Celsius} value="Change to C"></input>
        </div>
        <Weather weatherData={data.current} />
        <div className="bottom">
        <HourlyData hourlyData={data.hourly} />
        </div>
        <div className="bottom">
        <Daily dailyData={data.daily} />
        </div>
      </div>
      </>
      </div>

      );
}
}

export default App;
