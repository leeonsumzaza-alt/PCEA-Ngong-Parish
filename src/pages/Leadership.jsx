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
import youthcoordinator from "../assets/images/Leaders/youthcoordinator.jpg";

import elder18 from "../assets/images/Leaders/elder18.jpg";
import elder13 from "../assets/images/Leaders/elder13.jpg";

function Leadership() {
  const [showAllElders, setShowAllElders] = useState(false);

  // =====================================================
  // PARISH MINISTER
  // =====================================================

  const parishMinister = {
    name: "Rev. Dr Josephine Mutuota",
    role: "Parish Minister",
    image: parishminister,
    description:
      "The Parish Minister provides spiritual leadership, pastoral care, biblical teaching and overall guidance for the ministries of PCEA Ngong Parish.",
  };

  // =====================================================
  // ACTIVE ELDERS
  // =====================================================

  const elders = [
    {
      id: 1,
      name: "Margaret Gitahi",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 2,
      name: "Jack Ndungu",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 3,
      name: "Gerishon Gikonyo",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 4,
      name: "Stephen Munyiri",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 5,
      name: "Elizabeth Gathogo",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 6,
      name: "Njung'e Ndugire",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 7,
      name: "Paul Mburu",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 8,
      name: "Mary Mugo",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 9,
      name: "Alice Warugongo",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 10,
      name: "Salaash Lewett",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 11,
      name: "Florence Theuri",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 12,
      name: "Edward Kagwe Giturwa",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 13,
      name: "Antony Nganga",
      role: "Parish Elder",
      image: elder13,
    },
    {
      id: 14,
      name: "Virginia Macharia",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 15,
      name: "Martin Tiampati",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 16,
      name: "John Kiarie Mwihandi",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 17,
      name: "Antony Nyamu Mahinge",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 18,
      name: "Peter Kanyara",
      role: "Parish Elder",
      image: elder18,
    },
    {
      id: 19,
      name: "Roseline Gathage",
      role: "Parish Elder",
      image: null,
    },
    {
      id: 20,
      name: "Catherine Mutembei",
      role: "Parish Elder",
      image: null,
    },
  ];

  // =====================================================
  // RETIRED ELDERS
  // =====================================================

  const retiredElders = [
    {
      id: 1,
      name: "Alice Gichane",
    },
    {
      id: 2,
      name: "Geoffrey Kaminja",
    },
    {
      id: 3,
      name: "Freshia Kungu",
    },
    {
      id: 4,
      name: "Hellen Maina",
    },
    {
      id: 5,
      name: "Hellen Kasuku",
    },
    {
      id: 6,
      name: "Prof Ephantus Kabiru Wanjohi",
    },
    {
      id: 7,
      name: "Dr Daniel Manguriu",
    },
    {
      id: 8,
      name: "Joel Nderitu",
    },
    {
      id: 9,
      name: "Joseph Pertet",
    },
    {
      id: 10,
      name: "Harun Gatuguta",
    },
  ];

  // =====================================================
  // PASTORAL TEAM
  // =====================================================

  const pastoralTeam = [
    {
      id: 1,
      name: "Rev. Dr Josephine Mutuota",
      role: "Parish Minister",
      image: parishminister,
      photoClass: "minister-photo-box",
    },
    {
      id: 2,
      name: "Ev. John Waweru",
      role: "Parish Evangelist",
      image: null,
      photoClass: "default-photo-box",
    },
    {
      id: 3,
      name: "John Kinoti",
      role: "Youth Coordinator",
      image: youthcoordinator,
      photoClass: "youth-photo-box",
    },
    {
      id: 4,
      name: "Pastoral Team Member",
      role: "Church School Superintendent",
      image: null,
      photoClass: "default-photo-box",
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

              <h4>
                Servant Leadership
              </h4>

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

              <h4>
                Christ-Centred Ministry
              </h4>

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

              <h4>
                Prayerful Service
              </h4>

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

                    <span>
                      Minister's Corner
                    </span>
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

                  {/* =========================================
                      ELDER PHOTO
                  ========================================= */}

                  <div className="elder-image">

                    {elder.image ? (

                      <img
                        src={elder.image}
                        alt={elder.name}
                        className="elder-photo"
                      />

                    ) : (

                      <div className="elder-placeholder">

                        <FaUsers />

                      </div>

                    )}

                  </div>


                  {/* =========================================
                      ELDER INFORMATION
                  ========================================= */}

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


          {/* =========================================
              SHOW MORE
          ========================================= */}

          {elders.length > 8 && (

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

      <section className="leaders-section pastoral-team-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PASTORAL CARE
            </span>

            <h2>
              Pastoral Team
            </h2>

            <p className="elders-intro">
              Our pastoral team supports the spiritual, pastoral
              and congregational life of PCEA Ngong Parish.
            </p>

          </div>


          <div className="row g-4">

            {pastoralTeam.map((member) => (

              <div
                className="col-xl-3 col-lg-4 col-md-6"
                key={member.id}
              >

                <div className="elder-card pastoral-card">

                  {/* =========================================
                      PASTORAL TEAM PHOTO
                  ========================================= */}

                  <div
                    className={`elder-image pastoral-photo-box ${member.photoClass}`}
                  >

                    {member.image ? (

                      <img
                        src={member.image}
                        alt={member.name}
                        className="pastoral-member-image"
                      />

                    ) : (

                      <div className="pastoral-placeholder">

                        <FaPrayingHands />

                      </div>

                    )}

                  </div>


                  {/* =========================================
                      MEMBER INFORMATION
                  ========================================= */}

                  <div className="elder-content">

                    <span className="elder-role">
                      {member.role}
                    </span>

                    <h3>
                      {member.name}
                    </h3>

                    <div className="elder-line"></div>

                    <p>
                      Pastoral Team
                    </p>

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