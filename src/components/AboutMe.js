import React from "react";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <section id="aboutMe">
      <div className="about-container">
        <div className="holder">
          <div className="about-img">
            <img src="/images/profile.jpeg" alt="profile" />
          </div>

          <div className="about-p">
            <p>
              Hello! This is <span>Deepak Kumar D.</span>
              <br />
              He basically hails from Kerala. But he was born in Chennai and due
              to his father's profession, he lived almost all of his life in
              other cities of India. And at present he is located in Bangalore,
              The Silicon Valley of India.
              <br />
              His steps have always been on the path of Creativity up till now.
              He always work to present something attractive to the eyes. His
              punctuality, dedication and team-effort with a pinch of necessary
              leadership quality helps him in accomplishing the goals.
              <br />
              Maybe you also want to know that he has completed his degree in{" "}
              <strong>
                <i>Master of Computer Applications </i>
              </strong>
              with a CGPA of 7.45 in the year 2017.
            </p>
          </div>
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
