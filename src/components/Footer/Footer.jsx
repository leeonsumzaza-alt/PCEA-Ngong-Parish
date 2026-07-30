import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="container">
        <div className="row gy-5">

          {/* Church Info */}
          <div className="col-lg-4">
            <h3>PCEA Ngong Parish</h3>

            <p>
              A Christ-centred church committed to knowing Christ and making Him
              known through worship, discipleship, fellowship and community
              outreach.
            </p>

            <div className="social-icons">
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

          {/* Quick Links */}
          <div className="col-lg-3">
            <h4>Quick Links</h4>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/ministries">Ministries</Link></li>
              <li><Link to="/sermons">Sermons</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div className="col-lg-2">
            <h4>Service Times</h4>

            <p><FaClock /> Sunday</p>
            <p>First Service - 8:00 AM</p>
            <p>Second Service - 10:30 AM</p>
            <p>Wednesday Fellowship - 5:30 PM</p>
          </div>

          {/* Contact */}
          <div className="col-lg-3">
            <h4>Contact Us</h4>

            <p>
              <FaMapMarkerAlt /> Ngong Town, Kajiado County
            </p>

            <p>
              <FaPhone /> +254 XXX XXX XXX
            </p>

            <p>
              <FaEnvelope /> info@pceangong.org
            </p>
          </div>

        </div>

        <hr />

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} PCEA Ngong Parish. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by PCEA Ngong Parish
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;