import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const GoogleMap = () => {
  return (
    <MapContainer center={[51.505, -0.09]} style={{height:"400px", width:"400px"}} zoom={10}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

</MapContainer>
  );
};

export default GoogleMap;