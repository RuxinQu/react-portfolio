import React from "react";

export const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <div className="container-fluid bg-dark">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand font-weight-bold" href="/">
          Ruxin Qu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#about-me"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#work"
                onClick={() => handlePageChange("Work")}
                className={
                  currentPage === "Work" ? "nav-link active" : "nav-link"
                }
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
