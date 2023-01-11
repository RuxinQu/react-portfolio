import React from "react";

export const Preloader = ({ load }) => {
  return <div className={load ? "loader" : "loader-none"}></div>;
};
