import React from "react";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const iconStyle = {
  margin: "0 5 3 0",
};

export const Navbar = ({
  currentPage,
  handlePageChange,
  expand,
  setExpand,
}) => {
  const handlePageChangeNMenu = (page) => {
    handlePageChange(page);
    setExpand(false);
  };
  return (
    <div
      className={
        expand ? "collapse navbar-collapse show" : "collapse navbar-collapse"
      }
      id="navbarNav"
    >
      <ul className="navbar-nav ml-auto p-2 bg-menu">
        <li className="nav-item">
          {/* attach an event to the anchor and a conditional statement to it's className to change the color */}

          <a
            href="#about-me"
            onClick={() => handlePageChangeNMenu("About")}
            className={
              currentPage === "About" ? "nav-link neon-orange" : "nav-link"
            }
          >
            <AiOutlineUser style={iconStyle} />
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#work"
            onClick={() => handlePageChangeNMenu("Project")}
            className={
              currentPage === "Project" ? "nav-link neon-orange" : "nav-link"
            }
          >
            <AiOutlineFundProjectionScreen style={iconStyle} />
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChangeNMenu("Contact")}
            className={
              currentPage === "Contact" ? "nav-link neon-orange" : "nav-link"
            }
          >
            <AiOutlineContacts style={iconStyle} />
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChangeNMenu("Resume")}
            className={
              currentPage === "Resume" ? "nav-link neon-orange" : "nav-link"
            }
          >
            <CgFileDocument style={iconStyle} />
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};
