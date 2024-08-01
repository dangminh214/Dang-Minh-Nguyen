import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../../contents";
import Themetoggle from "../themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button  nav_ac" onClick={handleToggle}>
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <Link onClick={handleToggle} to="/" className="my-3">
                      Home
                    </Link>
                  </li>

                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/workexperiences"
                      className="my-3"
                    >
                      {" "}
                      Work Experiences
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link
                      onClick={handleToggle}
                      to="/projects"
                      className="my-3"
                    >
                      {" "}
                      My Projects
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/skills" className="my-3">
                      {" "}
                      My Skills
                    </Link>
                  </li>
                  <li className="menu_item">
                    <Link onClick={handleToggle} to="/about" className="my-3">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.linkedin}>Linkedin</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.kaggle}>Kaggle</a>
              <a href={socialprofils.email}>E - Mail</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headermain;
