import React, { useEffect, useState } from "react";
import { workData } from "./data";
import { AboutMe } from "./component/About";
import { Project } from "./component/Project";
import { Contact } from "./component/Contact";
import { Resume } from "./component/Resume";
import { Portfolio } from "./component/Portfolio";

export const PortfolioContainer = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [name, setName] = useState("");
  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const [email, setEmail] = useState("");
  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const [message, setMessage] = useState("");
  const handleChangeMessage = ({ target }) => {
    setMessage(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setName("");
    setEmail("");
    setMessage("");
  };

  const [error, setError] = useState("");
  const handleError = ({ target }) => {
    if (!target.value) {
      setError(`${target.id} is required`);
      return;
    }
    if (target.id === "email") {
      const validEmail =
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          target.value
        );
      if (!validEmail) {
        setError(`email is invalid`);
      }
    }
  };

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
        return (
          <Contact
            name={name}
            email={email}
            message={message}
            error={error}
            handleChangeName={handleChangeName}
            handleChangeEmail={handleChangeEmail}
            handleChangeMessage={handleChangeMessage}
            handleSubmit={handleSubmit}
            handleError={handleError}
          />
        );
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <Portfolio
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      renderPage={renderPage}
      load={load}
    />
  );
};
