import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";

export default function MapView() {


  const locations = [
    {
      name: "Masjid Raya Baiturrahman",
      position: [5.5538, 95.3172],
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
    {
      name: "Gramedia Banda Aceh",
      position: [5.5574620, 95.3444816],
      address: "Jl. T. Panglima Nyak Makam, Ie Masen Kaye Adang, Kec. Syiah Kuala, Kota Banda Aceh, Aceh 23116",
    },
    {
      name: "Perpustakaan Wilayah Aceh",
      position: [5.5751, 95.3560],
      address: "Jl. Teuku Nyak Arief No.23, Lamgugob, Kec. Syiah Kuala, Kota Banda Aceh, Aceh 24415",
    },
    {
      name: "Kantor Gubernur Aceh",
      position: [5.5705, 95.3407],
      address: "Jl. Teuku Nyak Arief, Jeulingke, Kec. Syiah Kuala, Kota Banda Aceh",
    },
    {
      name: "RSUD Zainoel Abidin",
      position: [5.5641, 95.3372],
      address: "Jl. Moh. Daud Beureuh No.108, Bandar Baru, Kec. Kuta Alam, Kota Banda Aceh, Aceh 24415",
    },
    {
      name: "Kantor Pos Banda Aceh",
      position: [5.5570, 95.3214],
      address: "Jl. T. Hamzah Bendahara No. 33, Kuta Alam, Banda Aceh, Aceh 23121",
    },
  ];
  const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
  });

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
          <Marker key={index} position={loc.position} icon={customIcon}>
            <Popup>
              <div className="popup-card">
                <h4>{loc.name}</h4>
                <p>{loc.address}</p>
              </div>
            </Popup>
          </Marker>
        ))}

      </MapContainer>
      {/* LEGEND */}
      <div className="map-legend">
        <h4>Keterangan</h4>
        <p> Area = Kawasan</p>
        <p> Marker = Lokasi Spesifik</p>
      </div>
    </div>
  );
}