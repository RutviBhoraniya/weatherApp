
function Dailyforecast(props) {

    // check if an object is empty
    const isObjectEmpty = (obj) => {
      return Object.keys(obj).length === 0;
    };
  
    return (
      <div className="Dailyforecast">
        {!isObjectEmpty(props.weather) ? (
          <>
            {props.weather.forecast.forecastday.map((forcast, index) => (
              <div key={index} className="Hourly">
                <div className="weather-header">
                    <p className={props.weather.current.is_day===1?"date":"date white"}>{forcast.date.slice(8,10)+" / "+forcast.date.slice(5,7)}</p>
                    <img src={forcast.day.condition.icon} alt="weather-icon" className="hourly-icon" />
                    <p className={props.weather.current.is_day===1?"hourly-maxtemp":"hourly-maxtemp white"}>{props.temperatureUnit==="C" ? `${forcast.day.maxtemp_c}` : `${forcast.day.maxtemp_f}`}</p>
                    <p className={props.weather.current.is_day===1?"hourly-mintemp":"hourly-mintemp white"}>/{props.temperatureUnit==="C" ? `${forcast.day.mintemp_c}°C` : `${forcast.day.mintemp_f}°F`}</p>
                </div>
                  <div className="weather-info">
                      <h3 className={props.weather.current.is_day===1?"":" white"}>{forcast.day.condition.text}</h3>
                      <div className="grid-container">
                      <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>Sunrise</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{forcast.astro.sunrise}</span>
                          </div>
                          <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>Sunset</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{forcast.astro.sunset}</span>
                          </div>
                          <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>Moonrise</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{forcast.astro.moonrise}</span>
                          </div>
                          <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>Moonset</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{forcast.astro.moonset}</span>
                          </div>
                          <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>Average temprecher</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{props.temperatureUnit==="C" ? `${forcast.day.avgtemp_c}°C` : `${forcast.day.avgtemp_f}°F`}</span>
                          </div>
                          <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>max Wind</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{props.speedUnit==="kmh" ? `${forcast.day.maxwind_kph} kph` : `${forcast.day.maxwind_mph} mph`}</span>
                          </div>
                          <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>Visibility</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{props.visibilityUnit==="km" ? `${forcast.day.avgvis_km} km` : `${forcast.day.avgvis_miles} miles`}</span>
                          </div>
                          <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>Humidity</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{forcast.day.avghumidity}%</span>
                          </div>
                          <div className="grid-item">
                              <span className={props.weather.current.is_day===1?"":" white"}>UV Index</span>
                              <span className={props.weather.current.is_day===1?"":" white"}>{forcast.day.uv}</span>
                          </div>
                      </div>
                  </div>
  
              </div>
            ))}
          </>
        ) : (
          <p>No weather data available.</p>
        )}
      </div>
    );
  }
  
  export default Dailyforecast;
  