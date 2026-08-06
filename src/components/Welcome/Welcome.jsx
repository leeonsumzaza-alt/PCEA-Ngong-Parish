import { Link } from "react-router-dom";
import {
  FaBible,
  FaChurch,
  FaHandsHelping,
} from "react-icons/fa";

import "./Welcome.css";
import welcomeImage from "../../assets/images/About/Welcome1.jpg";

function Welcome() {
  return (
    <section className="welcome-section">

      <div className="container">

        <div className="row align-items-center g-5">

          {/* ================= LEFT ================= */}

          <div className="col-lg-6">

            <span className="section-tag">
              WELCOME TO PCEA NGONG PARISH
            </span>

            <h2 className="welcome-title">
              A Christ-Centred Church for
              Worship, Growth & Service
            </h2>

            <p className="welcome-text">
              PCEA Ngong Parish is a vibrant congregation committed
              to knowing Christ and making Him known. Through biblical
              teaching, heartfelt worship and Christian fellowship,
              we seek to nurture believers and reach our community
              with the love of Christ.
            </p>

            <p className="welcome-text">
              Whether you are visiting for the first time, searching
              for a church home or looking to deepen your faith,
              you are warmly welcome to worship and grow with us.
            </p>

            <Link
              to="/about"
              className="welcome-btn"
            >
              Discover More
            </Link>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="col-lg-6">

            <div className="welcome-image-wrapper">

              <div className="welcome-image-bg"></div>

              <img
                src={welcomeImage}
                alt="PCEA Ngong Parish"
                className="welcome-image"
              />

              <div className="welcome-badge">

                Worship With Us

              </div>

            </div>

          </div>

        </div>

        {/* ================= FEATURES ================= */}

        <div className="row g-4 welcome-features">

          <div className="col-lg-4">

            <div className="feature-card">

              <div className="feature-icon">

                <FaBible />

              </div>

              <h4>Biblical Teaching</h4>

              <p>
                Growing in faith through faithful teaching
                and preaching of God's Word.
              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="feature-card">

              <div className="feature-icon">

                <FaChurch />

              </div>

              <h4>Meaningful Worship</h4>

              <p>
                Join us every week for inspiring worship,
                prayer and Christian fellowship.
              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="feature-card">

              <div className="feature-icon">

                <FaHandsHelping />

              </div>

              <h4>Serve Together</h4>

              <p>
                Discover opportunities to serve Christ
                through our ministries and outreach.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Welcome;