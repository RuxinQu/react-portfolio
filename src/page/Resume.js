import React from "react";
import { skill } from "../data";
import { AiOutlineDownload } from "react-icons/ai";

const skillStyle = {
  width: "80%",
};

export default function Resume() {
  return (
    <div id="resume" className="container-fluid">
      {/* download button */}
      <div className="row d-flex justify-content-center ">
        <button
          // click the button the window will open a new tab showing resume file
          onClick={() => window.open("./assets/resume-ruxinqu.pdf", "_blank")}
          type="button"
          className="btn btn-primary mt-2"
        >
          <AiOutlineDownload style={{ marginRight: 5 }} />
          Download Resume
        </button>
      </div>
      <h3 className="text-white text-center my-4 ">Skills</h3>
      {/* frontEnd skill section */}
      <div
        className="row d-flex justify-content-center m-auto"
        style={skillStyle}
      >
        {/* mapping through the frontEnd array */}
        {skill.map((skill) => {
          return (
            <div className="col-12 col-md-6 col-lg-3" key={skill}>
              <h6 className="skill text-center p-3 round">{skill}</h6>
            </div>
          );
        })}
      </div>
      <h3 className="text-white text-center my-4 ">Certifications</h3>
      <div className="badges text-center">
        <img
          src="./assets/aws-certified-developer-associate.png"
          alt="aws-certified-developer-associate-badge"
          onClick={() =>
            window.open(
              "https://www.credly.com/badges/0156d2c8-c156-45e0-8f43-7b772c7cb0bf/public_url"
            )
          }
        />
      </div>
    </div>
  );
}
