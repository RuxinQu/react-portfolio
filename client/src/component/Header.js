import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const iconStyle = {
  margin: "0 5 3 0",
};

export const Header = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="md"
      className={colorChange ? "navbar colorChange" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex text-white">
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
              <Nav.Link as={NavLink} to="/" href="/">
                <AiOutlineUser style={iconStyle} />
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={NavLink} to="work" href="/work">
                <AiOutlineFundProjectionScreen style={iconStyle} />
                Work
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={NavLink} to="contact" href="/contact">
                <AiOutlineContacts style={iconStyle} />
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={NavLink} to="resume" href="/resume">
                <CgFileDocument style={iconStyle} />
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
