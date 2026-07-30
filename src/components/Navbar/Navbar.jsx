import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        <Link to="/" className="logo">

          <img src="/logo.png" alt="PCEA Logo" />

          <div className="logo-text">
            <h3>PCEA Ngong Parish</h3>
            <span>Ngong Town Congregation</span>
          </div>

        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

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

          <li>
    <NavLink to="/calendar">
        Calendar
    </NavLink>
</li>

<li>
    <NavLink to="/news">
        News
    </NavLink>
</li>




          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;