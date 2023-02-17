import React from "react";

const mapStyle = {
  map: { width: "50%", height: 500 },
  infoWrapper: {
    zIndex: 2,
    backgroundColor: "#1f2937",
    position: "absolute",
    bottom: "2%",
    left: "3%",
  },
  info: {
    color: "#fff",
    marginBottom: 0,
    padding: 10,
    fontSize: 16,
  },
};

export const SeattleMap = () => {
  return (
    <div
      className="col-12 col-md-8 col-lg-6 position-relative"
      style={mapStyle.map}
    >
      {/* Seattle map  */}
      <iframe
        width="100%"
        height="100%"
        title="map"
        src="https://www.google.com/maps/embed/v1/place?q=seattle&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      ></iframe>
      {/* contact info on top of the map */}
      <div className="position-absolute round" style={mapStyle.infoWrapper}>
        <a href="mailto: ruxinqu@gmail.com" style={mapStyle.info}>
          Email:ruxinqu@gmail.com
        </a>
        <p style={mapStyle.info}>Phone: 206-710-5707</p>
      </div>
    </div>
  );
};
