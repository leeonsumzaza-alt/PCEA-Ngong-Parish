import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  

  return (
    <nav className={scrolled ? "navbar navbar-scroll" : "navbar"}>
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="PCEA Logo" />

          <div className="logo-text">
            <h3>PCEA Ngong Parish</h3>
            <span>Ngong Town Congregation</span>
          </div>
        </Link>

        {/* Mobile Menu */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Right Side */}
        <div className="nav-right">

          <ul className={menuOpen ? "nav-links active" : "nav-links"}>

            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/leadership" onClick={closeMenu}>
                Leadership
              </NavLink>
            </li>

            <li>
              <NavLink to="/ministries" onClick={closeMenu}>
                Ministries
              </NavLink>
            </li>

            <li>
              <NavLink to="/sermons" onClick={closeMenu}>
                Sermons
              </NavLink>
            </li>

            <li>
              <NavLink to="/events" onClick={closeMenu}>
                Events
              </NavLink>
            </li>

            <li>
              <NavLink to="/gallery" onClick={closeMenu}>
                Gallery
              </NavLink>
            </li>

            {/* Resources Dropdown */}
            <li className="dropdown">

  <button
    type="button"
    className="dropdown-title"
    onClick={() => setDropdownOpen(!dropdownOpen)}
  >
    Resources
    <span className="arrow">
      {dropdownOpen ? "▲" : "▼"}
    </span>
  </button>

  <ul className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"} onClick={() => setDropdownOpen(!dropdownOpen)}>

    <li>
      <NavLink
        to="/calendar"
        onClick={() => {
          closeMenu();
          setDropdownOpen(false);
        }}
      >
        Calendar
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/news"
        onClick={() => {
          closeMenu();
          setDropdownOpen(false);
        }}
      >
        News
      </NavLink>
    </li>

  </ul>

</li>
          </ul>

          <a
            href="https://www.youtube.com/@PCEANGONGPARISH/live"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-live-btn"
          >
            🔴 Watch Live
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;