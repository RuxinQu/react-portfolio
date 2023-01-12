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
  // handle the page change and collapse the menu dropdown
  const handlePageChangeNMenu = (page) => {
    handlePageChange(page)
    setExpand(false);
  };
  return (
    <div
      // if expand is true, add a show class to the navbar menu dropdown
      className={
        expand ? "collapse navbar-collapse show slow" : "collapse navbar-collapse"
      }
      id="navbarNav"
    >
      {/* attach an event to the anchor and a conditional statement to it's className to change the color 
      and toggle the menu dropdown */}
      <ul className="navbar-nav ml-auto p-2 bg-menu">
        {/* -----------home page----------- */}
        <li className="nav-item">
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
          {/* -----------work page----------- */}
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
        {/* -----------contact page----------- */}
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
        {/* -----------resume page----------- */}
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
