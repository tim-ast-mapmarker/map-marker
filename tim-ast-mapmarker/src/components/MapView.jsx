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
      category: "wisata",
    },
    {
      name: "Museum Tsunami Aceh",
      position: [5.5477129, 95.3151901],
      address: "Jl. Sultan Iskandar Muda No.3, Sukaramai, Kec. Baiturrahman, Kota Banda Aceh, Aceh 23116",
      category: "wisata",
    },
    {
      name: "Pantai Ulee Lheue",
      position: [5.5643903, 95.2923091],
      address: "Ulee Lheue, Kec. Meuraxa, Kota Banda Aceh, Aceh",
      category: "wisata",
    },
    {
      name: "Taman Sari Banda Aceh",
      position: [5.5458870, 95.3161750],
      address: "Jl. Merapi No.37, Sukaramai, Kec.Baiturrahman, Kota Banda Aceh, Aceh 23116",
      category: "wisata",
    },
    {
      name: "Gramedia Banda Aceh",
      position: [5.5574620, 95.3444816],
      address: "Jl. T. Panglima Nyak Makam, Ie Masen Kaye Adang, Kec. Syiah Kuala, Kota Banda Aceh, Aceh 23116",
      category: "belanja",
    },
    {
      name: "Perpustakaan Wilayah Aceh",
      position: [5.5751, 95.3560],
      address: "Jl. Teuku Nyak Arief No.23, Lamgugob, Kec. Syiah Kuala, Kota Banda Aceh, Aceh 24415",
      category: "edukasi",
    },
    {
      name: "Kantor Gubernur Aceh",
      position: [5.5705, 95.3407],
      address: "Jl. Teuku Nyak Arief, Jeulingke, Kec. Syiah Kuala, Kota Banda Aceh",
      category: "pemerintahan",
    },
    {
      name: "RSUD Zainoel Abidin",
      position: [5.5641, 95.3372],
      address: "Jl. Moh. Daud Beureuh No.108, Bandar Baru, Kec. Kuta Alam, Kota Banda Aceh, Aceh 24415",
      category: "kesehatan",
    },
    {
      name: "Kantor Pos Banda Aceh",
      position: [5.5570, 95.3214],
      address: "Jl. T. Hamzah Bendahara No. 33, Kuta Alam, Banda Aceh, Aceh 23121",
      category: "layanan",
    },
  ];
  
  const iconColors = {
  wisata: "yellow",
  belanja: "orange",
  edukasi: "green",
  pemerintahan: "blue",
  kesehatan: "red",
  layanan: "grey",
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

      </MapContainer>
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
          <span className="legend-circle"></span>
          <span>Area Kampus (USK)</span>
        </div>
      </div>
    </div>
  );
}