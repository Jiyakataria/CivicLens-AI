import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../leafletFix";
function HeatMap() {
  const locations = [
    {
      id: 1,
      lat: 18.5204,
      lng: 73.8567,
      issue: "Pothole Cluster",
      count: 23,
    },
    {
      id: 2,
      lat: 18.5312,
      lng: 73.8421,
      issue: "Garbage Complaints",
      count: 15,
    },
    {
      id: 3,
      lat: 18.5091,
      lng: 73.8328,
      issue: "Street Light Issues",
      count: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <h1 className="text-4xl font-bold mb-6">
        Civic Issue Heat Map
      </h1>

      <div className="rounded-3xl overflow-hidden border border-slate-700">

        <MapContainer
          center={[18.5204, 73.8567]}
          zoom={12}
          style={{ height: "700px", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.lat, location.lng]}
            >
              <Popup>
                <strong>{location.issue}</strong>
                <br />
                Complaints: {location.count}
              </Popup>
            </Marker>
          ))}
        </MapContainer>

      </div>
    </div>
  );
}

export default HeatMap;