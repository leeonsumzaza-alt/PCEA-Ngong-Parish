import "./Leadership.css";
import { Link } from "react-router-dom";
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
     ACTIVE ELDERS
  =========================== */

  const elders = [
    { id: 1, name: "Elder Name", role: "Parish Elder" },
    { id: 2, name: "Elder Name", role: "Parish Elder" },
    { id: 3, name: "Elder Name", role: "Parish Elder" },
    { id: 4, name: "Elder Name", role: "Parish Elder" },
    { id: 5, name: "Elder Name", role: "Parish Elder" },
    { id: 6, name: "Elder Name", role: "Parish Elder" },
    { id: 7, name: "Elder Name", role: "Parish Elder" },
    { id: 8, name: "Elder Name", role: "Parish Elder" },
    { id: 9, name: "Elder Name", role: "Parish Elder" },
    { id: 10, name: "Elder Name", role: "Parish Elder" },
    { id: 11, name: "Elder Name", role: "Parish Elder" },
    { id: 12, name: "Elder Name", role: "Parish Elder" },
    { id: 13, name: "Elder Name", role: "Parish Elder" },
    { id: 14, name: "Elder Name", role: "Parish Elder" },
    { id: 15, name: "Elder Name", role: "Parish Elder" },
    { id: 16, name: "Elder Name", role: "Parish Elder" },
    { id: 17, name: "Elder Name", role: "Parish Elder" },
    { id: 18, name: "Elder Name", role: "Parish Elder" },
    { id: 19, name: "Elder Name", role: "Parish Elder" },
    { id: 20, name: "Elder Name", role: "Parish Elder" },
  ];

  /* ===========================
     RETIRED ELDERS
  =========================== */

  const retiredElders = [
    { id: 1, name: "Retired Elder Name" },
    { id: 2, name: "Retired Elder Name" },
    { id: 3, name: "Retired Elder Name" },
    { id: 4, name: "Retired Elder Name" },
    { id: 5, name: "Retired Elder Name" },
    { id: 6, name: "Retired Elder Name" },
    { id: 7, name: "Retired Elder Name" },
    { id: 8, name: "Retired Elder Name" },
    { id: 9, name: "Retired Elder Name" },
    { id: 10, name: "Retired Elder Name" },
  ];

  /* ===========================
     PASTORAL TEAM
  =========================== */

  const pastoralTeam = [
    {
      id: 1,
      name: "Pastoral Team Member",
      role: "Pastoral Team",
    },
    {
      id: 2,
      name: "Pastoral Team Member",
      role: "Pastoral Team",
    },
    {
      id: 3,
      name: "Pastoral Team Member",
      role: "Pastoral Team",
    },
    {
      id: 4,
      name: "Pastoral Team Member",
      role: "Pastoral Team",
    },
    {
      id: 5,
      name: "Pastoral Team Member",
      role: "Pastoral Team",
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

              <div className="col-lg-5">

                <div className="minister-image-wrapper">

                  <div className="minister-image-bg"></div>

                  <img
                    src={parishMinister.image}
                    alt={parishMinister.name}
                    className="minister-image"
                  />

                  <Link
                    to="/ministers-corner"
                    className="parish-minister-btn"
                  >
                    <FaUserTie />
                    <span>Minister's Corner</span>
                  </Link>

                </div>

              </div>

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
          KIRK SESSION / ACTIVE ELDERS
      ===================================================== */}

      <section className="leaders-section elders-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              KIRK SESSION
            </span>

            <h2>
              Meet Our Elders
            </h2>

            <p className="elders-intro">
              The Kirk Session works alongside the Parish Minister
              in providing spiritual oversight, pastoral care,
              discipleship and leadership within the congregation.
            </p>

          </div>

          <div className="row g-4">

            {(showAllElders
              ? elders
              : elders.slice(0, 8)
            ).map((elder) => (

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={elder.id}
              >

                <div className="elder-card">

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

          {elders.length > 5 && (

            <div className="text-center mt-5">

              <button
                className="elders-btn"
                onClick={() =>
                  setShowAllElders(!showAllElders)
                }
              >

                {showAllElders
                  ? "Show Less"
                  : "Read More"
                }

              </button>

            </div>

          )}

        </div>

      </section>

      {/* =====================================================
          RETIRED ELDERS
      ===================================================== */}

      <section className="retired-elders-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              HONOURING SERVICE
            </span>

            <h2>
              Retired Elders
            </h2>

            <p className="section-subtitle">
              We honour the faithful service and dedication of
              elders who have served the church and congregation
              throughout the years.
            </p>

          </div>

          <div className="retired-elders-grid">

            {retiredElders.map((elder) => (

              <div
                className="retired-elder-card"
                key={elder.id}
              >

                <div className="retired-elder-icon">
                  <FaUserTie />
                </div>

                <div>
                  <h3>
                    {elder.name}
                  </h3>

                  <span>
                    Retired Elder
                  </span>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          PASTORAL TEAM
      ===================================================== */}

      <section className="pastoral-team-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PASTORAL CARE
            </span>

            <h2>
              Pastoral Team
            </h2>

            <p className="section-subtitle">
              Our pastoral team supports the spiritual,
              pastoral and congregational life of PCEA Ngong
              Parish.
            </p>

          </div>

          <div className="row g-4 justify-content-center">

            {pastoralTeam.map((member) => (

              <div
                className="col-xl-4 col-lg-4 col-md-6"
                key={member.id}
              >

                <div className="pastoral-card">

                  <div className="pastoral-image">
                    <FaPrayingHands />
                  </div>

                  <div className="pastoral-content">

                    <span>
                      {member.role}
                    </span>

                    <h3>
                      {member.name}
                    </h3>

                    <div className="pastoral-line"></div>

                  </div>

                </div>

              </div>

            ))}

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