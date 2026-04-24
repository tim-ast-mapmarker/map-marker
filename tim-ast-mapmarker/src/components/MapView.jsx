import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, Circle } from "react-leaflet";

export default function MapView() {


  const locations = [
    {
      name: "Masjid Raya Baiturrahman",
      position: [5.5539, 95.3173],
      address: "Jl. Moh. Jam No.1, Kp. Baru, Kec. Baiturrahman, Kota Banda Aceh, Aceh 23127",
    },
    {
      name: "Museum Tsunami Aceh",
      position: [5.5477129, 95.3151901],
      address: "Jl. Sultan Iskandar Muda No.3, Sukaramai, Kec. Baiturrahman, Kota Banda Aceh, Aceh 23116",
    },
    {
      name: "Pantai Ulee Lheue",
      position: [5.5643903, 95.2923091],
      address: "Ulee Lheue, Kec. Meuraxa, Kota Banda Aceh, Aceh",
    },
    {
      name: "Taman Sari Banda Aceh",
      position: [5.5458870, 95.3161750],
      address: "Jl. Merapi No.37, Sukaramai, Kec.Baiturrahman, Kota Banda Aceh, Aceh 23116",
    },
  ];

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



{locations.map((loc, index) => (
  <Marker key={index} position={loc.position}>
    <Popup>
      <div style={{ textAlign: "center" }}>
        <h4>{loc.name}</h4>
        <p>{loc.address}</p>
      </div>
    </Popup>
  </Marker>
))}

          <Popup>
            <div style={{ textAlign: "center" }}>
              <h3>Universitas Syiah Kuala</h3>
              <p>Kawasan Kampus USK</p>
              <p>Jl. Teuku Nyak Arief No.441, Kopelma Darussalam, Kec. Syiah Kuala, Kota Banda Aceh, Aceh 23111</p>
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