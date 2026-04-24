import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, Circle } from "react-leaflet";

export default function MapView() {
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
        {/* Contoh marker dengan popup di lokasi Universitas Syiah Kuala */}
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
            <div style={{ textAlign: "center" }}>
              <h3>Universitas Syiah Kuala</h3>
              <p>Kawasan Kampus USK</p>
            </div>
          </Popup>
        </Circle>

      </MapContainer>
      {/* LEGEND */}
      <div className="map-legend">
        <h4>Keterangan</h4>
        <p>🟦 Area = Kawasan</p>
        <p>📍 Marker = Lokasi Spesifik</p>
      </div>
    </div>
  );
}