import GitHubCalendar from "react-github-calendar";
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
            Hi, I'm Ruxin Qu
          </h1>
          <ul style={{ lineHeight: "2rem" }}>
            <li>
              Full Stack Web Developer with a passion to write clean and
              maintainable code.
            </li>
            <li>
              Graduated from Full Stack Coding Bootcamp through University of
              Washington.
            </li>
            <li>Background M.S degree in computational chemistry.</li>
          </ul>
        </Box>
      </CustomBox>
      <CustomBox flexDirection={isSmallScreen ? "column" : "row"}>
        <Box
          sx={{
            width: { xs: "100%", md: "70%", lg: 800 },
            lineHeight: 2,
          }}
        >
          <h5
            style={{
              color: "#dbdbdb",
              textAlign: "center",
              padding: "1rem 0",
            }}
          >
            From Lab to Laptop
          </h5>
          <p>
            During my graduate studies, I utilized software packages to tackle
            complex computational chemistry problems. Subsequently, I discovered
            my passion for software engineering and decided to pursue further
            learning through a web development bootcamp.
          </p>
        </Box>

        <img
          src="/assets/chem&code.png"
          alt="chemistry and coding icons"
          style={{ maxWidth: 400 }}
        />
      </CustomBox>
      <CustomBox flexDirection={isSmallScreen ? "column" : "row"}>
        <img
          src="/assets/drawing&dog.png"
          alt="Ruxin drawing with a dog's accompany"
          style={{ maxWidth: 300 }}
        />
        <Box sx={{ width: { xs: "100%", md: "70%", lg: 800 } }}>
          <h5
            style={{
              color: "#dbdbdb",
              textAlign: "center",
              padding: "1rem 0",
            }}
          >
            Stay Creative: Pencil & Pet
          </h5>
          <ul style={{ lineHeight: "2rem" }}>
            <li>
              I enjoy drawing and painting in my free time. I find the process
              of creating artwork very relaxing.
            </li>
            <li>
              I have an incredibly cute golden retriever. He's very affectionate
              and provides me lots of emotional support through cuddles 🐶.
            </li>
          </ul>
        </Box>
      </CustomBox>

      <CustomBox>
        <GitHubCalendar
          username="RuxinQu"
          blockSize={15}
          blockMargin={5}
          color="#f17105"
          fontSize={16}
        />
      </CustomBox>
    </Box>
  );
}
