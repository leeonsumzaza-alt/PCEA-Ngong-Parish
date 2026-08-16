import "./Health.css";

import {
  FaHeartbeat,
  FaUserMd,
  FaHandsHelping,
  FaUsers,
  FaPrayingHands,
  FaHeart,
  FaStethoscope,
  FaShieldAlt,
  FaHospital,
  FaNotesMedical,
  FaLeaf,
} from "react-icons/fa";

import healthBanner from "../assets/images/Hero/health-banner.jpg";

function Health() {
  /* =========================================================
     HEALTH SERVICES
  ========================================================= */

  const services = [
    {
      icon: <FaHeartbeat />,
      title: "Health Awareness",
      text:
        "Creating awareness on healthy living, disease prevention and overall wellbeing within the church and wider community.",
    },

    {
      icon: <FaUserMd />,
      title: "Medical Support",
      text:
        "Supporting members through health guidance, medical programmes and connections to appropriate healthcare services.",
    },

    {
      icon: <FaHandsHelping />,
      title: "Community Care",
      text:
        "Extending compassion and practical support to individuals and families experiencing health-related challenges.",
    },

    {
      icon: <FaStethoscope />,
      title: "Health Education",
      text:
        "Providing information that empowers individuals and families to make informed decisions about their health and wellbeing.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Disease Prevention",
      text:
        "Encouraging preventive healthcare practices and healthy lifestyles that can help reduce the risk of illness.",
    },

    {
      icon: <FaHospital />,
      title: "Health Outreach",
      text:
        "Supporting health-related outreach activities that bring care, information and encouragement closer to the community.",
    },
  ];

  /* =========================================================
     HEALTH VALUES
  ========================================================= */

  const values = [
    {
      icon: <FaHeart />,
      title: "Compassion",
      text:
        "Following Christ's example by caring for the physical, emotional and spiritual needs of others.",
    },

    {
      icon: <FaUsers />,
      title: "Community",
      text:
        "Working together to promote healthier families and build a stronger and more caring church community.",
    },

    {
      icon: <FaPrayingHands />,
      title: "Faith & Care",
      text:
        "Combining prayer, faith and practical support as we serve God's people and promote holistic wellbeing.",
    },

    {
      icon: <FaNotesMedical />,
      title: "Responsibility",
      text:
        "Encouraging individuals to take responsibility for their health and make positive lifestyle choices.",
    },

    {
      icon: <FaLeaf />,
      title: "Healthy Living",
      text:
        "Promoting balanced lifestyles and habits that contribute to physical, emotional and spiritual wellbeing.",
    },

    {
      icon: <FaHandsHelping />,
      title: "Service",
      text:
        "Serving others with humility, kindness and a willingness to make a meaningful difference in people's lives.",
    },
  ];

  /* =========================================================
     HEALTH OFFICIALS
  ========================================================= */

  const officials = [
    {
      number: "01",
      role: "Chairman",
      name: "Festus Ngumo Mwangi",
    },

    {
      number: "02",
      role: "Vice Chairman",
      name: "Joe Gathage Mwangi",
    },

    {
      number: "03",
      role: "Secretary",
      name: "Rahab Watiri Kaime",
    },

    {
      number: "04",
      role: "Treasurer",
      name: "Jane Nyai Mutwerandu",
    },
  ];

  /* =========================================================
     COMMITTEE MEMBERS
     
     Add names here when they are available.
  ========================================================= */

  const committeeMembers = [
    {
      number: "01",
      name: "Committee Member",
    },

    {
      number: "02",
      name: "Committee Member",
    },

    {
      number: "03",
      name: "Committee Member",
    },

    {
      number: "04",
      name: "Committee Member",
    },

    {
      number: "05",
      name: "Committee Member",
    },

    {
      number: "06",
      name: "Committee Member",
    },

    {
      number: "07",
      name: "Committee Member",
    },

    {
      number: "08",
      name: "Committee Member",
    },

    {
      number: "09",
      name: "Committee Member",
    },

    {
      number: "10",
      name: "Committee Member",
    },
  ];

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${healthBanner})`,
        }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <div
              className="about-hero-content"
              data-aos="fade-up"
            >
              <span className="hero-breadcrumb">
                HOME / HEALTH MINISTRY
              </span>

              <h1>
                Health
                <span> Ministry</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Serving the community through compassion,
                care and Christ-centred health initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="health-welcome">
        <div className="container">
          <div className="section-title text-center">

            <span className="section-tag">
              ABOUT HEALTH MINISTRY
            </span>

            <h2>
              Caring For The Whole Person
            </h2>

            <p className="section-subtitle">
              The Health Ministry of PCEA Ngong Parish is committed
              to promoting physical, emotional and spiritual wellbeing
              among members and the wider community.
            </p>

          </div>

          <div className="health-intro-content">

            <div className="intro-highlight">
              <div className="intro-highlight-icon">
                <FaHeartbeat />
              </div>

              <h3>
                Health Is Part of Our Ministry
              </h3>

              <p>
                Through health education, support programmes,
                awareness initiatives and compassionate service,
                the ministry seeks to demonstrate God's love by
                caring for the wellbeing of His people.
              </p>
            </div>

            <div className="intro-text-content">

              <p>
                We believe that caring for people involves more than
                addressing physical needs. It also means encouraging
                emotional wellbeing, spiritual strength, healthy
                relationships and responsible living.
              </p>

              <p>
                By working together with members, families,
                healthcare professionals and the wider community,
                the Health Ministry seeks to encourage healthier
                lifestyles and create a culture of care within
                PCEA Ngong Parish.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="health-leadership">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              HEALTH LEADERSHIP
            </span>

            <h2>
              Our Leadership
            </h2>

            <p className="section-subtitle">
              The Health Ministry is guided by dedicated leaders
              who coordinate its activities and provide direction
              in promoting health and wellbeing.
            </p>

          </div>

          <div className="row g-4 justify-content-center">

            {/* Patron */}

            <div className="col-lg-5 col-md-6">

              <div className="health-leader-card">

                <div className="health-leader-image placeholder-image">
                  <FaUserMd />
                </div>

                <div className="health-leader-content">

                  <span>
                    Health Patron
                  </span>

                  <h3>
                    ANTHONY NYAMU
                  </h3>

                  <p>
                    Provides guidance and support to the Health
                    Ministry while encouraging its work within
                    the church community.
                  </p>

                </div>

              </div>

            </div>

            {/* Chairman */}

            <div className="col-lg-5 col-md-6">

              <div className="health-leader-card">

                <div className="health-leader-image placeholder-image">
                  <FaHeartbeat />
                </div>

                <div className="health-leader-content">

                  <span>
                    Chairman
                  </span>

                  <h3>
                    FESTUS NGUMO MWANGI
                  </h3>

                  <p>
                    Coordinates the activities and administration
                    of the Health Ministry and supports its programmes.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          OFFICIALS
      ===================================================== */}

      <section className="health-officials">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR TEAM
            </span>

            <h2>
              Health Ministry Officials
            </h2>

            <p className="section-subtitle">
              Meet the officials who help coordinate and support
              the ministry's activities and programmes.
            </p>

          </div>

          <div className="health-officials-grid">

            {officials.map((official) => (
              <div
                className="health-official-card"
                key={official.number}
              >

                <div className="official-number">
                  {official.number}
                </div>

                <div className="official-details">

                  <span>
                    {official.role}
                  </span>

                  <h4>
                    {official.name}
                  </h4>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          COMMITTEE
      ===================================================== */}

      <section className="health-committee">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR TEAM
            </span>

            <h2>
              Committee Members
            </h2>

            <p className="section-subtitle">
              The Health Ministry committee works together to
              support the ministry's programmes and serve the
              needs of the church community.
            </p>

          </div>

          <div className="health-committee-grid">

            {committeeMembers.map((member) => (
              <div
                className="health-committee-card"
                key={member.number}
              >

                <div className="committee-icon">
                  <FaUsers />
                </div>

                <span>
                  {member.number}
                </span>

                <h4>
                  {member.name}
                </h4>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="health-services">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR SERVICES
            </span>

            <h2>
              What We Do
            </h2>

            <p className="section-subtitle">
              Through education, support and practical service,
              the Health Ministry seeks to improve wellbeing
              within the church and community.
            </p>

          </div>

          <div className="row g-4">

            {services.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="health-service-card">

                  <div className="health-service-icon">
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

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="health-values">
        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR VALUES
            </span>

            <h2>
              Serving With Love & Compassion
            </h2>

            <p className="section-subtitle">
              Our work is guided by Christian values that encourage
              compassion, responsibility and holistic wellbeing.
            </p>

          </div>

          <div className="row g-4">

            {values.map((item, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="health-value-card">

                  <div className="health-value-icon">
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

      {/* =====================================================
          CALL TO ACTION
      ===================================================== */}

      <section className="health-cta">

        <div className="container text-center">

          <div className="health-cta-icon">
            <FaHeartbeat />
          </div>

          <span className="section-tag">
            OUR CALLING
          </span>

          <h2>
            Caring For God's People
          </h2>

          <div className="health-cta-divider"></div>

          <p>
            The Health Ministry serves as a reminder that caring
            for others is an important expression of Christ's love.
            Together, we promote healthier lives, stronger families
            and a more caring community.
          </p>

        </div>

      </section>
    </>
  );
}

export default Health;