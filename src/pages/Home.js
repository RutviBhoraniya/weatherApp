import CurrentWeather from "../components/CurrentWeather";
import Forcast from "../components/Forcast";
import Hourly from "../components/Hourly";

function Home(props) {

  // check if an object is empty
  const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  return (
    <div className="home">
      {!isObjectEmpty(props.weather) ? (
        <>
          {/* <p>{props.weather.location.name}</p> */}
          <CurrentWeather weather={props.weather} 
            temperatureUnit={props.temperatureUnit}
            pressureUnit={props.pressureUnit}
            visibilityUnit={props.visibilityUnit}
            speedUnit={props.speedUnit}/>
          <Hourly hours={props.weather} 
            temperatureUnit={props.temperatureUnit}
            pressureUnit={props.pressureUnit}
            visibilityUnit={props.visibilityUnit}
            speedUnit={props.speedUnit}/>
          <Forcast forecastData={props.weather} 
            temperatureUnit={props.temperatureUnit}
            pressureUnit={props.pressureUnit}
            visibilityUnit={props.visibilityUnit}
            speedUnit={props.speedUnit}/>
        </>
      ) : (
        <p>Please, Connect to internate</p>
      )}
    </div>
  );
}

export default Home;
