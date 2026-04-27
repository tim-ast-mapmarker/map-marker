import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import locations from "../data/locations.json";
import { useState } from "react";
import { useMapEvents } from "react-leaflet";
import "../App.css";
import { useCallback } from "react";
import { useMap } from "react-leaflet";

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

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function MapView() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [editingMarkerId, setEditingMarkerId] = useState(null);
  const [dynamicMarkers, setDynamicMarkers] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  /* DELETE MARKER */
  const handleDeleteMarker = useCallback((id) => {
    setDynamicMarkers((prev) => {
      const updated = prev.filter((m) => m.id !== id);
      return [...updated]; // paksa React re-render
    });

    const popups = document.querySelectorAll(".leaflet-popup-close-button");
    popups.forEach((btn) => btn.click());
    
  }, []);

  /* ADD MARKER */
  
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

  const handleEditMarker = (id) => {
    const newName = prompt("Nama tempat:");
    const newAddress = prompt("Alamat:");
    const newCategory = prompt("Kategori:");

    setDynamicMarkers((prev) =>
      prev.map((marker) =>
        marker.id === id
          ? {
              ...marker,
              name: newName || marker.name,
              address: newAddress || marker.address,
              category: newCategory || marker.category,
            }
          : marker
      )
    );
  };

  

  return (
    <div style={{ height: "100vh", position: "relative" }}>
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
              <p>
                Jl. Teuku Nyak Arief No.441, Kopelma Darussalam,
                Kec. Syiah Kuala, Kota Banda Aceh, Aceh 23111
              </p>
            </div>
          </Popup>
        </Circle>

        {/* MULTIPLE MARKERS (DATA JSON) */}
        {locations.filter((loc) => activeCategory === "all"? true: loc.category === activeCategory).map((loc) => (
          <Marker
            key={loc.name}
            position={loc.position}
            icon={getCustomIcon(loc.category)}
          >
            <Popup>
              <div className="popup-card">
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>
                <p>
                  <strong>Kategori:</strong> {loc.category}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* DYNAMIC MARKERS*/}
        {dynamicMarkers.filter((loc) => activeCategory === "all"? true: loc.category === activeCategory).map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.position[0], loc.position[1]]}
            icon={getCustomIcon(loc.category)}
          >
            <Popup>
              <div className="popup-card">
                {editingMarkerId === loc.id ? (
                  <>
                    <input
                      type="text"
                      value={loc.name}
                      placeholder="Masukkan nama tempat"
                      onChange={(e) =>
                        setDynamicMarkers((prev) =>
                          prev.map((m) =>
                            m.id === loc.id ? { ...m, name: e.target.value } : m
                          )
                        )
                      }
                    />

                    <input
                      type="text"
                      value={loc.address}
                      placeholder="Masukkan alamat lengkap"
                      onChange={(e) =>
                        setDynamicMarkers((prev) =>
                          prev.map((m) =>
                            m.id === loc.id ? { ...m, address: e.target.value } : m
                          )
                        )
                      }
                    />

                    <select
                      value={loc.category}
                      onChange={(e) =>
                        setDynamicMarkers((prev) =>
                          prev.map((m) =>
                            m.id === loc.id ? { ...m, category: e.target.value } : m
                          )
                        )
                      }
                    >
                      {Object.keys(iconColors).map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>

                    <button
                      className="save-btn"
                      onClick={() => setEditingMarkerId(null)}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>

                    <h3>{loc.name}</h3>
                    <p>{loc.address}</p>
                    <p><strong>Kategori:</strong> {loc.category}</p>

                    <button
                      className="edit-btn"
                      onClick={() => setEditingMarkerId(loc.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteMarker(loc.id);
                      }}
                    >
                      Hapus Marker
                    </button>
                  </>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* HAPUS SEMUA MARKER */}
      <div className="filter-panel">
        <h4>Filter Kategori</h4>
        <button onClick={() => setActiveCategory("all")}>Semua</button>
        <button onClick={() => setActiveCategory("wisata")}>Wisata</button>
        <button onClick={() => setActiveCategory("belanja")}>Belanja</button>
        <button onClick={() => setActiveCategory("edukasi")}>Edukasi</button>
        <button onClick={() => setActiveCategory("kesehatan")}>Kesehatan</button>
        <button onClick={() => setActiveCategory("pemerintahan")}>Pemerintahan</button>
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
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png" alt="" />
          <span>Kuliner</span>
        </div>

        <div className="legend-item">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png" alt="" />
          <span>Olahraga</span>
        </div>

        <div className="legend-item">
          <img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png" alt="" />
          <span>Transportasi</span>
        </div>
      
        <div className="legend-item">
          <div className="legend-circle usk-circle"></div>
          <span>Area Kampus USK (Radius 600m)</span>
        </div>

      </div>
    </div>
  );
}