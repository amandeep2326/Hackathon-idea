import React from "react";
import corona from "../assets/corona.png";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${corona})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Our Prototype Consists of a face mask detection system andthermal processing to detect fever. We are using highly accuratealgorithms and deep learning methods in this prototype.
You can use this in analyzing around 100 patients at the sametime which really helps our hospital management to skip goingthrough each one and check his/her temperature.
It can also use as a system attached to the security camera andcheck on people who are wearing masks and following rules andwho are not.
Recently Majority Countries Faces the most important problemsin covid times that is Vaccine Unavailability.
        </p>
      </div>
    </div>
  );
}

export default About;
