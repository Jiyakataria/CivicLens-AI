import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function HeatMap() {
  return (
    <div className="bg-slate-800 p-6 rounded-3xl mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        Complaint Locations
      </h2>

      <MapContainer
        center={[18.5204, 73.8567]}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[18.5204, 73.8567]}>
          <Popup>Pothole Complaint</Popup>
        </Marker>

        <Marker position={[18.5304, 73.8467]}>
          <Popup>Garbage Complaint</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default HeatMap;