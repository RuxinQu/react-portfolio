import React from "react";
const spanStyle = {
  color: "#f17105",
  fontWeight: "bold",
};
export const Introduction = () => {
  return (
    <div className="col-11 col-lg-7 d-flex flex-column align-items-center">
      <h1 className="text-center text-white py-5 ">Hi, I'm Ruxin Qu</h1>
      <ul style={{ lineHeight: "2rem" }}>
        <li>
          Full Stack Web Developer with a passion to write{" "}
          <span style={spanStyle}>clean</span> and{" "}
          <span style={spanStyle}>maintainable</span> code.
        </li>
        <li>
          Graduated from Full Stack Coding Bootcamp through University of
          Washington.
        </li>
        <li>Background M.S degree in computational chemistry.</li>
      </ul>
    </div>
  );
};
