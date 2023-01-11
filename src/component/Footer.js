import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import {FaDev} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="container-fluid mt-3">
      <ul className="nav justify-content-center">
        <li className="social-icon d-flex justify-content-center align-items-center">
          <a
            href="https://github.com/RuxinQu"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <BsGithub />
          </a>
        </li>
       
    
        <li className="social-icon d-flex justify-content-center align-items-center">
          <a
            href="https://www.linkedin.com/in/ruxin-qu-94a034176/"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="social-icon d-flex justify-content-center align-items-center">
          <a
            href="https://dev.to/rosiequ"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <FaDev />
          </a>
        </li>
      </ul>
    </footer>
  );
};
