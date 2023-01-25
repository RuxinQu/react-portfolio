import React from "react";

// the detail code is implemented in styles.css file
export const Preloader = ({ load }) => {
  return <div className={load ? "loader" : "loader-none"}></div>;
};
