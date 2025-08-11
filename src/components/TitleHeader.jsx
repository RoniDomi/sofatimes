import React from "react";

export default function TitleHeader() {
    return (
      <div className="title-header">
          <button className="title-btn">
              <img src={"src/assets/buttons/three_bar_button.png"}  alt={""}/>
          </button>
          <h1>SofaTimes</h1>
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
