// components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Sørg for å erstatte 'your_marker_icon.svg' med stien til ditt ikon
const icon = L.icon({
  iconUrl: 'your_marker_icon.svg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponent = () => {
  const position = [59.20962, 9.60897];  // Endre koordinatene til din ønskede lokasjon

  return (
    <div style={{ height: '500px', width: '100%' }}> {/* Sett høyden her */}
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}> {/* Bruk 100% her */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
