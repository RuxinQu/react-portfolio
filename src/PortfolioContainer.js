import React, { useEffect, useState } from "react";
import { workData } from "./data";
import { Preloader } from "./component/Preloader";
import { Header } from "./page/Header";
import { AboutMe } from "./page/Home";
import { Project } from "./component/Project";
import { Contact } from "./component/Contact";
import { Resume } from "./page/Resume";
import { Footer } from "./component/Footer";

export const PortfolioContainer = () => {
  // loader state. default is true.
  const [load, setLoad] = useState(true);

  // useEffect for the loader. show loader when refreshing the page. 1.1s later change the loader to not display.
  // dependency array is empty only rendered during mounting
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1100);
    // clear the useEffect
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // state to change the current page
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // change the content based on the currentPage
  const renderPage = () => {
    // change the page regarding to the currentPage state
    switch (currentPage) {
      case "About":
        return <AboutMe />;
      case "Project":
        return (
          <div id="work">
            <h3 className="text-center text-white py-3">My Work</h3>
            <div className="container-fluid">
              <div className="row d-flex justify-content-center">
                {/* map through the workData and each one renders a Project component */}
                {workData.map((work) => {
                  return <Project work={work} key={work.title} />;
                })}
              </div>
            </div>
          </div>
        );
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <div>
      <Preloader load={load} />
      {/* Header component inherit the parent props */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
};
