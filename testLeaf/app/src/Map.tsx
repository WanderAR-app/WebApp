import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression, Icon } from 'leaflet';

const Map: React.FC = () => {
  useEffect(() => {
    // Check if the map container already exists
    const mapContainer = document.getElementById('map');

    if (mapContainer && !mapContainer.classList.contains('leaflet-container')) {
      // Initialize the map
      const map = L.map('map').setView([51.505, -0.09] as LatLngExpression, 13);

      // Add a tile layer (you can use different tile providers)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      // Define the marker icon
      const markerIcon = new Icon({
        iconUrl: '/marker-icon.png', // Specify the correct path to your marker icon image
        iconSize: [50, 50],
        iconAnchor: [50, 50],
      });

      // Add a marker using the custom icon
      L.marker([51.505, -0.09] as LatLngExpression, { icon: markerIcon }).addTo(map);
    }
  }, []);

  return <div id="map" style={{ height: '400px' }} />;
};

export default Map;