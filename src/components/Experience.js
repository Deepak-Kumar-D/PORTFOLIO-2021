import React, { useState } from "react";
import { BiTimer } from "react-icons/bi";
import { GiSandsOfTime } from "react-icons/gi";
import { FaBusinessTime } from "react-icons/fa";
import "../css/Experience.css";

function Experience() {
  const totalWorks = 3;
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(totalWorks - 1);
  const [next, setNext] = useState(1);

  const prevWork = () => {
    setCurrent(previous);

    if (previous - 1 === -1) {
      setPrevious(totalWorks - 1);
    } else {
      setPrevious(previous - 1);
    }

    if (next - 1 === -1) {
      setNext(totalWorks - 1);
    } else {
      setNext(next - 1);
    }
  };

  const nextWork = () => {
    setCurrent(next);

    if (previous + 1 === totalWorks) {
      setPrevious(0);
    } else {
      setPrevious(previous + 1);
    }

    if (next + 1 === totalWorks) {
      setNext(0);
    } else {
      setNext(next + 1);
    }
  };

  return (
    <section id="experiences">
      <div className="experiences-container">
        <div className="sub-experience">
          <button className="prev-btn" onClick={prevWork}>
            {"<"}
          </button>

          <div
            className={
              current === 0
                ? "works active"
                : previous === 0
                ? "works prev"
                : next === 0
                ? "works next"
                : "works"
            }
          >
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

          <div
            className={
              current === 1
                ? "works active"
                : previous === 1
                ? "works prev"
                : next === 1
                ? "works next"
                : "works"
            }
          >
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

          <div
            className={
              current === 2
                ? "works active"
                : previous === 2
                ? "works prev"
                : next === 2
                ? "works next"
                : "works"
            }
          >
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

          <button className="next-btn" onClick={nextWork}>
            {">"}
          </button>
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
