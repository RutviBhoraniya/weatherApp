

function Hourlyforecast(props) {

  // check if an object is empty
  const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <div className="Hourlyforecast">
      {!isObjectEmpty(props.weather) ? (
        <>
          {props.weather.forecast.forecastday[0].hour.map((hour, index) => (
            <div key={index} className="Hourly">
              <div className="weather-header">
                  <p className={props.weather.current.is_day===1?"hourly-time":"hourly-time white"}>{hour.time.slice(-5)}</p>
                  <img src={hour.condition.icon} alt="weather-icon" className="hourly-icon" />
                  <p className={props.weather.current.is_day===1?"hourly-temp":"hourly-temp white"}>{hour.temp_c}&#176;</p>
              </div>
                <div className="weather-info">
                    <h3 className={props.weather.current.is_day===1?"":" white"}>{hour.condition.text}</h3>
                    <div className="grid-container">
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>RealFeel Shade™</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{props.temperatureUnit==="C" ? `${hour.feelslike_c}°C` : `${hour.feelslike_f}°F`}</span>
                        </div>
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>Wind</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{hour.wind_dir} {props.speedUnit==="kmh" ? `${hour.wind_kph} kph` : `${hour.wind_mph} mph`}</span>
                        </div>
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>UV Index</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{hour.uv}</span>
                        </div>
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>Wind Gusts</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{props.speedUnit==="kmh" ? `${hour.gust_kph} kph` : `${hour.gust_mph} mph`}</span>
                        </div>
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>Cloud Cover</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{hour.cloud}</span>
                        </div>
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>Humidity</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{hour.humidity}%</span>
                        </div>
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>Visibility</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{props.visibilityUnit==="km" ? `${hour.vis_km} km` : `${hour.vis_miles} miles`}</span>
                        </div>
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>Pressure</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{props.pressureUnit==="mb" ? `${hour.pressure_mb} mb` : `${hour.pressure_in} in`}</span>
                        </div>
                        <div className="grid-item">
                            <span className={props.weather.current.is_day===1?"":" white"}>Dew Point</span>
                            <span className={props.weather.current.is_day===1?"":" white"}>{props.temperatureUnit==="C" ? `${hour.dewpoint_c}°C` : `${hour.dewpoint_f}°F`}</span>
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

export default Hourlyforecast;
