import React from "react";

// this is a template component used to represent one project card.
//  The mapping code is implemented in the PsortfolioContainer.js file
export const Project = ({ work }) => {
  return (
    <div className="col-11 col-md-5 col-lg-3 project m-1 py-2">
      <h6 className="text-center mb-0 mt-2">{work.title}</h6>
      <img className="w-100" src={work.img} alt={work.alt} />
      <div className="d-flex justify-content-around">
        {work.page && (
          <a target="_blank" href={work.page} rel="noreferrer">
            View Page
          </a>
        )}
        <a target="_blank" href={work.repo} rel="noreferrer">
          Repository
        </a>
      </div>
    </div>
  );
};
