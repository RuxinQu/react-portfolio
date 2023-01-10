import React from "react";

import { Header } from "./Header";

export const Portfolio = ({ currentPage, handlePageChange, renderPage }) => {
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};
