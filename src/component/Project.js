import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// this is a template component used to represent one project card.
//  The mapping code is implemented in the PsortfolioContainer.js file
export const Project = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="col-11 col-md-5 col-lg-3 m-1 py-2 project"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h6 className="text-center mb-0 mt-2">{work.title}</h6>
      {!isHovered && (
        <LazyLoadImage width="100%" src={work.img} alt={work.alt} />
      )}
      {isHovered && (
        <div
          style={{
            color: "#d3d3d3",
            width: "90%",
            margin: "1rem auto",
            fontSize: 18,
          }}
        >
          <p style={{ marginBottom: "0.5rem" }}>Technologies Used:</p>
          <p>{work.Technologies}</p>
        </div>
      )}

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
