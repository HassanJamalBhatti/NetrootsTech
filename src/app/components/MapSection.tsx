"use client";

import { GoogleMap, LoadScript, MarkerF, InfoWindow } from "@react-google-maps/api";
import { useMemo, useState } from "react";

// ← PUT YOUR REAL KEY HERE (for testing)
const GOOGLE_MAPS_API_KEY = "AIzaSyCMtKh7m8CZ8VrNYCxvXzFabEfCkZxLKxs";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const center = { lat: 40.4637, lng: -3.7492 };

const locations = [
    { id: 1, name: "Pennsylvania, USA", position: { lat: 41.2033, lng: -77.1945 }, flag: "US" },
    { id: 2, name: "Dublin, Ireland", position: { lat: 53.3498, lng: -6.2603 }, flag: "IE" },
    { id: 3, name: "Lahore, Pakistan", position: { lat: 31.5204, lng: 74.3587 }, flag: "PK" },
  
];

export default function GeographicalMap() {
  const [selected, setSelected] = useState<typeof locations[0] | null>(null);

  // Create the custom icon ONLY when Google Maps is loaded
  const markerIcon = useMemo(() => {
    return (flag: string) => ({
      url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="16" fill="#3b82f6" stroke="#1e40af" stroke-width="3"/>
          <text x="20" y="25" font-size="18" text-anchor="middle" fill="white">${flag}</text>
        </svg>
      `)}`,
      scaledSize: { width: 40, height: 40 } as google.maps.Size, 
      anchor: { x: 30, y: 20 } as google.maps.Point,
    });
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:ml-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold  mt-2 leading-tight">
          Our Offices and <span className="text-blue-600">Operations</span> Around the World!
        </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={3}
              options={{
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              {locations.map((location) => (
                <MarkerF
                    key={location.id}
                    position={location.position}
                    onClick={() => setSelected(location)}
                    icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // red pin
                    }}
                    />
              ))}

              {selected && (
                <InfoWindow
                  position={selected.position}
                  onCloseClick={() => setSelected(null)}
                >
                  <div className="p-3">
                    <p className="font-bold text-gray-900 flex items-center gap-2">
                      <span className="text-2xl">{selected.flag}</span>
                      {selected.name}
                    </p>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>

          {/* Legend */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition cursor-pointer"
                onClick={() => setSelected(loc)}
              >
                <div className="text-4xl">{loc.flag}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{loc.name}</h4>
                  <p className="text-sm text-gray-600">Click to focus</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 



 