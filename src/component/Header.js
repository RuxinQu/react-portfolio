import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

// import LaptopIcon from "@mui/icons-material/Laptop";
import Face4Icon from "@mui/icons-material/Face4";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
// import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const iconStyle = {
  margin: "0 5 3 0",
};

export const Header = () => {
  // change the navbar color when scroll down
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  // scroll the window to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="md"
      className={colorChange ? "navbar colorChange" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" style={{ color: "#fff", padding: "10px 0" }}>
          Ruxin Qu
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-menu"
        >
          {/* menu bar. The default color doesn't show on the dark background. change the color by adding spans */}
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              {/* set nav.link as link and add href so the collapseOnSelect can work */}
              <Nav.Link as={NavLink} to="/" onClick={handleScrollToTop}>
                <Face4Icon style={iconStyle} />
                About
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link as={NavLink} to="work" onClick={handleScrollToTop}>
                <LaptopIcon style={iconStyle} />
                Work
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="resume" onClick={handleScrollToTop}>
                <TextSnippetIcon style={iconStyle} />
                Resume
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link as={NavLink} to="contact" onClick={handleScrollToTop}>
                <PermContactCalendarIcon style={iconStyle} />
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
