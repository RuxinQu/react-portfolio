import React from "react";
import { workData } from "../workData";

export const Work = () => {
  return (
    <div id="work" className="my-5">
      <h3 className="text-center text-white py-5">My Work</h3>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {workData.map((work) => {
            return (
              <div className="col-11 col-md-5 col-lg-3 project m-1 py-2">
                <h4 className="text-center mb-0 mt-2">{work.title}</h4>
                <img className="w-100" src={work.img} alt={work.alt} />
                <div className="d-flex justify-content-around">
                  {work.page && (
                    <a target="_blank" href={work.page} rel="noreferrer">
                      View Page
                    </a>
                  )}
                  <a target="_blank" href={work.repo} rel="noreferrer">
                    View Repository
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
