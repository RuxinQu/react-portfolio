import React from "react";
import Box from "@mui/material/Box";
import { LazyLoadImage } from "react-lazy-load-image-component";
// this is a template component used to represent one project card.
//  The mapping code is implemented in the PsortfolioContainer.js file
export const Project = ({ work }) => {
  return (
    <Box
      className="project"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      sx={{ minHeight: { sm: 550 } }}
      color={"#bbb"}
      p={3}
    >
      <Box>
        <h6
          style={{ textAlign: "center", fontSize: "1.3rem", padding: "10px 0" }}
        >
          {work.title}
        </h6>
        <LazyLoadImage width="100%" src={work.img} alt={work.alt} />
        <div style={{ padding: "10px 0" }}>
          <p style={{ marginBottom: "1rem" }}>{work.description}</p>
          <p style={{ marginBottom: "1rem" }}>
            Tech Stack: {work.technologies}
          </p>
        </div>
      </Box>

      <Box display={"flex"} justifyContent={"space-around"}>
        <a target="_blank" href={work.page} rel="noreferrer">
          View Page
        </a>
        <a target="_blank" href={work.repo} rel="noreferrer">
          Github Repo
        </a>
      </Box>
    </Box>
  );
};
