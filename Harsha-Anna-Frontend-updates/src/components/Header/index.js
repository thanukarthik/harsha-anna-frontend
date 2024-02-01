import React from "react";
import SocialMediaIcons from "../SocialMediaicons";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="profileName">
        <h1>Harsha Vardhan Simhadri</h1>
        <p className="para">
          Senoir Research Micosoft{" "}
          <span>
            <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-india/">
              Microsoft
            </a>
          </span>
        </p>
      </div>
      <div className="icons">
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default Header;
