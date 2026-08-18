import "./ICTMedia.css";

import {
  FaCamera,
  FaVideo,
  FaLaptop,
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
  FaChurch,
  FaBullhorn,
  FaMobileAlt,
  FaPhotoVideo,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import mediaBanner from "../assets/images/Hero/media-banner.jpg";

function ICTMedia() {
  const services = [
    {
      icon: <FaCamera />,
      title: "Photography",
      text:
        "Capturing church services, events, celebrations and special moments through quality photography.",
    },
    {
      icon: <FaVideo />,
      title: "Videography",
      text:
        "Recording and producing videos that document church activities and communicate the work of the ministry.",
    },
    {
      icon: <FaLaptop />,
      title: "ICT Support",
      text:
        "Providing technical support and technology solutions that help church departments and ministries operate effectively.",
    },
    {
      icon: <FaGlobe />,
      title: "Digital Communication",
      text:
        "Managing digital platforms and online communication to keep members connected with the church.",
    },
    {
      icon: <FaPhotoVideo />,
      title: "Content Creation",
      text:
        "Creating visual and digital content for church announcements, programmes, events and ministry activities.",
    },
    {
      icon: <FaBullhorn />,
      title: "Church Publicity",
      text:
        "Promoting church programmes and activities through effective communication and digital media.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Social Media",
      text:
        "Using social media platforms to share church updates, inspirational messages and ministry activities.",
    },
    {
      icon: <FaChurch />,
      title: "Worship Support",
      text:
        "Supporting worship services with technical equipment, presentations, sound and visual media.",
    },
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Creativity",
      text:
        "Using creativity and innovation to communicate God's message clearly and effectively.",
    },
    {
      icon: <FaUsers />,
      title: "Teamwork",
      text:
        "Working together with church departments, ministries and leaders to support the mission of the church.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Service",
      text:
        "Using our technical and creative skills to serve God, the church and the wider community.",
    },
  ];

  const responsibilities = [
    "Documenting church services, events and ministry activities.",
    "Supporting live streaming and digital church services.",
    "Managing the church's digital communication platforms.",
    "Providing technical support during worship services and events.",
    "Creating promotional and informational media content.",
    "Supporting church departments with digital communication.",
    "Maintaining photography and video archives.",
    "Promoting church programmes through appropriate media platforms.",
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${mediaBanner})`,
        }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <div
              className="about-hero-content"
              data-aos="fade-up"
            >
              <span className="hero-breadcrumb">
                HOME / ICT & MEDIA
              </span>

              <h1>
                ICT & Media
                <span> Ministry</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Capturing, connecting and sharing the work of God
                through technology, communication and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="ict-intro">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              ABOUT ICT & MEDIA
            </span>

            <h2>
              Connecting the Church Through Technology
            </h2>

            <p className="section-subtitle">
              The ICT & Media Ministry supports PCEA Ngong Parish
              through technology, communication and creative media.
              We help document church activities, support worship
              services, manage digital platforms and share the Gospel
              through modern communication tools.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="ict-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR SERVICES
            </span>

            <h2>
              What We Do
            </h2>

            <p className="section-subtitle">
              We use technology and media to support worship,
              communication, documentation and the mission of the church.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service, index) => (

              <div
                className="ict-card"
                key={index}
              >

                <div className="ict-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="ict-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="ict-values">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR VALUES
            </span>

            <h2>
              Serving Through Technology
            </h2>

            <p className="section-subtitle">
              Everything we do is guided by a commitment to serve
              God and strengthen the ministry of the church.
            </p>

          </div>


          <div className="values-grid">

            {values.map((value, index) => (

              <div
                className="value-card"
                key={index}
              >

                <div className="value-icon">
                  {value.icon}
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="ict-team">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              MEDIA LEADERSHIP
            </span>

            <h2>
              Our Leadership
            </h2>

            <p className="section-subtitle">
              The ICT & Media Ministry is guided by dedicated
              leaders who coordinate the technical and creative
              work of the ministry.
            </p>

          </div>


          <div className="leadership-grid">

            <div className="leader-card">

              <div className="leader-image placeholder-image">
                <FaUsers />
              </div>

              <div className="leader-content">

                <span>
                  Patron
                </span>

                <h3>
                  Elder Peter Kanyara
                </h3>

                <p>
                  Provides spiritual oversight and guidance
                  to the ICT & Media Ministry.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          RESPONSIBILITIES
      ===================================================== */}

      <section className="responsibilities-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR ROLE
            </span>

            <h2>
              Responsibilities of ICT & Media
            </h2>

            <p className="section-subtitle">
              The ministry plays an important role in helping
              the church communicate, document and reach people
              through modern technology.
            </p>

          </div>


          <div className="responsibilities-grid">

            {responsibilities.map((responsibility, index) => (

              <div
                className="responsibility-item"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>
                  {responsibility}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL MINISTRY
      ===================================================== */}

      <section className="digital-section">

        <div className="container">

          <div className="digital-content">

            <div className="digital-icon">
              <FaGlobe />
            </div>

            <span className="section-tag">
              DIGITAL MINISTRY
            </span>

            <h2>
              Taking the Gospel Beyond the Church Walls
            </h2>

            <p>
              Through websites, social media, livestreaming,
              photography and digital communication, the ICT &
              Media Ministry helps PCEA Ngong Parish reach people
              beyond the physical church environment.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="media-gallery">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR GALLERY
            </span>

            <h2>
              ICT & Media Gallery
            </h2>

            <p className="section-subtitle">
              Moments from church services, events, livestreaming,
              photography and media ministry activities.
            </p>

          </div>


          <div className="media-gallery-grid">

            <div className="media-gallery-placeholder">
              <FaCamera />
              <span>Photography</span>
            </div>

            <div className="media-gallery-placeholder">
              <FaVideo />
              <span>Videography</span>
            </div>

            <div className="media-gallery-placeholder">
              <FaLaptop />
              <span>ICT & Technical Support</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="media-cta">

        <div className="container text-center">

          <span className="section-tag">
            GET INVOLVED
          </span>

          <h2>
            Use Your Skills to Serve God
          </h2>

          <p>
            Do you have skills in photography, videography,
            technology, graphic design, social media or
            communication? Join us and use your talents
            to serve the church.
          </p>

          <Link
            to="/contact"
            className="welcome-btn"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </>
  );
}

export default ICTMedia;