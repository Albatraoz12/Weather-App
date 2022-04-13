import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [data,setData] = useState({})
  // const [location,setLocation] = useState('')

  //Lägger till nu ta bort om det ej funkar

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  // const [lat, setLat] = useState("");
  // const [long, setLong] = useState("");
  
  // const newUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=fc3777ceba883b236fb54a3f1f5bad5f&units=metric`
  
  const getLocation = async () => {
    const newUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=fc3777ceba883b236fb54a3f1f5bad5f&units=metric`
      await axios.get(newUrl).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
  }

  const getRadar = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }


  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function(position) {
      // setLat(position.coords.latitude);
      // setLong(position.coords.longitude);
      
      // const newUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=fc3777ceba883b236fb54a3f1f5bad5f&units=metric`
      // axios.get(newUrl).then((response) => {
      //   setData(response.data)
      //   console.log(response.data)
      // })
    // });
    // console.log("Latitude is:", lat)
    // console.log("Longitude is:", long)
    getRadar();
    getLocation();
  }, [lat, long]);



  // axios.get(newUrl)
  //     .then(res => res.json())
  //     .then(result => {
  //       setData(result)
  //       console.log(result);
  //     });

  // const getLocation = (event) => {
  //   if(event.key === 'Enter'){
  //   axios.get(newUrl).then((response) => {
  //           setData(response.data)
  //           console.log(response.data)
  //         })
  //     }
  // }

  //Härifrån

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fc3777ceba883b236fb54a3f1f5bad5f`

  // const searchLocation = (event) => {
  //   if(event.key === 'Enter'){
  //     axios.get(url).then((response) => {
  //       setData(response.data)
  //       console.log(response.data)
  //     })
  //     setLocation('')
  //   }
  // }

  const removeTime = (date = new Date()) => {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
  }


  return (
    <div className="app">
     {/* <div className="search">
        <input
        value={location}
        // onChange={event => setLocation(event.target.value)}
        onKeyPress={getLocation}
        placeholder="Search City"
        type="text" />
      </div> */}
      <div className="container">
      {data !== undefined &&
        <div className="top">
          <div className="location">
            <p>{data.timezone}</p>
            {data.current ? <p>Time {new Date(data.current.dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.current ? <p>Sunrise {new Date(data.current.sunrise * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.current ? <p>Sunset {new Date(data.current.sunset * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
          </div>
          <div className="temp">
            {data.current ? <h1>{data.current.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
          {data.current ? <p>{data.current.weather[0].main}</p> : null}
          </div>
        </div>
        }
        {data.current !== undefined && 
        <div className="bottom">
          <div className="feels">
            {data.current ? <p className="bold">{data.current.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.current ? <p className="bold">{data.current.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.current ? <p className="bold">{data.current.wind_speed.toFixed()}KM</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
        }
          {/* hourly */}
  {data !== undefined && 
        <div className="bottom">
          <div className="feels">
            {/* timma +1 */}
            {data.hourly ? <p>{new Date(data.hourly[0].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.hourly ? <p>{data.hourly[0].temp.toFixed()}°C</p> : null}
          </div>
          <div className="humidity">
            {/* timma +2 */}
            {data.hourly ? <p>{new Date(data.hourly[1].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.hourly ? <p>{data.hourly[1].temp.toFixed()}°C</p> : null}
          </div>
          {/* timma +3*/}
          <div className="wind">
            {data.hourly ? <p>{new Date(data.hourly[2].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.hourly ? <p>{data.hourly[2].temp.toFixed()}°C</p> : null}
          </div>
          {/* timma +4 */}
          <div className="wind">
            {data.hourly ? <p>{new Date(data.hourly[3].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.hourly ? <p>{data.hourly[3].temp.toFixed()}°C</p> : null}
          </div>
          {/* timma +5 */}
          <div className="wind">
            {data.hourly ? <p>{new Date(data.hourly[4].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            {data.hourly ? <p>{data.hourly[4].temp.toFixed()}°C</p> : null}
          </div>
        </div>
        }
        
        {/* Temp for 5 days forward */}

        {data !== undefined &&
        <div className="bottom">
          <div className="feels">
            {/* {data.daily.forEach((d) => {
                console.logd.dt
            })} */}
            {/* dag +1 */}
            {data.daily ? <p>{new Date(data.daily[1].dt * 1000).getMonth()+"/"+new Date(data.daily[1].dt * 1000).getDay()}</p> : null}
            {data.daily ? <p>{data.daily[1].temp.max.toFixed()}°C</p> : null}
            {/* {data.daily ? <img src={`http://openweathermap.org/img/wn/{data.daily.weather[0].icon}@2x.png`} alt="weatherIcon" /> : null} */}
          </div>
          <div className="humidity">
            {/* day +2 */}
            {data.daily ? <p>{removeTime(new Date(data.daily[2].dt * 1000)).toLocaleTimeString('sv-SE',{ month: 'numeric', day: 'numeric' })}</p> : null}
            {data.daily ? <p>{data.daily[2].temp.max.toFixed()}°C</p> : null}
          </div>
          <div className="wind">
            {/* day +3 */}
            {data.daily ? <p>{removeTime(new Date(data.daily[3].dt * 1000)).toLocaleTimeString('sv-SE',{ month: 'numeric', day: 'numeric' })}</p> : null}
            {data.daily ? <p>{data.daily[3].temp.max.toFixed()}°C</p> : null}
          </div>
          <div className="wind">
            {/* day +4 */}
            {data.daily ? <p>{removeTime(new Date(data.daily[4].dt * 1000)).toLocaleTimeString('sv-SE',{ month: 'numeric', day: 'numeric' })}</p> : null}
            {data.daily ? <p>{data.daily[4].temp.max.toFixed()}°C</p> : null}
          </div>
          <div className="wind">
            {/* day +5 */}
            {data.daily ? <p>{removeTime(new Date(data.daily[5].dt * 1000)).toLocaleTimeString('sv-SE',{ month: 'numeric', day: 'numeric' })}</p> : null}
            {data.daily ? <p>{data.daily[5].temp.max.toFixed()}°C</p> : null}
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
