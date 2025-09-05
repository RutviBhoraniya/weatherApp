
import { useState,useEffect } from 'react';
import './App.css';
import LocationDisplay from './components/LocationDisplay';
import Home from './pages/Home';
import Settings from './pages/Settings';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Radar from './components/Radar';
import Hourlyforecast from './pages/Hourlyforecast';
import Dailyforecast from './pages/Dailyforecast';
import NightSkyBackground from './components/NightSkyBackground';


function App() {

  const key = "8412e44a92124543b6b65401241311";
  const [location,setLocation] = useState("rajkot");
  const [city,setCity] = useState("rajkot");
  const [weather,setWeather] = useState({});
  const [temperatureUnit, setTemperatureUnit] = useState("C");
  const [pressureUnit, setPressureUnit] = useState("mb");
  const [visibilityUnit, setVisibilityUnit] = useState("km");
  const [speedUnit, setSpeedUnit] = useState("kmh");

  import { useState, useEffect, useCallback } from 'react';

  const handleSubmit = useCallback(async () => {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`)
        .then(res => {
          if (res.ok) {
            return res.json();
          } else if (res.status === 404) {
            alert('oops! data not found');
          } else {
            alert('Server Error');
          }
        })
        .then(data => {
          console.log(data);
          setWeather(data);
        })
        .catch(error => console.log(error));
    }, [location, key]);   // dependencies


    const handleClick=async(lat,lag)=>{
      setLocation(lat+","+lag);
    }

    useEffect(() => {
      if (location) {
        handleSubmit();
      }
    }, [location, handleSubmit]);


  return (
    <div className="App">
      {weather?<>{weather.current?.is_day===1?<></>:<NightSkyBackground/>}</>:<></>}
      <div className="container">
        <Header/>
        <div className="search">
          <i className="fa fa-search"/>
          <input type="text" onChange={(e)=>setCity(e.target.value)}></input>
          <button type='submit' onClick={()=>setLocation(city)}>Search</button>
        </div>
        {weather?
        <>
        <LocationDisplay location={weather}/>
        <Routes>
          <Route path='/' 
            element={<Home weather={weather} 
              temperatureUnit={temperatureUnit}
              pressureUnit={pressureUnit}
              visibilityUnit={visibilityUnit}
              speedUnit={speedUnit}/>} />
          <Route path='/hourly' 
            element={<Hourlyforecast weather={weather} 
              temperatureUnit={temperatureUnit}
              pressureUnit={pressureUnit}
              visibilityUnit={visibilityUnit}
              speedUnit={speedUnit}/>}/>
          <Route path='/forecast' 
            element={<Dailyforecast weather={weather} 
              temperatureUnit={temperatureUnit}
              pressureUnit={pressureUnit}
              visibilityUnit={visibilityUnit}
              speedUnit={speedUnit}/>}/>
          <Route path='/settings' 
            element={<Settings 
              temperatureUnit={temperatureUnit}
              pressureUnit={pressureUnit}
              visibilityUnit={visibilityUnit}
              speedUnit={speedUnit}
              setTemperatureUnit={setTemperatureUnit}
              setPressureUnit={setPressureUnit}
              setVisibilityUnit={setVisibilityUnit}
              setSpeedUnit={setSpeedUnit} 
              weather={weather}/>}/>
          <Route path='/radar' 
            element={<Radar location={weather} 
              onLocationSelect={handleClick}/>}/>
        </Routes>
        </>:<p>city not exist</p>}
      </div>
    </div>
  );
}

export default App;
