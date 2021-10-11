import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiJavascript,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeindesign,
  SiMicrosoftpowerpoint,
} from "react-icons/si";
import "../css/Skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="programs">
          <div className="logo-img">
            <DiMongodb />
          </div>

          <p>MongoDB</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <SiExpress />
          </div>

          <p>Express JS</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <FaReact />
          </div>
          <p>React JS</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <FaNodeJs />
          </div>

          <p>Node JS</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <SiJavascript />
          </div>
          <p>Javascript</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <FaHtml5 />
          </div>
          <p>HTML5</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <FaCss3Alt />
          </div>
          <p>CSS3</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <SiAdobephotoshop />
          </div>
          <p>Adobe Photoshop</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <SiAdobeillustrator />
          </div>
          <p>Adobe Illustrator</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <SiAdobepremierepro />
          </div>
          <p>Adobe Premiere Pro</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <SiAdobeaftereffects />
          </div>
          <p>Adobe After Effects</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <SiAdobeindesign />
          </div>
          <p>Adobe InDesign</p>
        </div>

        <div className="programs">
          <div className="logo-img">
            <SiMicrosoftpowerpoint />
          </div>
          <p>Microsoft Powerpoint</p>
        </div>
      </div>

      <h1>
        <hr />
        Skills
      </h1>
    </section>
  );
}

export default Skills;
