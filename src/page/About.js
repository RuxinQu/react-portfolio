// import Avatar from "avataaars2";
import GitHubCalendar from "react-github-calendar";
import { Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // sx={{width: { xs: "90%", md: "80%", lg: 1200 }}} ,
  padding: "15dvh 0",
  margin: "0 auto",
  [theme.breakpoints.down("xs")]: {
    width: "90%", // For screens smaller than 'md', set width to 100%
  },
  [theme.breakpoints.up("md")]: {
    width: "80%", // For screens 'md' and larger, set width to 50%
  },
  [theme.breakpoints.up("lg")]: {
    width: 1200, // For screens 'md' and larger, set width to 50%
  },
}));

export default function About() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box id="about-me">
      <CustomBox flexDirection={isSmallScreen ? "column" : "row"}>
        <img
          src="/assets/photo.png"
          alt="Ruxin smiling"
          style={{ maxWidth: 300 }}
        />
        <Box sx={{ width: { xs: "100%", md: "70%", lg: 800 } }}>
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
              Full Stack Web Developer with a passion to write{" "}
              <span style={{ color: "#f17105", fontWeight: "bold" }}>
                clean
              </span>{" "}
              and{" "}
              <span style={{ color: "#f17105", fontWeight: "bold" }}>
                maintainable
              </span>{" "}
              code.
            </li>
            <li>
              Graduated from Full Stack Coding Bootcamp through University of
              Washington.
            </li>
            <li>Background M.S degree in computational chemistry.</li>
          </ul>
        </Box>
      </CustomBox>

      {/* <Divider
        sx={{
          borderBottomWidth: 1,
          mx: "auto",
          width: 200,
        }}
      /> */}

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
          When I was in graduate school, I realized I had a passion for coding.
          But I knew that changing careers is never an easy thing. Later, I
          moved to the US. After a long period of thinking and trying
          self-taught JavaScript, I finally decided that web development was the
          right path for me. I started to pursue my career in web development
          and attended the UW coding bootcamp.
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
              I enjoy drawing in my free time. I find the sound of the pencil on
              paper very relaxing. Lately, I've also been trying out oil pastels
              for a new drawing experience.
            </li>
            <li>
              I have an incredibly cute golden retriever. He's very affectionate
              and provides me lots of emotional support through cuddles 🐶.
            </li>
          </ul>
        </Box>
      </CustomBox>
      <Box display={"flex"} justifyContent={"center"}>
        <GitHubCalendar
          username="RuxinQu"
          blockSize={15}
          blockMargin={5}
          color="#f17105"
          fontSize={16}
        />
      </Box>
    </Box>
  );
}
