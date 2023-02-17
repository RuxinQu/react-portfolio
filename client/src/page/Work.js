import React from "react";
import { Project } from "../component/Project";
import { workData } from "../data";

export default function Work() {
  return (
    <div id="work" style={{ paddingTop: 70 }}>
      <h3 className="text-center text-white py-3">My Work</h3>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {/* map through the workData and each one renders a Project component */}
          {workData.map((work) => {
            return <Project work={work} key={work.title} />;
          })}
        </div>
      </div>
    </div>
  );
}
