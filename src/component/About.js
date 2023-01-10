import React from "react";
import Avatar from "avataaars2";

export const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="container-fluid d-flex justify-content-center align-items-center flex-wrap pt-3"
    >
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
      <div className="col-12 col-lg-7 ">
        <h1 className="text-center text-white py-5">Hi, I'm Ruxin Qu</h1>
        <p className="line-height-2">
          I am a Full Stack Web Developer with a passion to write{" "}
          <span className="orange">clean</span> and{" "}
          <span className="orange">maintainable</span> code. <br />
          I'm currently in Full Stack Coding Bootcamp through University of
          Washington, <br />
          and I have a background M.S degree in computational chemistry.
        </p>
      </div>
    </div>
  );
};
