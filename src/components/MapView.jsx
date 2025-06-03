import React from "react";

const MapView = () => {
  return (
    <div>
      {/* Map */}
      <GoogleMap
        zoom={12}
        center={{ lat: 28.6139, lng: 77.209 }}
        mapContainerStyle={{ width: "100%", height: "400px" }}
      >
        {rooms.map((room) => (
          <Marker key={room.id} position={{ lat: room.lat, lng: room.lng }} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MapView;
