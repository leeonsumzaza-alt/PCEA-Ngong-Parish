import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [districtsOpen, setDistrictsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

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

            {/* Home */}
            <li>
              <NavLink to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>

            {/* About Us Dropdown */}
            <li className="dropdown">

              <button
                type="button"
                className="dropdown-title"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                About Us
                <span className="arrow">
                  {aboutOpen ? "▲" : "▼"}
                </span>
              </button>

              <ul
                className={
                  aboutOpen
                    ? "dropdown-menu show"
                    : "dropdown-menu"
                }
              >

                <li>
                  <NavLink
                    to="/about"
                    onClick={() => {
                      closeMenu();
                      setAboutOpen(false);
                    }}
                  >
                    About Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/leadership"
                    onClick={() => {
                      closeMenu();
                      setAboutOpen(false);
                    }}
                  >
                    Leadership
                  </NavLink>
                </li>

              </ul>

            </li>

            {/* Ministries Dropdown */}
            <li className="dropdown">

              <button
                type="button"
                className="dropdown-title"
                onClick={() => setDepartmentsOpen(!departmentsOpen)}
              >
                Ministries
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
                    Church School Ministry
                  </NavLink>

                  <NavLink
                    to="/youth"
                    onClick={() => {
                      closeMenu();
                      setDepartmentsOpen(false);
                    }}
                  >
                    Youth Ministry
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
                    Brigade Ministry
                  </NavLink>

                  <NavLink
                    to="/choir-ministry"
                    onClick={() => {
                      closeMenu();
                      setDepartmentsOpen(false);
                    }}
                  >
                    Worship & Music Ministry
                  </NavLink>

                  <NavLink
                    to="/evangelism"
                    onClick={() => {
                      closeMenu();
                      setDepartmentsOpen(false);
                    }}
                  >
                    Evangelism Ministry
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
                    Christian Education Board
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
                    Health Board
                  </NavLink>

                  <NavLink
                    to="/sports"
                    onClick={() => {
                      closeMenu();
                      setDepartmentsOpen(false);
                    }}
                  >
                    Sports Board
                  </NavLink>

                  <NavLink
                    to="/development"
                    onClick={() => {
                      closeMenu();
                      setDepartmentsOpen(false);
                    }}
                  >
                    Development Committee
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

            {/* Districts Dropdown */}
            <li className="dropdown">

              <button
                type="button"
                className="dropdown-title"
                onClick={() => setDistrictsOpen(!districtsOpen)}
              >
                Districts
                <span className="arrow">
                  {districtsOpen ? "▲" : "▼"}
                </span>
              </button>

              <div
                className={
                  districtsOpen
                    ? "district-menu show"
                    : "district-menu"
                }
              >

                <div className="district-column">

                  <h4>PCEA Districts</h4>

                  <NavLink
                    to="/districts/district1"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 1
                  </NavLink>

                  <NavLink
                    to="/districts/district2"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 2
                  </NavLink>

                  <NavLink
                    to="/districts/district3"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 3
                  </NavLink>

                  <NavLink
                    to="/districts/district4"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 4
                  </NavLink>

                  <NavLink
                    to="/districts/district5"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 5
                  </NavLink>

                  <NavLink
                    to="/districts/district6"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 6
                  </NavLink>

                  <NavLink
                    to="/districts/district7"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 7
                  </NavLink>

                </div>

                <div className="district-column">

                  <h4>Districts</h4>

                  <NavLink
                    to="/districts/district8"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 8
                  </NavLink>

                  <NavLink
                    to="/districts/district9"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 9
                  </NavLink>

                  <NavLink
                    to="/districts/district10"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 10
                  </NavLink>

                  <NavLink
                    to="/districts/district11"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 11
                  </NavLink>

                  <NavLink
                    to="/districts/district12"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 12
                  </NavLink>

                  <NavLink
                    to="/districts/district13"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 13
                  </NavLink>

                  <NavLink
                    to="/districts/district14"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 14
                  </NavLink>

                </div>

                <div className="district-column">

                  <h4>Districts</h4>

                  <NavLink
                    to="/districts/district15"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 15
                  </NavLink>

                  <NavLink
                    to="/districts/district16"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 16
                  </NavLink>

                  <NavLink
                    to="/districts/district17"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 17
                  </NavLink>

                  <NavLink
                    to="/districts/district18"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 18
                  </NavLink>

                  <NavLink
                    to="/districts/district19"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 19
                  </NavLink>

                  <NavLink
                    to="/districts/district20"
                    onClick={() => {
                      closeMenu();
                      setDistrictsOpen(false);
                    }}
                  >
                    District 20
                  </NavLink>

                </div>

              </div>
            </li>

            {/* Resources Dropdown */}
            <li className="dropdown">

              <button
                type="button"
                className="dropdown-title"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources
                <span className="arrow">
                  {resourcesOpen ? "▲" : "▼"}
                </span>
              </button>

              <ul
                className={
                  resourcesOpen
                    ? "dropdown-menu show"
                    : "dropdown-menu"
                }
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >

                <li>
                  <NavLink
                    to="/calendar"
                    onClick={() => {
                      closeMenu();
                      setResourcesOpen(false);
                    }}
                  >
                    Calendar
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/gallery"
                    onClick={() => {
                      closeMenu();
                      setResourcesOpen(false);
                    }}
                  >
                    Gallery
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/sermons"
                    onClick={() => {
                      closeMenu();
                      setResourcesOpen(false);
                    }}
                  >
                    Sermons
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/events"
                    onClick={() => {
                      closeMenu();
                      setResourcesOpen(false);
                    }}
                  >
                    Events
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/news"
                    onClick={() => {
                      closeMenu();
                      setResourcesOpen(false);
                    }}
                  >
                    News & Intimations
                  </NavLink>
                </li>

              </ul>
            </li>

            {/* Contact */}
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact us
              </NavLink>
            </li>

            <li>
              <NavLink to="/prayer-request" onClick={closeMenu}>
                Prayer Request
              </NavLink>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;