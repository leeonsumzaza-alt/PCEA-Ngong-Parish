import "./TopBar.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
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
            +254 774 432 233, +254 790 341 651
          </span>

          <span>
            <FaEnvelope />
            info@pceangongparish.org
          </span>

        </div>

        <div className="topbar-right">

          <a
    href="https://wa.me/254774432233"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

          <a
            href="https://www.facebook.com/PCEAEnchorroEmuny/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/PCEANGONGPARISH/"
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