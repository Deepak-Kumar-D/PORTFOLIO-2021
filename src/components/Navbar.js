import React, { useEffect, useState } from "react";
import { BiLabel } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { FaProjectDiagram, FaChartBar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { RiContactsBookFill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import "../css/Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const currentLocation = window.location.href;
    const menuItem = document.querySelectorAll("a");
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
      if (menuItem[i].href === currentLocation) {
        menuItem.className = "nav-active";
      }
    }
  }, []);
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
      </ul>

      <CgMenuRight className="menu" onClick={() => setMenu(!menu)} />
    </div>
  );
}

export default Navbar;
