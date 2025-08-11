import React from "react";
import menuIcon from "../assets/buttons/three_bar_button.png";

export default function TitleHeader() {
    return (
      <div className="title-header">
          <button className="title-btn">
              <img src={"" + menuIcon}  alt={""} className="btn-icon"/>
          </button>
          <h1 className="header-title-name">SofaTimes</h1>
          <a href="#">Log in</a>
          <div className="nav-list">
              <ul className="nav">
                  <li className="nav-item"><a href="#">Volumes</a></li>
                  <li className="nav-item"><a href="#">Games</a></li>
                  <li className="nav-item"><a href="#">About</a></li>
                  <li className="nav-item"><a href="#">Contact</a></li>
              </ul>
          </div>
      </div>
    );
}
