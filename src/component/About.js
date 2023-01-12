import React from "react";
import Avatar from "avataaars2";
import GitHubCalendar from "react-github-calendar";

export const AboutMe = () => {
  return (
    <div id="about-me" className="container-fluid ">
      <div className="row d-flex justify-content-center align-items-center flex-wrap">
        {/* avatar generated from avataaars2 package */}
        <Avatar
          avatarStyle="Circle"
          topType="LongHairNotTooLong"
          accessoriesType="Prescription02"
          hairColor="Black"
          facialHairType="Blank"
          clotheType="BlazerSweater"
          eyeType="Default"
          eyebrowType="Default"
          mouthType="Smile"
          skinColor="Light"
        />
        <div className="col-11 col-lg-7 d-flex flex-column align-items-center">
          <h1 className="text-center text-white py-5 ">Hi, I'm Ruxin Qu</h1>
          <p className="line-height-2">
            I am a Full Stack Web Developer with a passion to write{" "}
            <span className="code font-weight-bold">clean</span> and{" "}
            <span className="code font-weight-bold">maintainable</span> code.{" "}
            I'm currently in Full Stack Coding Bootcamp through University of
            Washington, and I have a background M.S degree in computational
            chemistry.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center">
          <h3 className="text-white my-5">Github Calendar</h3>
          {/* github calendar generated from react-github-calendar package */}
          <GitHubCalendar
            username="RuxinQu"
            blockSize={15}
            blockMargin={5}
            color="#f17105"
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
};
