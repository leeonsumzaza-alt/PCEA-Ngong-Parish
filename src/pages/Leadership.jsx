import "./Leadership.css";
import { useState } from "react";
import {
  FaBible,
  FaPrayingHands,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

import leadershipBanner from "../assets/images/Hero/leadership-banner.jpg";
import parishminister from "../assets/images/Leaders/parishminister.jpg";

function Leadership() {
  const [showAllElders, setShowAllElders] = useState(false);

  /* ===========================
     PARISH MINISTER
  =========================== */

  const parishMinister = {
    name: "Rev. Dr Josephine Mutuota",
    role: "Parish Minister",
    image: parishminister,
    description:
      "The Parish Minister provides spiritual leadership, pastoral care, biblical teaching and overall guidance for the ministries of PCEA Ngong Parish.",
  };

  /* ===========================
     KIRK SESSION / PARISH ELDERS
  =========================== */

  const elders = [
    {
      id: 1,
      name: "Elder Name",
      role: "Parish Elder",
    },
    {
      id: 2,
      name: "Elder Name",
      role: "Parish Elder",
    },
    {
      id: 3,
      name: "Elder Name",
      role: "Parish Elder",
    },
    {
      id: 4,
      name: "Elder Name",
      role: "Parish Elder",
    },
  ];

  return (
    <>
      {/* =====================================================
          LEADERSHIP HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${leadershipBanner})`,
        }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <div
              className="about-hero-content"
              data-aos="fade-up"
            >
              <span className="hero-breadcrumb">
                HOME / LEADERSHIP
              </span>

              <h1>
                Church
                <span> Leadership</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Serving Christ through faithful leadership,
                spiritual guidance and servant-hearted ministry
                at PCEA Ngong Parish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP INTRODUCTION
      ===================================================== */}

      <section className="leadership-intro">
        <div className="container">

          <div className="text-center">

            <span className="section-tag">
              OUR LEADERSHIP
            </span>

            <h2 className="intro-title">
              Meet the Leadership of
              <br />
              PCEA Ngong Parish
            </h2>

            <p className="intro-text">
              Our church is guided by faithful servants who are
              committed to spiritual growth, biblical teaching,
              prayer and the effective ministry of God's people.
              Together, our leadership seeks to serve Christ and
              strengthen the life of the congregation.
            </p>

          </div>

          {/* Leadership Highlights */}

          <div className="intro-grid">

            <div className="intro-card">

              <div className="intro-icon">
                <FaUserTie />
              </div>

              <h4>Servant Leadership</h4>

              <p>
                We seek to lead through humility, integrity,
                wisdom and a genuine commitment to serving
                God's people.
              </p>

            </div>

            <div className="intro-card">

              <div className="intro-icon">
                <FaBible />
              </div>

              <h4>Christ-Centred Ministry</h4>

              <p>
                Our leadership is grounded in Scripture and
                committed to keeping Christ at the centre of
                everything we do.
              </p>

            </div>

            <div className="intro-card">

              <div className="intro-icon">
                <FaPrayingHands />
              </div>

              <h4>Prayerful Service</h4>

              <p>
                We depend on prayer and God's guidance as we
                shepherd the congregation and serve the
                surrounding community.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PARISH MINISTER
      ===================================================== */}

      <section className="minister-section">

        <div className="container">

          <div className="minister-wrapper">

            <div className="row align-items-center g-5">

              {/* Minister Image */}

              <div className="col-lg-5">

                <div className="minister-image-wrapper">

                  <div className="minister-image-bg"></div>

                  <img
                    src={parishMinister.image}
                    alt={parishMinister.name}
                    className="minister-image"
                  />

                  <div className="minister-badge">
                    Parish Minister
                  </div>

                </div>

              </div>

              {/* Minister Information */}

              <div className="col-lg-7">

                <span className="section-tag">
                  SPIRITUAL LEADERSHIP
                </span>

                <h2 className="minister-name">
                  {parishMinister.name}
                </h2>

                <h5 className="minister-role">
                  {parishMinister.role}
                </h5>

                <p className="minister-description">
                  {parishMinister.description}
                </p>

                <blockquote className="minister-quote">
                  "Shepherd the flock of God that is among you,
                  exercising oversight willingly and eagerly."

                  <span>
                    — 1 Peter 5:2
                  </span>
                </blockquote>

                {/* Minister Highlights */}

                <div className="minister-highlights">

                  <div className="highlight-card">

                    <FaBible />

                    <h5>
                      Biblical Teaching
                    </h5>

                  </div>

                  <div className="highlight-card">

                    <FaPrayingHands />

                    <h5>
                      Prayer
                    </h5>

                  </div>

                  <div className="highlight-card">

                    <FaUserTie />

                    <h5>
                      Servant Leadership
                    </h5>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          KIRK SESSION / PARISH ELDERS
      ===================================================== */}

      <section className="leaders-section elders-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              KIRK SESSION
            </span>

            <h2>
              Meet Our Parish Elders
            </h2>

            <p className="elders-intro">
              The Kirk Session works alongside the Parish Minister
              in providing spiritual oversight, pastoral care,
              discipleship and leadership within the congregation.
            </p>

          </div>

          {/* Elders */}

          <div className="row g-4">

            {(showAllElders
              ? elders
              : elders.slice(0, 4)
            ).map((elder) => (

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={elder.id}
              >

                <div className="elder-card">

                  {/* Placeholder until elder photos are added */}

                  <div className="elder-image elder-placeholder">

                    <FaUsers />

                  </div>

                  <div className="elder-content">

                    <span className="elder-role">
                      {elder.role}
                    </span>

                    <h3>
                      {elder.name}
                    </h3>

                    <div className="elder-line"></div>

                    <p>
                      Kirk Session
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* View More Button */}

          {elders.length > 4 && (

            <div className="text-center mt-5">

              <button
                className="elders-btn"
                onClick={() =>
                  setShowAllElders(!showAllElders)
                }
              >

                {showAllElders
                  ? "Show Less"
                  : `View All ${elders.length} Elders`
                }

              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          LEADERSHIP PRINCIPLES
      ===================================================== */}

      <section className="principles-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR COMMITMENT
            </span>

            <h2>
              Leadership Principles
            </h2>

            <p className="section-subtitle">
              Our leadership seeks to reflect Christ through
              faithful teaching, prayer and servant-hearted
              ministry.
            </p>

          </div>

          <div className="row g-4">

            {/* Biblical Teaching */}

            <div className="col-md-4">

              <div className="principle-card">

                <FaBible className="leader-icon" />

                <h3>
                  Biblical Teaching
                </h3>

                <p>
                  We faithfully preach and teach the Word of
                  God as the foundation of our faith, worship
                  and ministry.
                </p>

              </div>

            </div>

            {/* Prayer */}

            <div className="col-md-4">

              <div className="principle-card">

                <FaPrayingHands className="leader-icon" />

                <h3>
                  Prayer
                </h3>

                <p>
                  We seek God's wisdom and direction through
                  prayer, trusting Him in every decision and
                  area of ministry.
                </p>

              </div>

            </div>

            {/* Servant Leadership */}

            <div className="col-md-4">

              <div className="principle-card">

                <FaUserTie className="leader-icon" />

                <h3>
                  Servant Leadership
                </h3>

                <p>
                  We seek to serve Christ, His Church and our
                  community with humility, compassion,
                  integrity and love.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CLOSING MESSAGE
      ===================================================== */}

      <section className="leader-message">

        <div className="container text-center">

          <span className="section-tag">
            SERVING TOGETHER
          </span>

          <h2>
            Serving Together for God's Glory
          </h2>

          <p>
            Our leadership is committed to shepherding God's
            people with faith, integrity and compassion. We
            warmly welcome you to worship, grow and serve
            alongside us at PCEA Ngong Parish.
          </p>

        </div>

      </section>
    </>
  );
}

export default Leadership;