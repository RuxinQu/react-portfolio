import React from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="container-fluid py-5">
      <ul className="nav justify-content-center">
        {/* github icon  */}
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
        {/* linkdin icon */}
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
        {/* dev.io icon */}
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
      <p className="text-center copyright">Copyright &copy; 2023 RuxinQu</p>
    </footer>
  );
};
