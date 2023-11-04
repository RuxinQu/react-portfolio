import React from "react";
import { skill } from "../data";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";

const skillStyle = {
  width: "80%",
};

export default function Resume() {
  return (
    <Box
      id="resume"
      sx={{ padding: { xs: "20px 0", md: "30px 0", lg: "50px 0" } }}
    >
      {/* download button */}
      <div className="row d-flex justify-content-center ">
        <button
          // click the button the window will open a new tab showing resume file
          onClick={() => window.open("./assets/resume-ruxinqu.pdf", "_blank")}
          type="button"
          className="btn btn-primary mt-2"
        >
          <DownloadIcon style={{ marginRight: 5 }} />
          Download Resume
        </button>
      </div>
      <h3
        style={{
          textAlign: "center",
          padding: "2rem 0",
          fontSize: "1.5rem",
          color: "#dbdbdb",
        }}
      >
        Skills
      </h3>
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
      <h3
        style={{
          textAlign: "center",
          padding: "2rem 0",
          fontSize: "1.5rem",
          color: "#dbdbdb",
        }}
      >
        Certifications
      </h3>
      <Box className="badges" display={"flex"} justifyContent={"center"}>
        <img
          src="./assets/aws-certified-developer-associate.png"
          alt="aws-certified-developer-associate-badge"
          onClick={() =>
            window.open(
              "https://www.credly.com/badges/0156d2c8-c156-45e0-8f43-7b772c7cb0bf/public_url"
            )
          }
        />
        <img
          src="./assets/aws-certified-solutions-architect-associate.png"
          alt="aws-certified-solutions-architect-associate-badge"
          onClick={() =>
            window.open(
              "https://www.credly.com/badges/f9139a78-a142-4216-98f1-665e66e23322/public_url"
            )
          }
        />
      </Box>
    </Box>
  );
}
