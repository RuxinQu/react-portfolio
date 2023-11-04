import React from "react";
import  Box  from "@mui/system/Box";

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
    // <div
    //   className="col-12 col-md-8 col-lg-6 position-relative"
    //   style={mapStyle.map}
    // >
    //   {/* Seattle map  */}
    //   <iframe
    //     width="100%"
    //     height="100%"
    //     title="map"
    //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172138.65564867397!2d-122.48248986493819!3d47.61317422164649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1676702759509!5m2!1sen!2sus"
    //   ></iframe>

    //   {/* contact info on top of the map */}
    //   {/* <div className="position-absolute round" style={mapStyle.infoWrapper}>
    //     <a href="mailto: ruxinqu@gmail.com" style={mapStyle.info}>
    //       Email:ruxinqu@gmail.com
    //     </a>
    //   </div> */}
    // </div>
    
  );
};
