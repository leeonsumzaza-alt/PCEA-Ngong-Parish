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
              title="PCEA Ngong Parish"
              src="https://www.google.com/maps?q=Ngong+Town,+Kajiado,+Kenya&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Visit;