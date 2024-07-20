import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        padding: { xs: "20px 0", md: "30px 0", lg: "50px 0" },
        width: { xs: "90%", md: "80%", lg: 1000 },
        mx: "auto",
      }}
    >
      <Box
        component="form"
        netlify
        sx={{
          width: { xs: "100%", md: "80%", lg: "700px" },
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <TextField required name="name" label="name" fullWidth />
        <TextField required name="email" label="email" fullWidth />
        <TextField
          required
          name="message"
          label="message"
          multiline
          rows={4}
          fullWidth
        />
        {/* </Box> */}
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Box>
    </Box>
  );
}
