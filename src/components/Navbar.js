import React, { useState } from "react";
import { BiLabel } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FaProjectDiagram, FaChartBar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { RiContactsBookFill } from "react-icons/ri";
import { CgMenu, CgClose } from "react-icons/cg";
import "../css/Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar">
      <ul className={menu ? "open" : "close"} onClick={() => setMenu(!menu)}>
        <li className="nav-active">
          <a href="#aboutMe">
            <BiLabel />
            About Me
          </a>
        </li>
        <li>
          <a href="#skills">
            <FiSettings />
            Skills
          </a>
        </li>
        <li>
          <a href="#projects">
            <FaProjectDiagram />
            Projects
          </a>
        </li>
        <li>
          <a href="#experiences">
            <FaChartBar />
            Experiences
          </a>
        </li>
        <li>
          <a href="#interests">
            <FcLike />
            Interests/Achievements
          </a>
        </li>
        <li>
          <a href="#contact">
            <RiContactsBookFill />
            Contact Me
          </a>
        </li>
        <li className="resume">
          <a href="/Resume-2021.pdf" target="_blank" rel="noreferrer">
            RESUME
          </a>
        </li>
      </ul>

      {menu ? (
        <CgClose className="menu" onClick={() => setMenu(!menu)} />
      ) : (
        <CgMenu className="menu" onClick={() => setMenu(!menu)} />
      )}
    </div>
  );
}

export default Navbar;
