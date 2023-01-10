import React from "react";
import { Navbar } from "./Navbar";

export const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div className="container-fluid navbar-container">
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
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
    </div>
  );
};
