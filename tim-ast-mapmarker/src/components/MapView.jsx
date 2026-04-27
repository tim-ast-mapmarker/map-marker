import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import locations from "../data/locations.json";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import "../App.css";
import { useCallback } from "react";

const iconColors = {
  wisata: "yellow",
  belanja: "orange",
  edukasi: "green",
  pemerintahan: "blue",
  kesehatan: "red",
  layanan: "violet",
  kuliner: "gold",
  olahraga: "grey",
  transportasi: "black",
};

const iconCache = {};

const getCustomIcon = (category) => {
  if (!iconCache[category]) {
    iconCache[category] = new L.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${iconColors[category]}.png`,
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
  }

  return iconCache[category];
};

export default function MapView() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [editingMarkerId, setEditingMarkerId] = useState(null);
  const [dynamicMarkers, setDynamicMarkers] = useState([]);

  //  TAMBAHAN STATE (WAJIB)
  const [showUSK, setShowUSK] = useState(true);

  /* DELETE MARKER */
  const handleDeleteMarker = useCallback((id) => {
    setDynamicMarkers((prev) => prev.filter((m) => m.id !== id));

    const popups = document.querySelectorAll(".leaflet-popup-close-button");
    popups.forEach((btn) => btn.click());
  }, []);

  function AddMarkerOnClick() {
    useMapEvents({
      click(e) {
        if (!isAddMode) return;

        const newMarker = {
          id: Date.now(),
          position: [e.latlng.lat, e.latlng.lng],
          name: "Marker Baru",
          address: "Alamat belum diisi",
          category: "wisata",
        };
        setDynamicMarkers((prev) => [...prev, newMarker]);
      },
    });
    return null;
  }

  return (
    <div style={{ height: "100vh", position: "relative" }}>
      
      {/*  MARKER COUNTER */}
      <div className="marker-counter">
        Total Marker: {locations.length + dynamicMarkers.length}
      </div>

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

        {/*  AREA USK (SUDAH DI-WRAP) */}
        {showUSK && (
          <Circle
            center={[5.5690, 95.3695]}
            radius={600}
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
              </div>
            </Popup>
          </Circle>
        )}

        {/* MARKER JSON */}
        {locations.map((loc) => (
          <Marker
            key={loc.name}
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

        {/* DYNAMIC MARKERS */}
        {dynamicMarkers.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.position}
            icon={getCustomIcon(loc.category)}
          >
            <Popup>
              <div className="popup-card">
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>

                <button
                  className="delete-btn"
                  onClick={() => handleDeleteMarker(loc.id)}
                >
                  Hapus Marker
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* CONTROLS */}
      <div className="map-controls">
        <button onClick={() => setIsAddMode(!isAddMode)}>
          {isAddMode ? "Matikan Mode Tambah Marker" : "Aktifkan Mode Tambah Marker"}
        </button>

        <button onClick={() => setDynamicMarkers([])}>
          Hapus Semua Marker
        </button>

        {/*  TOGGLE BUTTON */}
        <button onClick={() => setShowUSK(!showUSK)}>
          Toggle Area USK
        </button>
      </div>

      {/* LEGEND tetap */}
      <div className="map-legend">
        <h4>Keterangan</h4>
        <div className="legend-item">
          <div className="legend-circle usk-circle"></div>
          <span>Area Kampus USK</span>
        </div>
      </div>
    </div>
  );
}