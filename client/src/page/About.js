import React from "react";
import Avatar from "avataaars2";
import GitHubCalendar from "react-github-calendar";
import { Introduction } from "../component/Introduction";

export default function About() {
  return (
    <div
      id="about-me"
      className="container-fluid "
      style={{ minHeight: "60vh", paddingTop: 70 }}
    >
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
        <Introduction />
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
}
