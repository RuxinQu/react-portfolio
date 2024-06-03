import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { hobbyData } from "../data";

export default function Hobby() {
  return (
    <Box
      id="hobby"
      sx={{
        padding: { xs: "20px 0", md: "30px 0", lg: "50px 0" },
        width: { xs: "90%", md: "80%", lg: 1000 },
        mx: "auto",
      }}
    >
      <Box sx={{ mb: 5 }}>
        <p>
          I have loved drawing and painting since I was very young. Engaging in
          artwork brings me relief from stress and an appreciation for life.
        </p>
        <p>
          I began weightlifting in early 2023. The determination I've gained
          from exercising helps me stay resilient and optimistic.
        </p>
      </Box>
      <ImageList cols={3} gap={10}>
        {hobbyData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
