import "./ICTMedia.css";

import {
  FaCamera,
  FaVideo,
  FaLaptop,
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

import mediaBanner from "../assets/images/Hero/media-banner.jpg";
// import mediaElder from "../assets/images/Media/media-elder.jpg";
// import mediaCoordinator from "../assets/images/Media/media-coordinator.jpg";

function ICTMedia() {

  const services = [
    {
      icon: <FaCamera />,
      title: "Photography & Videography",
      text:
        "Capturing church services, events and special moments through quality photography and video production.",
    },
    {
      icon: <FaVideo />,
      title: "Live Streaming",
      text:
        "Supporting online worship through livestreaming services and making church programmes accessible digitally.",
    },
    {
      icon: <FaLaptop />,
      title: "Digital Support",
      text:
        "Managing digital platforms, technical support and technology solutions that support church activities.",
    },
    {
      icon: <FaGlobe />,
      title: "Online Presence",
      text:
        "Sharing the work of the church through websites, social media and digital communication platforms.",
    },
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Creativity",
      text:
        "Using creativity and innovation to communicate God's message effectively through media.",
    },
    {
      icon: <FaUsers />,
      title: "Teamwork",
      text:
        "Working together to support ministries, services and church programmes.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Service",
      text:
        "Serving the church by using technology and media skills for God's glory.",
    },
  ];

  return (
    <>
      {/* ================= MEDIA MINISTRY HERO ================= */}

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
                HOME / MEDIA MINISTRY
              </span>

              <h1>
                Media
                <span> Ministry</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Capturing and sharing the work of God
                through digital media, communication and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= WELCOME ================= */}

      <section className="ict-intro">
        <div className="container">
          <div className="text-center">

            <span className="section-tag">
              ABOUT ICT & MEDIA
            </span>

            <h2 className="intro-title">
              Connecting The Church Through Technology
            </h2>

            <p className="intro-text">
              The ICT & Media Ministry supports PCEA Ngong Parish
              through technology, communication and creative media.
              The ministry helps document church activities,
              support worship services, manage digital platforms
              and share the Gospel through modern communication tools.
            </p>

          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}

      <section className="ict-section">
        <div className="container">

          <div className="section-title text-center">
            <span className="section-tag">
              OUR SERVICES
            </span>

            <h2>
              What We Do
            </h2>
          </div>

          <div className="row g-4">

            {services.map((item, index) => (
              <div
                className="col-lg-3 col-md-6"
                key={index}
              >
                <div className="ict-card">

                  <div className="ict-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= VALUES ================= */}

      <section className="ict-values">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR VALUES
            </span>

            <h2>
              Serving Through Technology
            </h2>

          </div>

          <div className="row g-4">

            {values.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >
                <div className="value-card">

                  <div className="value-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= OFFICIALS ================= */}

      <section className="ict-team">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              MEDIA LEADERSHIP
            </span>

            <h2>
              Our Leadership
            </h2>

            <p>
              The Media Ministry is guided by dedicated leaders
              who coordinate the technical and creative work of the ministry.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {/* Elder In Charge */}

            <div className="col-lg-5 col-md-6">

              <div className="leader-card">

                <div className="leader-image">

                  <img
                    // src={mediaElder}
                    alt="Elder in Charge - Media Ministry"
                  />

                </div>

                <div className="leader-content">

                  <span>
                    Elder in Charge
                  </span>

                  <h3>
                    Name Here
                  </h3>

                </div>

              </div>

            </div>


            {/* Media Coordinator */}

            <div className="col-lg-5 col-md-6">

              <div className="leader-card">

                <div className="leader-image">

                  <img
                    // src={mediaCoordinator}
                    alt="Media Ministry Coordinator"
                  />

                </div>

                <div className="leader-content">

                  <span>
                    Media Ministry Coordinator
                  </span>

                  <h3>
                    Name Here
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= OFFICIALS LIST ================= */}

      <section className="media-officials">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              MINISTRY OFFICIALS
            </span>

            <h2>
              ICT & Media Officials
            </h2>

          </div>


          <div className="officials-list">

            <div className="official-item">
              <span>01</span>
              <div>
                <h4>Media Coordinator</h4>
                <p>Name Here</p>
              </div>
            </div>

            <div className="official-item">
              <span>02</span>
              <div>
                <h4>ICT Coordinator</h4>
                <p>Name Here</p>
              </div>
            </div>

            <div className="official-item">
              <span>03</span>
              <div>
                <h4>Photography Lead</h4>
                <p>Name Here</p>
              </div>
            </div>

            <div className="official-item">
              <span>04</span>
              <div>
                <h4>Videography Lead</h4>
                <p>Name Here</p>
              </div>
            </div>

            <div className="official-item">
              <span>05</span>
              <div>
                <h4>Technical Team Lead</h4>
                <p>Name Here</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= MESSAGE ================= */}

      <section className="ict-message">

        <div className="container text-center">

          <h2>
            Sharing God's Message Through Media
          </h2>

          <p>
            Through technology, creativity and teamwork,
            the ICT & Media Ministry helps the church reach
            more people and communicate the Gospel effectively.
          </p>

        </div>

      </section>

    </>
  );
}

export default ICTMedia;
