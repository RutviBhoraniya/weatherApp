
function Hourly(props) {
    return (
      <div className="Hourly">
        <h3 className={props.hours.current.is_day===1?"hourly-title":"hourly-title white"}>Hourly Summary</h3>
        <div className="hourly-scroll">
          {props.hours.forecast.forecastday[0].hour.map((hour, index) => (
            <div key={index} className="hour-card">
              <p className={props.hours.current.is_day===1?"hour-time":"hour-time white"}>{hour.time.slice(-5)}</p>
              <img src={hour.condition.icon} alt="weather-icon" className="hour-icon" />
              <p className={props.hours.current.is_day===1?"hour-temp":"hour-temp white"}>{props.temperatureUnit==="C" ? `${hour.temp_c}` : `${hour.temp_f}`}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Hourly;