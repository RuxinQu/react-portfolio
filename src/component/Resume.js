import React from "react";
import { frontEnd, backEnd } from "../data";

const skillStyle = {
  width: "80%",
};

export const Resume = () => {
  return (
    <div id="resume" className="container-fluid">
      {/* download button */}
      <div className="row d-flex justify-content-center ">
        <button
          onClick={() => window.open("./assets/resume-ruxinqu.pdf", "_blank")}
          type="button"
          className="btn btn-primary mt-5"
        >
          Download Resume
        </button>
      </div>
      <h3 className="text-white text-center my-4">Skills</h3>

      {/* frontEnd skill section */}
      <h5 className="text-center ">Front-end:</h5>
      <div
        className="row d-flex justify-content-center m-auto"
        style={skillStyle}
      >
        {frontEnd.map((skill) => {
          return (
            <div className="col-12 col-md-6 col-lg-3">
              <h6 className="skill text-center p-3 round" key={skill}>
                {skill}
              </h6>
            </div>
          );
        })}
      </div>

      {/* backend skill section */}
      <h5 className="text-center mt-4">Back-end:</h5>
      <div
        className="row d-flex justify-content-center m-auto"
        style={skillStyle}
      >
        {backEnd.map((skill) => {
          return (
            <div className="col-12 col-md-6 col-lg-3">
              <h6 className="skill text-center p-3 round" key={skill}>
                {skill}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};
