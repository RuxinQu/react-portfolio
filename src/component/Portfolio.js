import React from "react";

import { Header } from "./Header";
import { Preloader } from "./Preloader";

export const Portfolio = ({ currentPage, handlePageChange, renderPage,load }) => {
  return (
    <div>
      <Preloader load={load}/>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
};
