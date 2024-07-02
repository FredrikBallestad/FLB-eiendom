// components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css';
import { GestureHandling } from 'leaflet-gesture-handling';

// Aktiver plugin
L.Map.addInitHook('addHandler', 'gestureHandling', GestureHandling);

// Tilpasset ikon for sort dott
const dotIcon = new L.DivIcon({
  className: 'custom-icon',
  html: '<div style="background-color: black; width: 15px; height: 15px; border-radius: 50%;"></div>',
  iconSize: [15, 15],
  iconAnchor: [7.5, 7.5],
});

const icon = L.icon({
  iconUrl: 'your_marker_icon.svg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponent = ({ eiendommer }) => {
  const position = [59.20962, 9.60897];  // Endre koordinatene til din ønskede lokasjon

  
  
  return (
    <div style={{ height: '500px', width: '100%' }}> {/* Sett høyden her */}
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} gestureHandling={true} style={{ height: '100%', width: '100%' }}> {/* Bruk 100% her */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {eiendommer.map((eiendom) => (
          <Marker
            key={eiendom._id}
            position={[eiendom.latitude, eiendom.longitude]}
            icon={dotIcon}
          >
            <Popup>
              {eiendom.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
