
function LocationDisplay(props) {

    // check if an object is empty
    const isObjectEmpty = (obj) => {
      return Object.keys(obj).length === 0;
    };

    return (
      <div className="LocationDisplay">
        {!isObjectEmpty(props.location) ? (
          <>
            <p className={props.location.current.is_day===1?"location-display":"location-display white"}>{props.location.location.name},{props.location.location.region},{props.location.location.country}</p>
          </>
        ) : (
          <p></p>
        )}
      </div>
    );
  }
  
  export default LocationDisplay;