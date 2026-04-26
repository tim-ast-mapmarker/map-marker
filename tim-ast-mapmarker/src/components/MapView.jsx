import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import locations from "../data/locations.json";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";

export default function MapView() { 
  const [dynamicMarkers, setDynamicMarkers] = useState([]);

  
  const iconColors = {
    wisata: "yellow",
    belanja: "orange",
    edukasi: "green",
    pemerintahan: "blue",
    kesehatan: "red",
    layanan: "violet",
  };

  const getCustomIcon = (category) =>
  new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${iconColors[category]}.png`,
    shadowUrl:
      `https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png`,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  function AddMarkerOnClick() {
      useMapEvents({
        click(e) {
          const newMarker = {
            position: [e.latlng.lat, e.latlng.lng],
            name: "Marker Baru",
            address: "Ditambahkan melalui klik peta",
            category: "layanan",
          };
          setDynamicMarkers((prev) => [...prev, newMarker]);
        },
      });
      return null;
  }

  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={[5.5705, 95.3687]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarkerOnClick />
        
        {/* AREA USK */}
        <Circle
          center={[5.5693, 95.3699]}
          radius={500}
          pathOptions={{
            color: "blue",
            fillColor: "lightblue",
            fillOpacity: 0.4,
          }}
        >
          <Popup>
            <div className="popup-card">
              <h3>Universitas Syiah Kuala</h3>
              <p>Kawasan Kampus USK</p>
              <p>
                Jl. Teuku Nyak Arief No.441, Kopelma Darussalam,
                Kec. Syiah Kuala, Kota Banda Aceh, Aceh 23111
              </p>
            </div>
          </Popup>
        </Circle>

        {/* MULTIPLE MARKERS */}
        {locations.map((loc, index) => (
          <Marker key={index} position={loc.position} icon={getCustomIcon(loc.category)}>
            <Popup>
              <div className="popup-card">
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>
                <p><strong>Kategori:</strong> {loc.category}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {dynamicMarkers.map((loc, index) => (
          <Marker
            key={`dynamic-${index}`}
            position={loc.position}
            icon={getCustomIcon(loc.category)}
          >
            <Popup>
              <div className="popup-card">
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>
                <p><strong>Kategori:</strong> {loc.category}</p>
              </div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>
      <div className="map-controls">
        <button onClick={() => setDynamicMarkers([])}>
          Hapus Marker Klik
        </button>
      </div>
      {/* LEGEND */}
      <div className="map-legend">
        <h4>Keterangan</h4>

        <div className="legend-item">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png" alt="" />
          <span>Wisata</span>
        </div>

        <div className="legend-item">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png" alt="" />
          <span>Belanja</span>
        </div>

        <div className="legend-item">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png" alt="" />
          <span>Edukasi</span>
        </div>

        <div className="legend-item">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png" alt="" />
          <span>Pemerintahan</span>
        </div>

        <div className="legend-item">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png" alt="" />
          <span>Kesehatan</span>
        </div>

        <div className="legend-item">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png" alt="" />
          <span>Layanan</span>
        </div>

        <div className="legend-item">
          <span className="legend-circle usk-circle"></span>
          <span>Area Kampus USK (Radius 500m)</span>
        </div>
      </div>
    </div>
  );
}