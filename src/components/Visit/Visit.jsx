import { Link } from "react-router-dom";
import "./Visit.css";

function Visit() {
  return (
    <section className="visit-section">

      <div className="container">

        <div className="visit-grid">

          {/* Left Side */}

          <div className="visit-content">

            <span className="section-tag">
              PLAN YOUR VISIT
            </span>

            <h2>
              We'd Love to Welcome You
            </h2>

            <p>
              Whether you're visiting for the first time or looking for a
              church family, you'll always find a warm welcome at
              <strong> PCEA Ngong Parish.</strong>
            </p>

            <div className="visit-info">

              <div className="info-card">
                <h4>📍 Location</h4>
                <p>Ngong Town, Kajiado County</p>
              </div>

              <div className="info-card">
                <h4>⛪ Sunday Worship</h4>
                <p>8:30 AM & 10:30 AM</p>
              </div>

            </div>

            <Link to="/contact" className="visit-btn">
              Get Directions →
            </Link>

          </div>

          {/* Right Side */}

          <div className="visit-map">
  <iframe
    title="PCEA Enchorro Emuny Church"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.699515133887!2d36.65268659591676!3d-1.3569019267331432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0321616ea38d%3A0xdf51067094560e5e!2sPCEA%20Enchorro%20Emuny%20Church!5e0!3m2!1sen!2ske!4v1787211111974!5m2!1sen!2ske"
    loading="lazy"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

        </div>

      </div>

    </section>
  );
}

export default Visit;