import React from "react";
import ProjectDB from "../DB/Projects";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { DiMongodb } from "react-icons/di";
import { SiJavascript, SiFirebase } from "react-icons/si";
import "../css/Project.css";

function Project() {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="list-container">
          {ProjectDB.map((projectList, index) => {
            return (
              <div className="hub" key={index}>
                <div className="project-img">
                  <div className="links">
                    <a
                      href={projectList.client}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="client" />
                      <span>Client</span>
                    </a>

                    {projectList.server ? (
                      <a
                        href={projectList.client}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="server" />
                        <span>Server</span>
                      </a>
                    ) : (
                      <></>
                    )}

                    <a href={projectList.host} target="_blank" rel="noreferrer">
                      <MdOpenInNew className="host" />
                      <span>Demo</span>
                    </a>
                  </div>
                  <img src={projectList.src} alt={projectList.alt} />
                </div>

                <p>{projectList.name}</p>

                {projectList.tools === "fullstack" ? (
                  <div className="tools">
                    <DiMongodb />
                    <span>Ex</span>
                    <FaReact />
                    <FaNodeJs />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <SiJavascript />
                  </div>
                ) : projectList.tools === "react" ? (
                  <div className="tools">
                    <FaReact />
                    <FaNodeJs />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <SiJavascript />
                  </div>
                ) : projectList.tools === "react-firebase" ? (
                  <div className="tools">
                    <FaReact />
                    <SiFirebase />
                    <FaNodeJs />
                    <FaHtml5 />
                    <FaCss3Alt />
                    <SiJavascript />
                  </div>
                ) : (
                  <div className="tools">
                    <FaHtml5 />
                    <FaCss3Alt />
                    <SiJavascript />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <h1>
        <hr />
        Projects
      </h1>
    </section>
  );
}

export default Project;
