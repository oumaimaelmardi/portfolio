import { useState } from "react";

import "./menu.css";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="pi pi-bars"></i>
      </div>
      <div className={`menu-items ${showMenu ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}

export default Menu;
