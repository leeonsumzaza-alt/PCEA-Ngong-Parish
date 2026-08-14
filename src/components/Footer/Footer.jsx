import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/* ================= FOOTER CTA ================= */}

      <section className="footer-cta">

        <div className="container">

          <div className="footer-cta-content">

            <div>

              <span className="section-tag">
                JOIN OUR CHURCH FAMILY
              </span>

              <h2>
                We'd Love to Worship With You
              </h2>

              <p>
                Whether you are visiting for the first time or searching
                for a church home, you are warmly welcome to join us for
                worship, fellowship and spiritual growth.
              </p>

            </div>

            <Link
              to="/contact"
              className="footer-cta-btn"
            >
              Plan Your Visit
            </Link>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="container">

          <div className="row gy-5">

            {/* Church Info */}

            <div className="col-lg-4">

              <h3>PCEA Ngong Parish</h3>

              <div className="footer-line"></div>

              <p>
                A Christ-centred church committed to knowing Christ and
                making Him known through worship, discipleship,
                fellowship and compassionate service to the community.
              </p>

              <div className="social-icons">

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

            <div className="col-lg-2">

              <h4>Quick Links</h4>

              <div className="footer-line small"></div>

              <ul>

                <li><Link to="/">Home</Link></li>

                <li><Link to="/about">About Us</Link></li>

                <li><Link to="/leadership">Leadership</Link></li>

                <li><Link to="/ministries">Ministries</Link></li>

                <li><Link to="/sermons">Sermons</Link></li>

                <li><Link to="/gallery">Gallery</Link></li>

                <li><Link to="/contact">Contact</Link></li>

              </ul>

            </div>

            {/* Service Times */}

            <div className="col-lg-3">

              <h4>Service Times</h4>

              <div className="footer-line small"></div>

              <div className="footer-contact">

                <p>
                  <FaClock />
                  Sunday Worship
                </p>

                <span>First Service — 8:30 AM</span>

                <span>Second Service — 10:30 AM</span>

                <span>Wednesday Fellowship — 5:00 PM</span>

              </div>

            </div>

            {/* Contact */}

            <div className="col-lg-3">

              <h4>Contact Us</h4>

              <div className="footer-line small"></div>

              <div className="footer-contact">

                <p>
                  <FaMapMarkerAlt />
                  Ngong Town, Kajiado County
                </p>

                <p>
                  <FaPhone />
                  +254 774 432 233
                </p>

                <p>
                  <FaEnvelope />
                  info@pceangongparish.org
                </p>

              </div>

            </div>

          </div>

          <hr />

          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} PCEA Ngong Parish.
              All Rights Reserved.
            </p>

            <p>
              Designed & Developed by PCEA Ngong Parish
            </p>

          </div>

        </div>

        <button
          className="back-to-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>

      </footer>
    </>
  );
}

export default Footer;