import React from "react";

import { Header } from "./Header";
import { Preloader } from "./Preloader";
import { Footer } from "./Footer";

export const Portfolio = ({ currentPage, handlePageChange, renderPage,load }) => {
  return (
    <div>
      <Preloader load={load}/>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
};
