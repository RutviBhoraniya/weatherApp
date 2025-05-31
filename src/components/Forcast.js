
function Forcast(props) {
    return (
      <div className="Forcast">
        <h2 className={props.forecastData.current.is_day===1?"forecat-title":"forecat-title white"}>3 days Forecast</h2>
        <div className="forecat-display">
          {props.forecastData.forecast.forecastday.map((forecast, index) => (
            <div key={index} className="forecast-card">
              <div className="fore-d-i-c">
              <p className={props.forecastData.current.is_day===1?"forecast-date":"forecast-date white"}>{forecast.date.slice(8,10)+"/"+forecast.date.slice(5,7)}</p>
              <img src={forecast.day.condition.icon} alt="weather-icon" className="forecast-icon" />
              <p className={props.forecastData.current.is_day===1?"forecast-condition":"forecast-condition white"}>{forecast.day.condition.text}</p>
              </div>
              <div>
              <p className={props.forecastData.current.is_day===1?"forecat-min-temp":"forecat-min-temp white"}>{props.temperatureUnit==="C" ? `${forecast.day.mintemp_c}` : `${forecast.day.mintemp_f}`} / </p>
              <p className={props.forecastData.current.is_day===1?"forecat-max-temp":"forecat-max-temp white"}>{props.temperatureUnit==="C" ? `${forecast.day.maxtemp_c}°C` : `${forecast.day.maxtemp_f}°F`}</p>
              </div>
              <p className={props.forecastData.current.is_day===1?"forecast-humidity":"forecast-humidity white"}>{forecast.day.avghumidity} %</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Forcast;