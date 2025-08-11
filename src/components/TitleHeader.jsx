import React from "react";
import { IconButton } from "rsuite";
import { Menu } from '@rsuite/icons';
import "rsuite/dist/rsuite.min.css";

export default function TitleHeader() {

    const ButtonStyle = { margin: "0px 10px" };

    return (
      <div className="title-header">
          <IconButton
              icon={<Menu />}
              appearance="link"
              style={ButtonStyle}
          />
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
