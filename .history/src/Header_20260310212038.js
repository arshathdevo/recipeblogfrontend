import React, { useState } from "react";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="logo">🍳 FlavorStack</div>

      {/* Hamburger Icon */}
      <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}
      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="/">Home</a>
        <a href="#add">Add Recipe</a>
        <a 
          href="https://github.com/arshathdevo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </nav>

    </header>
  );
}

export default Header;
