// import GitHubCalendar from "react-github-calendar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";
import Box from "@mui/system/Box";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "0 auto",
  [theme.breakpoints.up("xs")]: {
    width: "90%",
    padding: "20px 0",
  },
  [theme.breakpoints.up("md")]: {
    width: "80%",
    padding: "30px 0",
  },
  [theme.breakpoints.up("lg")]: {
    width: 1100,
    padding: "50px 0",
  },
}));

export default function About() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box id="about-me">
      <CustomBox
        flexDirection={isSmallScreen ? "column" : "row"}
        sx={{ marginTop: { xs: "20px", md: "30px", lg: "50px" } }}
      >
        <img
          src="/assets/profile.png"
          alt="Ruxin in front of the laptop"
          style={{ maxWidth: 300 }}
        />
        <Box sx={{ width: { xs: "100%", md: "70%", lg: 1000 } }}>
          <h1
            style={{
              color: "#dbdbdb",
              textAlign: "center",
              padding: "1rem 0",
            }}
          >
            Hi! I'm Ruxin.
          </h1>
        </Box>
      </CustomBox>
    </Box>
  );
}
