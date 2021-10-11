import React from "react";
import "../css/Interests.css";
import "../css/Skills.css";

function Interests() {
  return (
    <section id="interests">
      <div className="interests-container">
        <h4>Interests</h4>
        <div className="grid-container">
          <div className="hobbies">
            <div className="hobby-img">
              <img src="/images/interests/gaming.png" alt="Gaming" />
            </div>
            <p>Gaming</p>
          </div>

          <div className="hobbies">
            <div className="hobby-img">
              <img src="/images/interests/dance.png" alt="Dancing" />
            </div>
            <p>Dancing</p>
          </div>

          <div className="hobbies">
            <div className="hobby-img">
              <img src="/images/interests/travel.png" alt="Travelling" />
            </div>
            <p>Travelling</p>
          </div>

          <div className="hobbies">
            <div className="hobby-img">
              <img src="/images/interests/sketch.png" alt="Sketching" />
            </div>
            <p>Sketching</p>
          </div>

          <div className="hobbies">
            <div className="hobby-img">
              <img src="/images/interests/cooking.png" alt="Cooking" />
            </div>
            <p>Cooking</p>
          </div>

          <div className="hobbies">
            <div className="hobby-img">
              <img src="/images/interests/swim.png" alt="Swimming" />
            </div>
            <p>Swimming</p>
          </div>

          <div className="hobbies">
            <div className="hobby-img">
              <img src="/images/interests/camera.png" alt="filming" />
            </div>
            <p>Photography & Filming</p>
          </div>

          <div className="hobbies">
            <div className="hobby-img">
              <img src="/images/interests/learn.png" alt="new" />
            </div>
            <p>Learning something new</p>
          </div>
        </div>

        <h4>Achievements</h4>
        <div className="achGrid-container">
          <a
            href="https://www.guvi.in/verify-certificate?id=3Dw59036o145N33uq1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="achievement-img">
              <img src="/images/achievements/FSD.png" alt="fsd" />
            </div>
            <h4>Full Stack Developer</h4>
            <p>GUVI Geek Networks, IITM Research Park</p>
            <p>Sep 2021</p>
          </a>

          <a
            href="https://www.guvi.in/verify-certificate?id=mcVg691B6uI8261219"
            target="_blank"
            rel="noreferrer"
          >
            <div className="achievement-img">
              <img src="/images/achievements/AI.png" alt="ai" />
            </div>
            <h4>AI for India</h4>
            <p>GUVI Geek Networks, IITM Research Park</p>
            <p>May 2021</p>
          </a>

          <a
            href="https://www.guvi.in/verify-certificate?id=f6v925r976J2T51V14"
            target="_blank"
            rel="noreferrer"
          >
            <div className="achievement-img">
              <img src="/images/achievements/Face-Recognition.png" alt="face" />
            </div>
            <h4>Build a Face Recognition Application using Python</h4>
            <p>GUVI Geek Networks, IITM Research Park</p>
            <p>Apr 2021</p>
          </a>

          <a
            href="https://www.guvi.in/verify-certificate?id=8U93SA166411xG62w9"
            target="_blank"
            rel="noreferrer"
          >
            <div className="achievement-img">
              <img src="/images/achievements/Javascript.png" alt="js" />
            </div>
            <h4>JavaScript</h4>
            <p>GUVI Geek Networks, IITM Research Park</p>
            <p>Mar 2021</p>
          </a>

          <a
            href="https://www.credly.com/badges/7f5abf8f-84e4-4a1c-a670-2ad0fc75f09a?source=linked_in_profile"
            target="_blank"
            rel="noreferrer"
          >
            <div className="achievement-img">
              <img src="/images/achievements/ey.png" alt="ey" />
            </div>
            <h4>EY Innovation - Design thinking - Bronze</h4>
            <p>EY</p>
            <p>Aug 2020</p>
          </a>
        </div>
      </div>

      <h1>
        <hr />
        Interests/Achievements
      </h1>
    </section>
  );
}

export default Interests;
