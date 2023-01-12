import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Header = ({ currentPage, handlePageChange }) => {
  const [expand, setExpand] = useState(false);

  return (
    <header className="container-fluid navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        {/* refactor required to implement the route */}
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-brand font-weight-bold" href="#">
          Ruxin Qu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => (expand ? setExpand(false) : setExpand(true))}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* navbar component which handles changing page */}
        <Navbar
          expand={expand}
          setExpand={setExpand}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
    </header>
  );
};
