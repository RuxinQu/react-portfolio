import React from "react";
import { Project } from "../component/Project";
import { workData } from "../data";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Work() {
  return (
    <Box
      id="work"
      sx={{ padding: { xs: "20px 0", md: "30px 0", lg: "50px 0" } }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          fontSize: "1.5rem",
          color: "#dbdbdb",
        }}
      >
        My Work
      </h2>
      <Box
        sx={{
          width: { xs: "90%", md: "80%", lg: 1000 },
          mx: "auto",
        }}
      >
        <Grid container spacing={2}>
          {/* map through the workData and each one renders a Project component */}
          {workData.map((work) => {
            return (
              <Grid item xs={12} md={6}>
                <Project work={work} key={work.title} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
