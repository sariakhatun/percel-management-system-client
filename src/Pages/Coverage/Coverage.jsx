import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useLoaderData } from "react-router";

// Custom blue icon for markers
const blueIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Child component to fly and open popup
const MapFlyPopup = ({ position, markerRef }) => {
  const map = useMap();

  useEffect(() => {
    if (position && markerRef.current) {
      map.flyTo(position, 10, { duration: 1.5 });
      markerRef.current.openPopup();
    }
  }, [position, map, markerRef]);

  return null;
};

const Coverage = () => {
  const serviceCenters = useLoaderData(); // Data from loader
  const bangladeshCenter = [23.685, 90.3563]; // Default center

  const [searchText, setSearchText] = useState("");
  const [selectedCoords, setSelectedCoords] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const matchedMarkerRef = useRef(null); // To open matched popup

  // Form submit handler
  const handleSearch = (e) => {
    e.preventDefault();

    const input = searchText.trim().toLowerCase();
    const found = serviceCenters.find(
      (center) => center.district?.toLowerCase() === input
    );

    if (found) {
      setSelectedCoords([found.latitude, found.longitude]);
      setSelectedDistrict(found.district);
    } else {
      alert("District not found");
      setSelectedCoords(null);
      setSelectedDistrict("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        We are available in 64 districts
      </h1>

      {/* 🔍 Search form */}
      <form onSubmit={handleSearch} className="flex justify-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search district name..."
          className="input input-bordered w-full max-w-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Go
        </button>
      </form>

      {/* 🗺 Map */}
      <div className="h-[800px] w-full max-w-5xl mx-auto border-2 border-gray-300 rounded-lg overflow-hidden shadow-md">
        <MapContainer
          center={bangladeshCenter}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />

          {/* Fly to selected marker and open popup */}
          {selectedCoords && (
            <MapFlyPopup position={selectedCoords} markerRef={matchedMarkerRef} />
          )}

          {/* Show all service center markers */}
          {serviceCenters.map((center, idx) => {
            const isMatch = center.district === selectedDistrict;

            return (
              <Marker
                key={idx}
                position={[center.latitude, center.longitude]}
                icon={blueIcon}
                ref={isMatch ? matchedMarkerRef : null}
              >
                <Popup>
                  <strong>{center.district}</strong>
                  <br />
                  {center.covered_area?.join(", ")}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
