import "./TopBar.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-container">

        <div className="topbar-left">

          <span>
            <FaMapMarkerAlt />
            Ngong Town, Kajiado County
          </span>

          <span>
            <FaPhoneAlt />
            +254 700 000 000
          </span>

          <span>
            <FaEnvelope />
            info@pceangong.org
          </span>

        </div>

        <div className="topbar-right">

          <a
            href="https://www.facebook.com/PCEAEnchorroEmuny/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/pcea_ngong_parish_youth/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@PCEANGONGPARISH"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

        </div>

      </div>
    </div>
  );
}

export default TopBar;