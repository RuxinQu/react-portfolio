import React from "react";
import { frontEnd, backEnd } from "../data";
import { AiOutlineDownload } from "react-icons/ai";

const skillStyle = {
  width: "80%",
};

export default function Resume() {
  return (
    <div id="resume" className="container-fluid" style={{ paddingTop: 20 }}>
      {/* download button */}
      <div className="row d-flex justify-content-center ">
        <button
          // click the button the window will open a new tab showing resume file
          onClick={() => window.open("./assets/resume-ruxinqu.pdf", "_blank")}
          type="button"
          className="btn btn-primary mt-5"
        >
          <AiOutlineDownload style={{ marginRight: 5 }} />
          Download Resume
        </button>
      </div>
      <h3 className="text-white text-center my-4 ">Skills</h3>
      {/* frontEnd skill section */}
      <h5 className="text-center text-white">Front-end:</h5>
      <div
        className="row d-flex justify-content-center m-auto"
        style={skillStyle}
      >
        {/* mapping through the frontEnd array */}
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
      <h5 className="text-center text-white mt-4">Back-end:</h5>
      <div
        className="row d-flex justify-content-center m-auto"
        style={skillStyle}
      >
        {/* mapping through the backEnd array */}
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
}
