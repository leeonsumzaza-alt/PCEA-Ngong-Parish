import "./MinistersCorner.css";

import {
  FaBible,
  FaPrayingHands,
  FaHeart,
  FaChurch,
  FaUsers,
  FaHandsHelping,
  FaCross,
  FaCalendarAlt,
} from "react-icons/fa";

// import ministersCornerBanner from "../assets/images/Hero/ministers-corner-banner.jpg";

function MinistersCorner() {
  const responsibilities = [
    {
      icon: <FaBible />,
      title: "Preaching & Teaching",
      text:
        "Providing biblical teaching and preaching that helps the congregation understand God's Word and grow in faith.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Prayer & Spiritual Guidance",
      text:
        "Encouraging prayer, spiritual growth and a deeper relationship with God through pastoral guidance.",
    },
    {
      icon: <FaHeart />,
      title: "Pastoral Care",
      text:
        "Offering spiritual support, encouragement and care to individuals and families within the parish community.",
    },
    {
      icon: <FaChurch />,
      title: "Worship & Sacraments",
      text:
        "Providing leadership in worship services, sacraments and other important aspects of the life of the church.",
    },
    {
      icon: <FaUsers />,
      title: "Congregational Leadership",
      text:
        "Working with church leaders, departments and members to strengthen unity and promote the mission of the parish.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Ministry",
      text:
        "Supporting the church's mission of serving the wider community and demonstrating Christ's love through practical ministry.",
    },
  ];

  const ministryValues = [
    {
      icon: <FaCross />,
      title: "Christ-Centred",
      text:
        "Keeping Jesus Christ at the centre of preaching, worship, leadership and pastoral ministry.",
    },
    {
      icon: <FaBible />,
      title: "Biblical",
      text:
        "Grounding ministry and teaching in the truth and authority of God's Word.",
    },
    {
      icon: <FaHeart />,
      title: "Compassionate",
      text:
        "Serving God's people with love, humility, patience and genuine concern.",
    },
  ];

  return (
    <>
      {/* ================= MINISTERS CORNER HERO ================= */}

      <section
        className="about-hero"
        // style={{
        //   backgroundImage: `url(${ministersCornerBanner})`,
        // }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <div
              className="about-hero-content"
              data-aos="fade-up"
            >
              <span className="hero-breadcrumb">
                HOME / MINISTERS CORNER
              </span>

              <h1>
                Ministers
                <span> Corner</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                A place of spiritual guidance, pastoral care and
                biblical teaching at PCEA Ngong Parish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}

      <section className="ministers-intro">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">
              MINISTERS CORNER
            </span>

            <h2 className="intro-title">
              Serving God's People Through Ministry
            </h2>

            <p className="intro-text">
              The Ministers Corner of PCEA Ngong Parish provides a
              connection between the parish ministry and the congregation.
              It highlights the role of our ministers in preaching,
              teaching, pastoral care, prayer and spiritual leadership.
            </p>

            <p className="intro-text">
              Through faithful service and Christ-centred leadership,
              our ministers seek to nurture believers, strengthen
              families and guide the church in fulfilling its mission.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PARISH MINISTER ================= */}

      <section className="minister-section">
        <div className="container">

          <div className="section-title text-center">
            <span className="section-tag">
              PARISH MINISTRY
            </span>

            <h2>
              Meet Our Parish Minister
            </h2>

            <p>
              Our parish minister provides spiritual leadership,
              pastoral care and guidance to the congregation.
            </p>
          </div>

          <div className="minister-profile">

            <div className="minister-image">
              <img
                src="/images/placeholder.jpg"
                alt="PCEA Ngong Parish Minister"
              />
            </div>

            <div className="minister-content">

              <span className="minister-role">
                PARISH MINISTER
              </span>

              <h2>
                REV. PARISH MINISTER
              </h2>

              <p>
                The Parish Minister provides spiritual leadership and
                pastoral oversight at PCEA Ngong Parish. Through
                preaching, teaching, prayer and pastoral care, the
                minister works alongside church leaders and members
                to nurture a growing and faithful Christian community.
              </p>

              <p>
                The ministry is committed to proclaiming God's Word,
                strengthening families, encouraging believers and
                helping the parish fulfil its mission of serving
                Christ and the community.
              </p>

              <div className="minister-highlights">

                <div>
                  <FaBible />
                  <span>Biblical Teaching</span>
                </div>

                <div>
                  <FaPrayingHands />
                  <span>Prayer</span>
                </div>

                <div>
                  <FaHeart />
                  <span>Pastoral Care</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= MINISTER'S MESSAGE ================= */}

      <section className="minister-message-section">

        <div className="container">

          <div className="minister-message">

            <div className="message-icon">
              <FaBible />
            </div>

            <span className="section-tag">
              FROM THE MINISTER
            </span>

            <h2>
              A Word of Encouragement
            </h2>

            <div className="message-divider"></div>

            <p>
              Welcome to PCEA Ngong Parish. We are grateful to God
              for His faithfulness and for the opportunity to worship,
              serve and grow together as a church family.
            </p>

            <p>
              As we continue our journey of faith, may we remain
              committed to God's Word, devoted to prayer and willing
              to serve one another with love and humility.
            </p>

            <p>
              May our lives continually reflect the love of Christ
              in our homes, workplaces, church and wider community.
            </p>

            <strong>
              — PCEA Ngong Parish Ministry
            </strong>

          </div>

        </div>

      </section>

      {/* ================= RESPONSIBILITIES ================= */}

      <section className="minister-responsibilities">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PASTORAL MINISTRY
            </span>

            <h2>
              Our Ministry Responsibilities
            </h2>

            <p>
              The ministry serves the congregation through
              spiritual leadership, teaching, pastoral care and
              community engagement.
            </p>

          </div>

          <div className="responsibilities-grid">

            {responsibilities.map((item, index) => (

              <div
                className="responsibility-card"
                key={index}
              >

                <div className="responsibility-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= MINISTRY VALUES ================= */}

      <section className="minister-values">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR VALUES
            </span>

            <h2>
              Ministry Built On Faith
            </h2>

          </div>

          <div className="values-grid">

            {ministryValues.map((item, index) => (

              <div
                className="ministry-value-card"
                key={index}
              >

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

            ))}

          </div>

        </div>

      </section>

      {/* ================= PASTORAL CARE ================= */}

      <section className="pastoral-care">

        <div className="container">

          <div className="pastoral-card">

            <div className="pastoral-icon">
              <FaHandsHelping />
            </div>

            <div className="pastoral-content">

              <span className="section-tag">
                PASTORAL CARE
              </span>

              <h2>
                Walking With You Through Every Season
              </h2>

              <p>
                The church is committed to walking alongside
                individuals and families through seasons of
                celebration, difficulty, growth and transition.
              </p>

              <p>
                Through prayer, counsel, encouragement and
                fellowship, our pastoral ministry seeks to remind
                every member that they are part of a caring
                Christian family.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= JOIN US ================= */}

      <section className="ministers-cta">

        <div className="container text-center">

          <span className="section-tag">
            JOIN US
          </span>

          <h2>
            Grow With Us In Faith
          </h2>

          <p>
            We invite you to worship with us, participate in the
            life of the church and grow together in God's Word.
          </p>

          <a
            href="/calendar"
            className="minister-btn"
          >
            <FaCalendarAlt />
            View Church Calendar
          </a>

        </div>

      </section>

    </>
  );
}

export default MinistersCorner;