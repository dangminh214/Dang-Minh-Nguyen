import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin, FaKaggle, FaMailBulk } from "react-icons/fa";
import { socialprofils } from "../../contents";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.kaggle && (
          <li>
            <a href={socialprofils.kaggle}>
              <FaKaggle />
            </a>
          </li>
        )}

        {socialprofils.email && (
          <li>
            <a href={socialprofils.email}>
              <FaMailBulk />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
