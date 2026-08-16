import { Link } from "react-router-dom";
import {
  FaCross,
  FaHandsHelping,
  FaHeart,
  FaBible,
  FaChurch,
  FaMapMarkerAlt,
  FaUsers,
  FaPray,
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
  FaGlobeAfrica,
} from "react-icons/fa";

import "./About.css";

import historyImage from "../assets/images/About/History1.jpg";
import aboutBanner from "../assets/images/Hero/about-banner.jpg";

function About() {
  const coreValues = [
    {
      title: "Faithfulness",
      icon: <FaCross />,
      description:
        "Remaining steadfast in our commitment to God, His Word, and His calling in every aspect of life and ministry.",
    },
    {
      title: "Inclusiveness",
      icon: <FaGlobeAfrica />,
      description:
        "Welcoming and embracing all people with Christ's love, regardless of age, background, or status.",
    },
    {
      title: "Kindness",
      icon: <FaHeart />,
      description:
        "Showing compassion, generosity, and genuine care to one another and to the wider community.",
    },
    {
      title: "Love",
      icon: <FaHandshake />,
      description:
        "Demonstrating Christ's unconditional love through worship, fellowship, service, and outreach.",
    },
    {
      title: "Open-mindedness",
      icon: <FaLightbulb />,
      description:
        "Listening with humility, valuing different perspectives, and remaining teachable while staying grounded in biblical truth.",
    },
    {
      title: "Integrity",
      icon: <FaShieldAlt />,
      description:
        "Living honestly, transparently, and faithfully in a manner that honors God and builds trust.",
    },
    {
      title: "Wisdom",
      icon: <FaBible />,
      description:
        "Seeking God's guidance and applying biblical understanding in every decision and action.",
    },
  ];

  return (
    <>
      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${aboutBanner})`,
        }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <div className="about-hero-content" data-aos="fade-up">
              <span className="hero-breadcrumb">
                HOME / ABOUT US
              </span>

              <h1>
                About
                <span> PCEA Ngong Parish</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                We are a Christ-centred congregation committed to
                worship, discipleship, fellowship and serving our
                community through the transforming love of Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY / HISTORY
      ===================================================== */}

      <section className="history-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Image */}

            <div className="col-lg-6">
              <div className="history-image-wrapper">

                <div className="history-image-decoration"></div>

                <img
                  src={historyImage}
                  alt="PCEA Ngong Parish"
                  className="history-image"
                />

                <div className="history-badge">
                  <span>OUR STORY</span>
                  <h3>Faith</h3>
                  <small>Growing Together</small>
                </div>

              </div>
            </div>

            {/* Content */}

            <div className="col-lg-6">
              <div className="history-content">

                <span className="section-tag">
                  OUR STORY
                </span>

                <h2 className="history-title">
                  Walking in Faith,
                  <br />
                  Growing Together
                </h2>

                <div className="section-line"></div>

                <p>
                  PCEA Ngong Parish is a Christ-centred congregation
                  committed to the preaching of God's Word, worship,
                  discipleship, fellowship and service.
                </p>

                <p>
                  Through God's grace, the parish continues to grow
                  spiritually and numerically while nurturing believers,
                  strengthening families and reaching the wider community
                  with the Gospel of Jesus Christ.
                </p>

                <p>
                  We seek to create an environment where people of all
                  ages can worship God, grow in faith, discover their
                  gifts and serve others in love.
                </p>

                <div className="history-features">

                  <div className="history-feature">
                    <FaCross />
                    <span>Christ-Centred Worship</span>
                  </div>

                  <div className="history-feature">
                    <FaHeart />
                    <span>Loving Christian Community</span>
                  </div>

                  <div className="history-feature">
                    <FaBible />
                    <span>Biblical Teaching</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PARISH PROFILE
      ===================================================== */}

      <section className="profile-section">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PARISH PROFILE
            </span>

            <h2>
              Who We Are
            </h2>

            <p className="section-subtitle">
              A quick look at the identity and place of PCEA Ngong
              Parish within the church and wider community.
            </p>

          </div>

          <div className="profile-grid">

            <div className="profile-card">
              <div className="about-icon">
                <FaChurch />
              </div>

              <span className="profile-label">
                PARISH
              </span>

              <h4>
                PCEA Ngong Parish
              </h4>
            </div>

            <div className="profile-card">
              <div className="about-icon">
                <FaMapMarkerAlt />
              </div>

              <span className="profile-label">
                LOCATION
              </span>

              <h4>
                Ngong, Kajiado County
              </h4>
            </div>

            <div className="profile-card">
              <div className="about-icon">
                <FaUsers />
              </div>

              <span className="profile-label">
                CONGREGATION
              </span>

              <h4>
                Enchorro Emuny Congregation
              </h4>
            </div>

            <div className="profile-card">
              <div className="about-icon">
                <FaPray />
              </div>

              <span className="profile-label">
                PARISH MINISTER
              </span>

              <h4>
                Rev. Dr Josephine Mutuota
              </h4>
            </div>

            <div className="profile-card">
              <div className="about-icon">
                <FaBible />
              </div>

              <span className="profile-label">
                PRESBYTERY
              </span>

              <h4>
                Ngong Hills Presbytery
              </h4>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          VISION & MISSION
      ===================================================== */}

      <section className="vision-section">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR PURPOSE
            </span>

            <h2>
              Vision & Mission
            </h2>

            <p className="section-subtitle">
              Guided by God's Word, our vision and mission define who
              we are and inspire everything we do as a parish.
            </p>

          </div>

          <div className="row g-4 mt-4">

            {/* Vision */}

            <div className="col-lg-6">
              <div className="vision-card vision-blue">

                <div className="vision-watermark">
                  <FaCross />
                </div>

                <div className="vision-icon">
                  <FaCross />
                </div>

                <span className="vision-label">
                  OUR VISION
                </span>

                <h3>
                  Our Vision
                </h3>

                <div className="vision-divider"></div>

                <p>
                  A Model Parish That Impacts People With The Knowledge
                  Of God And His Son Jesus Christ.
                </p>

              </div>
            </div>

            {/* Mission */}

            <div className="col-lg-6">
              <div className="vision-card vision-red">

                <div className="vision-watermark">
                  <FaHandsHelping />
                </div>

                <div className="vision-icon">
                  <FaHandsHelping />
                </div>

                <span className="vision-label">
                  OUR MISSION
                </span>

                <h3>
                  Our Mission
                </h3>

                <div className="vision-divider"></div>

                <p>
                  Our Purpose Of Existence Is To Obey The Great
                  Commission And The Great Commandment.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ===================================================== */}

      <section className="values-section">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              CORE VALUES
            </span>

            <h2>
              What We Stand For
            </h2>

            <p className="section-subtitle">
              Our values shape how we worship, serve, relate to one
              another and engage with our community.
            </p>

          </div>

          <div className="values-grid">

            {coreValues.map((value, index) => (
              <div
                className="value-card-wrapper"
                key={index}
              >
                <div className="value-card">

                  <div className="value-number">
                    0{index + 1}
                  </div>

                  <div className="value-icon">
                    {value.icon}
                  </div>

                  <h4>
                    {value.title}
                  </h4>

                  <p>
                    {value.description}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="location-section">
        <div className="container">

          <div className="row g-5 align-items-center">

            {/* Information */}

            <div className="col-lg-5">

              <span className="section-tag">
                FIND US
              </span>

              <h2 className="location-title">
                Visit PCEA Ngong Parish
              </h2>

              <p className="location-text">
                We warmly welcome you to worship with us and become
                part of our growing Christian family.
              </p>

              <div className="location-info">

                <div className="location-item">

                  <div className="location-icon">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <span>
                      LOCATION
                    </span>

                    <h5>
                      Ngong Town, Kajiado County
                    </h5>
                  </div>

                </div>

                <div className="location-item">

                  <div className="location-icon">
                    <FaChurch />
                  </div>

                  <div>
                    <span>
                      WORSHIP
                    </span>

                    <h5>
                      Sunday Worship Services
                    </h5>
                  </div>

                </div>

              </div>

              <Link
                to="/contact"
                className="welcome-btn"
              >
                Plan Your Visit
              </Link>

            </div>

            {/* Map */}

            <div className="col-lg-7">

              <div className="map-wrapper">

                <iframe
                  title="PCEA Ngong Parish Location"
                  src="https://www.google.com/maps?q=Ngong,+Kenya&output=embed"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="map-card">

                  <div className="map-card-icon">
                    <FaChurch />
                  </div>

                  <div>
                    <span>
                      PCEA NGONG PARISH
                    </span>

                    <h5>
                      Ngong Town, Kajiado County
                    </h5>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default About;