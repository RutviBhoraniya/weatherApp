import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet"; // Import Leaflet
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Define custom marker icon
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Positioning
});

const Radar = ({ onLocationSelect, location }) => {
  const [position, setPosition] = useState([22.3, 70.7833]); // Default location

  // Update position when location changes
  useEffect(() => {
    if (location && location.location) {
      setPosition([location.location.lat, location.location.lon]);
    }
  }, [location]); // Runs only when `location` updates

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        onLocationSelect(e.latlng.lat, e.latlng.lng);
      },
    });

    return <Marker position={position} icon={customIcon} />;
  };

  return (
    <center>
    <MapContainer center={position} zoom={5} style={{ height: "500px", maxWidth: "800px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
    </center>
  );
};

export default Radar;
