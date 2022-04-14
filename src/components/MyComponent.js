import { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data,setData] = useState({})
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");


  const getRadar = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
    if (lat && long !== undefined) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=d795ae7b2825f188eda06d057b56d772&units=metric`;
      await axios.get(apiUrl)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      });
    }
  }

  const getRadar2 = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
    if (lat && long !== undefined) {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=d795ae7b2825f188eda06d057b56d772&units=imperial `;
      await axios.get(apiUrl)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      });
    }
  }

  useEffect(() => {
    
    getRadar2();

  }, [lat, long]);


  const handleChange2 = (e) => {
    e.preventDefault();
    getRadar();
  }

  return (
      <div className="app">
        <div className="container">
        {data !== undefined &&
          <div className="top">
            {/* <input type="submit" onClick={handleChange} value="Change to F"></input> */}
            <input type="submit" onClick={handleChange2} value="Change to C"></input>
            <div className="location">
              <p>{data.timezone}</p>
              {data.current ? <p>Time {new Date(data.current.dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
              {data.current ? <p>Sunrise {new Date(data.current.sunrise * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
              {data.current ? <p>Sunset {new Date(data.current.sunset * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
            </div>
            <div className="temp">
              {data.current ? <h1>{data.current.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="description">
            {data.current ? <p>{data.current.weather[0].main}</p> : null}
            </div>
          </div>
          }
        {data.current !== undefined && 
          <div className="bottom">
            <div className="feels">
              {data.current ? <p className="bold">{data.current.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.current ? <p className="bold">{data.current.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
            {data.current ? <p className="bold">{data.current.wind_speed.toFixed()}MPH</p> : null}
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
              {data.hourly ? <p>{data.hourly[0].temp.toFixed()}°F</p> : null}
            </div>
            <div className="humidity">
              {/* timma +2 */}
              {data.hourly ? <p>{new Date(data.hourly[1].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
              {data.hourly ? <p>{data.hourly[1].temp.toFixed()}°F</p> : null}
            </div>
            {/* timma +3*/}
            <div className="wind">
              {data.hourly ? <p>{new Date(data.hourly[2].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
              {data.hourly ? <p>{data.hourly[2].temp.toFixed()}°F</p> : null}
            </div>
            {/* timma +4 */}
            <div className="wind">
              {data.hourly ? <p>{new Date(data.hourly[3].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
              {data.hourly ? <p>{data.hourly[3].temp.toFixed()}°F</p> : null}
            </div>
            {/* timma +5 */}
            <div className="wind">
              {data.hourly ? <p>{new Date(data.hourly[4].dt * 1000).toLocaleTimeString('sv-SE',{ hour: '2-digit', minute: '2-digit' })}</p> : null}
              {data.hourly ? <p>{data.hourly[4].temp.toFixed()}°F</p> : null}
            </div>
          </div>
        }
          
          {/* Temp for 5 days forward */}
  
        {data !== undefined &&
          <div className="bottom">
            <div className="feels">
              {/* dag +1 */}
                 {/* {data.daily.forEach((d) => {
                  console.log(d.dt)
              })} */}
              {data.daily ? <p>{new Date(data.daily[1].dt * 1000).getMonth()+ "/" +new Date(data.daily[1].dt * 1000).getDate()}</p> : null}
              {data.daily ? <p>{data.daily[1].temp.max.toFixed()}°F</p> : null}
            </div>
            <div className="humidity">
              {/* day +2 */}
              {data.daily ? <p>{new Date(data.daily[2].dt * 1000).getMonth()+ "/" +new Date(data.daily[2].dt * 1000).getDate()}</p> : null}
              {data.daily ? <p>{data.daily[2].temp.max.toFixed()}°F</p> : null}
            </div>
            <div className="wind">
              {/* day +3 */}
              {data.daily ? <p>{new Date(data.daily[3].dt * 1000).getMonth()+ "/" +new Date(data.daily[3].dt * 1000).getDate()}</p> : null}
              {data.daily ? <p>{data.daily[3].temp.max.toFixed()}°F</p> : null}
            </div>
            <div className="wind">
              {/* day +4 */}
              {data.daily ? <p>{new Date(data.daily[4].dt * 1000).getMonth()+ "/" +new Date(data.daily[4].dt * 1000).getDate()}</p> : null}
              {data.daily ? <p>{data.daily[4].temp.max.toFixed()}°F</p> : null}
            </div>
            <div className="wind">
              {/* day +5 */}
              {data.daily ? <p>{new Date(data.daily[5].dt * 1000).getMonth()+ "/" +new Date(data.daily[5].dt * 1000).getDate()}</p> : null}
              {data.daily ? <p>{data.daily[5].temp.max.toFixed()}°F</p> : null}
            </div>
          </div>
        }
        </div>
      </div>
  );
}

export default MyComponent;