import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);

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

            {/* Departments Dropdown */}

<li className="dropdown">

  <button
    type="button"
    className="dropdown-title"
    onClick={() => setDepartmentsOpen(!departmentsOpen)}
  >
    Departments
    <span className="arrow">
      {departmentsOpen ? "▲" : "▼"}
    </span>
  </button>

  <div
  className={
    departmentsOpen
      ? "mega-menu show"
      : "mega-menu"
  }
>

  {/* Spiritual Life */}

  <div className="mega-column">

    <h4>Spiritual Life</h4>

    <NavLink
      to="/church-school"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Church School
    </NavLink>

    <NavLink
      to="/youth"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Youth Department
    </NavLink>

    <NavLink
      to="/mens-ministry"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      PCMF (Presbyterian Church Men's Fellowship)
    </NavLink>

    <NavLink
      to="/womans-guild"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Woman's Guild
    </NavLink>

    <NavLink
      to="/brigade"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Brigade Department
    </NavLink>

    <NavLink
      to="/choir-ministry"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Worship & Music
    </NavLink>

    <NavLink
      to="/evangelism"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Evangelism Department
    </NavLink>

  </div>

  {/* Administration */}

  <div className="mega-column">

    <h4>Administration</h4>

    <NavLink
      to="/christian-education"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Christian Education
    </NavLink>

   

    <NavLink
      to="/ict-media"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      ICT & Media
    </NavLink>

    <NavLink
      to="/jprc"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      JPRC (Justice, Peace, Reconciliation, and Creation)
    </NavLink>

  </div>

  {/* Community & Service */}

  <div className="mega-column">

    <h4>Community & Service</h4>

    <NavLink
      to="/health"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Health Department
    </NavLink>

    <NavLink
      to="/sports"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Sports Department
    </NavLink>

    <NavLink
      to="/csr"
      onClick={() => {
        closeMenu();
        setDepartmentsOpen(false);
      }}
    >
      Community Service (CSR)
    </NavLink>

  </div>

</div>
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

        </div>

      </div>
    </nav>
  );
}

export default Navbar;