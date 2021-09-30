import React from "react";
import "../css/AboutMe.css";

function AboutMe() {
  const handleScroll = () => {};
  return (
    <section id="aboutMe">
      <div className="about-container" onScroll={handleScroll}>
        <p>
          Hello! <br />
          Deepak Kumar D hails from Kerala but currently he is located in
          Bangalore.
          <br />
          His steps have always been on the path of Creativity up till now. He
          always works to present something attractive to the eyes. His
          punctuality, dedication and team-efforts with a pinch of necessary
          leadership qualities helps him in accomplishing the goals.
          <br />
          He has completed his degree in <i>Master of Computer Applications </i>
          with a CGPA of 7.45 in the year 2017.
        </p>

        <div className="about-img">
          <img src="/images/profile.jpeg" alt="profile" />
        </div>
      </div>

      <h1>
        <hr />
        About Me
      </h1>
    </section>
  );
}

export default AboutMe;
