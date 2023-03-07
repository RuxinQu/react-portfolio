import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// this is a template component used to represent one project card.
//  The mapping code is implemented in the PsortfolioContainer.js file
export const Project = ({ work }) => {
  return (
    <div className="col-11 col-md-5 col-lg-3 m-1 py-2 project">
      <h6 className="text-center mb-0 mt-2">{work.title}</h6>
      <LazyLoadImage width="100%" src={work.img} alt={work.alt} />
      {/* <img className="w-100"  /> */}
      <div className="d-flex justify-content-around">
        <a target="_blank" href={work.page} rel="noreferrer">
          View Page
        </a>
        <a target="_blank" href={work.repo} rel="noreferrer">
          Repository
        </a>
      </div>
    </div>
  );
};
