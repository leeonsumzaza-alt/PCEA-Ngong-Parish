import "./Leadership.css";
import { useState } from "react";
import {
  FaBible,
  FaPrayingHands,
  FaUserTie,
} from "react-icons/fa";
import leadershipBanner from "../assets/images/Hero/leadership-banner.jpg";
import parishminister from "../assets/images/Leaders/parishminister.jpg";


function Leadership() {
  const [showAllElders, setShowAllElders] = useState(false);
  const parishMinister = {
  name: "Rev. Dr Josephine Mutuota",
  role: "Parish Minister",
  image: parishminister,
  description:
    "The Parish Minister provides spiritual leadership, pastoral care, biblical teaching and overall guidance for the ministries of PCEA Ngong Parish.",
};

  // const sessionClerk = {
  //   name: "Elder Name Here",
  //   role: "Session Clerk",
  //   image: "https://via.placeholder.com/400x500",
  // };

  // const administrator = {
  //   name: "Name Here",
  //   role: "Parish Administrator",
  //   image: "https://via.placeholder.com/400x500",
  // };

  // const superintendent = {
  //   name: "Name Here",
  //   role: "Church School Superintendent",
  //   image: "https://via.placeholder.com/400x500",
  // };

  // const youthPatron = {
  //   name: "Name Here",
  //   role: "Youth Patron",
  //   image: "https://via.placeholder.com/400x500",
  // };

  // const guildLeaders = [
  //   {
  //     name: "Leader Name",
  //     role: "PWF Chairperson",
  //     image: "https://via.placeholder.com/400x500",
  //   },
  //   {
  //     name: "Leader Name",
  //     role: "Youth Fellowship Leader",
  //     image: "https://via.placeholder.com/400x500",
  //   },
  //   {
  //     name: "Leader Name",
  //     role: "Brigade Leader",
  //     image: "https://via.placeholder.com/400x500",
  //   },
  // ];

  const elders = [
    {
      name: "Elder Name",
      role: "Parish Elder",
      image: "https://via.placeholder.com/400x500",
    },
    {
      name: "Elder Name",
      role: "Parish Elder",
      image: "https://via.placeholder.com/400x500",
    },
    {
      name: "Elder Name",
      role: "Parish Elder",
      image: "https://via.placeholder.com/400x500",
    },
    {
      name: "Elder Name",
      role: "Parish Elder",
      image: "https://via.placeholder.com/400x500",
    },
  ];

  const committeeMembers = [
    {
      name: "Member Name",
      role: "Committee Member",
      image: "https://via.placeholder.com/400x500",
    },
    {
      name: "Member Name",
      role: "Committee Member",
      image: "https://via.placeholder.com/400x500",
    },
    {
      name: "Member Name",
      role: "Committee Member",
      image: "https://via.placeholder.com/400x500",
    },
    {
      name: "Member Name",
      role: "Committee Member",
      image: "https://via.placeholder.com/400x500",
    },
  ];

  return (
    <>
      {/* ================= LEADERSHIP HERO ================= */}

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

      {/* Leadership Intro */}

<section className="leadership-intro">

  <div className="container">

    <div className="text-center">

      <span className="section-tag">
        OUR LEADERSHIP
      </span>

      <h2 className="intro-title">
        Meet the Leadership of <br />
        PCEA Ngong Parish
      </h2>

      <p className="intro-text">
        God has entrusted our church to faithful leaders who shepherd,
        disciple and serve the congregation while pointing everyone
        to Jesus Christ through biblical teaching, prayer and servant leadership.
      </p>

    </div>

    <div className="intro-grid">

      <div className="intro-card">

        <div className="intro-icon">
          <FaUserTie />
        </div>

        <h4>Leadership Team</h4>

        <p>
          Dedicated leaders serving with integrity,
          wisdom and Christ-like humility.
        </p>

      </div>

      <div className="intro-card">

        <div className="intro-icon">
          <FaBible />
        </div>

        <h4>Christ-Centred Ministry</h4>

        <p>
          Every ministry is guided by God's Word
          and committed to spiritual growth.
        </p>

      </div>

      <div className="intro-card">

        <div className="intro-icon">
          <FaPrayingHands />
        </div>

        <h4>Faithful Service</h4>

        <p>
          Serving the church and community
          through prayer, compassion and love.
        </p>

      </div>

    </div>

  </div>

</section>

      {/* Featured Parish Minister */}

<section className="minister-section">

  <div className="container">

    <div className="minister-wrapper">

      <div className="row align-items-center g-5">

        {/* Image */}

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

        {/* Content */}

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

            "Shepherd the flock of God that is among you, exercising oversight willingly and eagerly."

            <span>
              — 1 Peter 5:2
            </span>

          </blockquote>

          <div className="minister-highlights">

            <div className="highlight-card">

              <FaBible />

              <h5>Biblical Teaching</h5>

            </div>

            <div className="highlight-card">

              <FaPrayingHands />

              <h5>Prayer</h5>

            </div>

            <div className="highlight-card">

              <FaUserTie />

              <h5>Servant Leadership</h5>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* Church Leadership

      <section className="leaders-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PARISH LEADERSHIP
            </span>

            <h2>Church Leadership Team</h2>

          </div>

          <div className="row g-4">

            <div className="col-lg-4 col-md-6">

              <div className="leader-card">

                <img
                  src={sessionClerk.image}
                  alt={sessionClerk.name}
                />
                <div className="leader-overlay"></div>

                <div className="leader-content">

                  <span>{sessionClerk.role}</span>

                  <h3>{sessionClerk.name}</h3>

                </div>

              </div>

            </div>

            <div className="col-lg-4 col-md-6">

              <div className="leader-card">

                <img
                  src={administrator.image}
                  alt={administrator.name}
                />
                <div className="leader-overlay"></div>

                <div className="leader-content">

                  <span>{administrator.role}</span>

                  <h3>{administrator.name}</h3>

                </div>

              </div>

            </div>

            <div className="col-lg-4 col-md-6">

              <div className="leader-card">

                <img
                  src={superintendent.image}
                  alt={superintendent.name}
                />
                <div className="leader-overlay"></div>

                <div className="leader-content">

                  <span>{superintendent.role}</span>

                  <h3>{superintendent.name}</h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Youth Patron */}

      {/* <section className="leaders-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              YOUTH MINISTRY
            </span>

            <h2>Youth Patron</h2>

          </div>

          <div className="row justify-content-center">

            <div className="col-lg-4 col-md-6">

              <div className="leader-card">

                <img
                  src={youthPatron.image}
                  alt={youthPatron.name}
                />

                <div className="leader-content">

                  <span>{youthPatron.role}</span>

                  <h3>{youthPatron.name}</h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Guild Leaders */}

      {/* <section className="leaders-section bg-light">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              GUILD LEADERS
            </span>

            <h2>Guild Leadership</h2>

          </div>

          <div className="row g-4">

            {guildLeaders.map((leader, index) => (

              <div className="col-lg-4 col-md-6" key={index}>

                <div className="leader-card">

                  <img
                    src={leader.image}
                    alt={leader.name}
                  />

                  <div className="leader-content">

                    <span>{leader.role}</span>

                    <h3>{leader.name}</h3>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section> */}

      {/* ===========================
        PARISH ELDERS
=========================== */}

<section className="leaders-section elders-section">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">

        KIRK SESSION

      </span>

      <h2>Meet Our Parish Elders</h2>

      <p className="elders-intro">

        Our Kirk Session consists of faithful elders who serve alongside the
        Parish Minister in providing spiritual oversight, pastoral care,
        discipleship and leadership to the congregation.

      </p>

    </div>

    <div className="row g-4">

      {(showAllElders ? elders : elders.slice(0, 12)).map((elder, index) => (

        <div
          className="col-xl-3 col-lg-4 col-md-6"
          key={index}
        >

          <div className="elder-card">

            <div className="elder-image">

              <img
                src={elder.image}
                alt={elder.name}
              />

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

    {elders.length > 12 && (

      <div className="text-center mt-5">

        <button
          className="elders-btn"
          onClick={() => setShowAllElders(!showAllElders)}
        >

          {showAllElders
            ? "Show Less"
            : `View All ${elders.length} Elders`}

        </button>

      </div>

    )}

  </div>

</section>

      {/* Parish Committee */}

      <section className="leaders-section bg-light">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PARISH COMMITTEE
            </span>

            <h2>Committee Members</h2>

          </div>

          <div className="row g-4">

            {committeeMembers.map((member, index) => (

              <div className="col-lg-3 col-md-6" key={index}>

                <div className="leader-card">

                  <img
                    src={member.image}
                    alt={member.name}
                  />

                  <div className="leader-content">

                    <span>{member.role}</span>

                    <h3>{member.name}</h3>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Leadership Principles */}

      <section className="principles-section">

        <div className="container">

          <div className="section-title">

            <span className="section-tag">
              OUR COMMITMENT
            </span>

            <h2>Leadership Principles</h2>

          </div>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="principle-card">

                <FaBible className="leader-icon"/>

                <h3>Biblical Teaching</h3>

                <p>
                  We faithfully preach and teach the Word of God as the
                  foundation of every ministry.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="principle-card">

                <FaPrayingHands className="leader-icon"/>

                <h3>Prayer</h3>

                <p>
                  Every decision is guided through prayer and dependence upon
                  God.
                </p>

              </div>

            </div>

            <div className="col-md-4">

              <div className="principle-card">

                <FaUserTie className="leader-icon"/>

                <h3>Servant Leadership</h3>

                <p>
                  We lead by serving Christ, His Church and the surrounding
                  community with humility.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Closing Message */}

      <section className="leader-message">

        <div className="container text-center">

          <h2>Serving Together for God's Glory</h2>

          <p>
            Our leadership team is committed to shepherding God's people with
            faith, integrity and compassion. We warmly welcome you to worship,
            grow and serve alongside us at PCEA Ngong Parish.
          </p>

        </div>

      </section>

    </>
  );
}

export default Leadership;