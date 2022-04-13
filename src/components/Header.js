import React from "react";
import './Header.css'
function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">Xpesnser</div>
        <div className="header-button">
          <a
            href="https://github.com/Rawat11Uk01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original"></i>star
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
