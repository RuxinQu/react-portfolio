import React from "react";
import Avatar from "avataaars2";

export const AboutMe = () => {
  return (
    <div id="about-me" className="container-fluid d-flex justify-content-center align-items-center flex-wrap">
      <Avatar
        avatarStyle="Circle"
        topType="LongHairNotTooLong"
        accessoriesType="Blank"
        hairColor="Black"
        facialHairType="Blank"
        clotheType="BlazerSweater"
        eyeType="Default"
        eyebrowType="Default"
        mouthType="Smile"
        skinColor="Light"
      />
      <div className="col-8 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white py-5">Hi, I'm Ruxin Qu!</h1>
        <p >
          I am a Web Developer with a passion to write clean and maintainable
          code. <br/>I'm currently in Full Stack Coding Bootcamp through University
          of Washington, <br/>and I have a background M.S degree in computational
          chemistry.
        </p>
      </div>
    </div>
  );
};
