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

          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>

          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>

        </div>

      </div>
    </div>
  );
}

export default TopBar;