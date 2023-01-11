import React, { useState } from "react";
import { Navbar } from "./Navbar";

export const Header = ({ currentPage, handlePageChange }) => {
  const [expand, setExpand] = useState(false);

  return (
    <header className=" container-fluid navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand font-weight-bold" href="/">
          Ruxin Qu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => (expand ? setExpand(false) : setExpand(true))}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
