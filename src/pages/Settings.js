
const Settings=({ temperatureUnit,pressureUnit,visibilityUnit,speedUnit,setTemperatureUnit,setPressureUnit,setVisibilityUnit,setSpeedUnit,weather })=> {
  return(
    <div className="settings">
      <h2 className={weather?.current?.is_day===1?"settings-title":"settings-title white"}>Settings</h2>
      <div className="settings-container">
        {/* Temperature Unit */}
        <div className="setting-item">
          <label className={weather?.current?.is_day===1?"":" white"}>Temperature:</label>
          <div className="radio-group">
            <input type="radio" id="celsius" name="temperature" value="C" checked={temperatureUnit === "C"} onChange={() => setTemperatureUnit("C")} />
            <label htmlFor="celsius">Celsius (°C)</label>
            <input type="radio" id="fahrenheit" name="temperature" value="F" checked={temperatureUnit === "F"} onChange={() => setTemperatureUnit("F")} />
            <label htmlFor="fahrenheit">Fahrenheit (°F)</label>
          </div>
        </div>
        
        {/* Pressure Unit */}
        <div className="setting-item">
          <label className={weather?.current?.is_day===1?"":" white"}>Pressure:</label>
          <div className="radio-group">
            <input type="radio" id="mb" name="pressure" value="mb" checked={pressureUnit === "mb"} onChange={() => setPressureUnit("mb")} />
            <label htmlFor="mb">Millibars (mb)</label>
            <input type="radio" id="in" name="pressure" value="in" checked={pressureUnit === "in"} onChange={() => setPressureUnit("in")} />
            <label htmlFor="in">Inches (in)</label>
          </div>
        </div>

        {/* Visibility Unit */}
        <div className="setting-item">
          <label className={weather?.current?.is_day===1?"":" white"}>Visibility:</label>
          <div className="radio-group">
            <input type="radio" id="km" name="visibility" value="km" checked={visibilityUnit === "km"} onChange={() => setVisibilityUnit("km")} />
            <label htmlFor="km">Kilometers (km)</label>
            <input type="radio" id="miles" name="visibility" value="miles" checked={visibilityUnit === "miles"} onChange={() => setVisibilityUnit("miles")} />
            <label htmlFor="miles">Miles (mi)</label>
          </div>
        </div>

        {/* Speed Unit */}
        <div className="setting-item">
          <label className={weather?.current?.is_day===1?"":" white"}>Speed:</label>
          <div className="radio-group">
            <input type="radio" id="kmh" name="speed" value="kmh" checked={speedUnit === "kmh"} onChange={() => setSpeedUnit("kmh")} />
            <label htmlFor="kmh">Kilometers per hour (kmh)</label>
            <input type="radio" id="mph" name="speed" value="mph" checked={speedUnit === "mph"} onChange={() => setSpeedUnit("mph")} />
            <label htmlFor="mph">Miles per hour (mph)</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;