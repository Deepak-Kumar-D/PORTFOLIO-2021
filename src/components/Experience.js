import React from "react";
import { BiTimer } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";
import "../css/Experience.css";

function Experience() {
  return (
    <section id="experiences">
      <div className="experiences-container">
        <div className="sub-experience">
          <div className="works">
            <h2>
              <FaBusinessTime />
              Full-Time
            </h2>

            <div className="work-list">
              <h4>EY</h4>
              <p>Video Editor / Graphic Designer</p>
              <p>Jan 2020 - Mar 2021</p>

              <h4>Beyond Limit Entertainment Pvt Ltd</h4>
              <p>Graphic Designer</p>
              <p>Nov 2018 - Sep 2019</p>

              <h4>Cineasta Productions</h4>
              <p>Graphic Designer</p>
              <p>Dec 2017 - Oct 2018</p>
            </div>
          </div>

          <div className="works">
            <h2>
              <GiSandsOfTime />
              Internship
            </h2>

            <div className="work-list">
              <h4>Koan Metrics</h4>
              <p>Graphic Designer</p>
              <p>Nov 2014 - Feb 2015</p>
            </div>
          </div>

          <div className="works">
            <h2>
              <BiTimer />
              Freelance
            </h2>

            <div className="work-list">
              <h4>Tijo's Dance Academy</h4>
              <p>Video Editor / Graphic Designer</p>

              <h4>Pentagon Events & Activations</h4>
              <p>Video Editor</p>

              <h4>Teatro Espressivo</h4>
              <p>Graphic Designer</p>

              <h4>Naisys Technologies</h4>
              <p>Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>

      <h1>
        <hr />
        Experiences
      </h1>
    </section>
  );
}

export default Experience;
