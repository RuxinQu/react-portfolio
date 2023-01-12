import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const iconStyle = {
  margin: "0 5 3 0",
};

export const Header = ({ currentPage, handlePageChange }) => {
  // handle the page change and collapse the menu dropdown
  const [expand, setExpand] = useState(false);
  const handleClick = (page) => {
    handlePageChange(page);
    setExpand(false);
  };

  return (
    <Navbar expanded={expand} fixed="top" expand="md">
      <Container>
        <Navbar.Brand href="#" className="d-flex text-white">
          Ruxin Qu
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="bg-menu"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link
                className={
                  currentPage === "About" ? "nav-link neon-orange" : "nav-link"
                }
                href="#about-me"
                onClick={() => handleClick("About")}
              >
                <AiOutlineUser style={iconStyle} />
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className={
                  currentPage === "Project"
                    ? "nav-link neon-orange"
                    : "nav-link"
                }
                href="#work"
                onClick={() => handleClick("Project")}
              >
                <AiOutlineFundProjectionScreen style={iconStyle} />
                Work
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className={
                  currentPage === "Contact"
                    ? "nav-link neon-orange"
                    : "nav-link"
                }
                href="#contact"
                onClick={() => handleClick("Contact")}
              >
                <AiOutlineContacts style={iconStyle} />
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                className={
                  currentPage === "Resume" ? "nav-link neon-orange" : "nav-link"
                }
                href="#resume"
                onClick={() => handleClick("Resume")}
              >
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
