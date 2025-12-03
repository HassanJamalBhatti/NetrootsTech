"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function MapSection() {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = { lat: 30.3753, lng: 69.3451 };

  const locations = [
    { position: { lat: 31.5497, lng: 74.3436 }, label: "Lahore, Pakistan" },
    { position: { lat: 53.3498, lng: -6.2603 }, label: "Dublin, Ireland" },
    { position: { lat: 40.2732, lng: -76.8867 }, label: "Pennsylvania, USA" },
  ];

  return (
    <section className="bg-white rounded-xl shadow-lg p-10">
      <div className="max-w-7xl mx-auto">

        {/* Tag Line */}
        <p className="text-teal-400 font-bold">
          {"// "}
          <span className="text-black">Geographical Locations</span>
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-10 mt-2 leading-tight">
          Our Offices and <span className="text-blue-600">Operations</span> Around the World!
        </h1>

        {/* MAP */}
        <div className="w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-md border">
          <LoadScript googleMapsApiKey="AIzaSyCMtKh7m8CZ8VrNYCxvXzFabEfCkZxLKxs">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={2}
            >
              {locations.map((loc, i) => (
                <Marker key={i} position={loc.position} title={loc.label} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

      </div>
    </section>
  );
}
