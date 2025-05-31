
function CurrentWeather(props) {

  return (
    <div className="CurrentWeather">
      <div className="card containar">

        <div className="card-header">
          <h2>Current weather</h2>
          <span className="time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>

        <div className="card-main">
          <div className="temperature-section">
            <div className="weather-icon">
              <img src={props.weather.current.condition.icon} alt={props.weather.current.condition.icon}/>
            </div>
            <h1 className="temperature">{props.temperatureUnit==="C" ? `${props.weather.current.temp_c}°C` : `${props.weather.current.temp_f}°F`}</h1>
          </div>
          <div className="weather-description">
            <h3>Haze</h3>
            <p>Feels like {props.temperatureUnit==="C" ? `${props.weather.current.feelslike_c}°C` : `${props.weather.current.feelslike_f}°F`}</p>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <strong>Heat Index</strong>
            <p>{props.temperatureUnit==="C" ? `${props.weather.current.heatindex_c}°C` : `${props.weather.current.heatindex_f}°F`}</p>
          </div>
          <div className="detail-item">
            <strong>Wind</strong>
            <p>{props.speedUnit==="kmh" ? `${props.weather.current.wind_kph} kph` : `${props.weather.current.wind_mph} mph`} {props.weather.current.wind_dir}</p>
          </div>
          <div className="detail-item">
            <strong>Humidity</strong>
            <p>{props.weather.current.humidity}%</p>
          </div>
          <div className="detail-item">
            <strong>Visibility</strong>
            <p>{props.visibilityUnit==="km" ? `${props.weather.current.vis_km} km` : `${props.weather.current.vis_miles} miles`}</p>
          </div>
          <div className="detail-item">
            <strong>Pressure</strong>
            <p>{props.pressureUnit==="mb" ? `${props.weather.current.pressure_mb} mb` : `${props.weather.current.pressure_in} in`}</p>
          </div>
          <div className="detail-item">
            <strong>Dew point</strong>
            <p>{props.temperatureUnit==="C" ? `${props.weather.current.dewpoint_c}°C` : `${props.weather.current.dewpoint_f}°F`}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default CurrentWeather;
