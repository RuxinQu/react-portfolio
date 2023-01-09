import React, { useState } from "react";
import { Navbar } from "../component/Navbar";

export const NavbarContainer = () => {
  const [currentPage, setCurrentPage] = useState("About");
    const handlePageChange=(page)=>{
        setCurrentPage(page)
    }
  return <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />;
};
