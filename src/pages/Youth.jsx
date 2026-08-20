import "./Youth.css";
import { Link } from "react-router-dom";

import {
  FaBible,
  FaUsers,
  FaPrayingHands,
  FaHeart,
  FaCross,
  FaHandsHelping,
  FaChurch,
  FaUserTie,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import youthBanner from "../assets/images/Hero/youth-banner.jpg";

import gallery1 from "../assets/images/Youth/youth1.jpg";
import gallery2 from "../assets/images/Youth/youth2.jpg";
import gallery3 from "../assets/images/Youth/youth3.jpg";


function Youth() {

  /* =====================================================
     GALLERY
  ===================================================== */

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
  ];


  /* =====================================================
     OFFICIALS
  ===================================================== */

  const officials = [
    {
      position: "Chairperson",
      name: "James King'ori Kago",
    },
    {
      position: "Vice Chairperson",
      name: "Josphat Kamau Mburu",
    },
    {
      position: "Secretary",
      name: "Lydia Njoki Wakiuru",
    },
    {
      position: "Vice Secretary",
      name: "Grace Wanjiku Wahome",
    },
    {
      position: "Treasurer",
      name: "Hezron Miano Ngatia",
    },
  ];


  /* =====================================================
     COMMITTEE MEMBERS
  ===================================================== */

  const committeeMembers = [
    "Joy Christine Murugi",
    "Monica Wanjiku Kamanda",
    "Lydia Munyingi",
    "David Kanene",
    "Lucy Muthoni Koisaba",
    "Daniel Kiarie",
    "Joeseph Weru",
    "Peter Gichuki",
    "Daniel King'ori",
    "Peter Ndung'u",
    "Jackline Maina",
    "Charles Maina",
  ];


  /* =====================================================
     ROLES
  ===================================================== */

  const rolesLeft = [
    "Promote Christian discipleship.",
    "Encourage Bible study and prayer.",
    "Develop future church leaders.",
    "Support evangelism and missions.",
  ];


  const rolesRight = [
    "Promote fellowship among young people.",
    "Develop talents and spiritual gifts.",
    "Support community outreach.",
    "Encourage responsible Christian living.",
  ];


  /* =====================================================
     PROJECTS
  ===================================================== */

  const projects = [
    {
      icon: <FaHandsHelping />,
      title: "Community Outreach",
      description:
        "Serving families and supporting local community initiatives.",
    },
    {
      icon: <FaChurch />,
      title: "Church Development",
      description:
        "Supporting church activities through volunteer service.",
    },
    {
      icon: <FaHeart />,
      title: "Fundraising",
      description:
        "Organizing projects that support ministry growth and missions.",
    },
  ];


  /* =====================================================
     ACHIEVEMENTS
  ===================================================== */

  const achievements = [
    "Successfully organized annual youth camps.",
    "Participated in regional youth conferences.",
    "Led successful community outreach initiatives.",
    "Won church sports competitions.",
    "Developed young leaders serving in church ministries.",
  ];


  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${youthBanner})`,
        }}
      >

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / YOUTH MINISTRY
              </span>

              <h1>
                Youth
                <span> Ministry</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Empowering young people to grow in faith,
                serve Christ and impact the community.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WELCOME
      ===================================================== */}

      <section className="youth-welcome">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR YOUTH
            </span>

            <h2>
              Welcome to the Youth Ministry
            </h2>

            <p className="section-subtitle">
              The Youth Ministry exists to help young people grow
              spiritually, build meaningful friendships, discover their
              God-given gifts and become faithful disciples of Jesus
              Christ through worship, fellowship, discipleship and service.
            </p>

          </div>


          <div className="welcome-grid">

            {/* BIBLICAL DISCIPLESHIP */}

            <div className="welcome-card">

              <div className="welcome-icon">
                <FaBible />
              </div>

              <h4>
                Biblical Discipleship
              </h4>

              <p>
                Young people are encouraged to study God's Word,
                grow in faith and develop a strong biblical foundation.
              </p>

            </div>


            {/* PRAYER */}

            <div className="welcome-card">

              <div className="welcome-icon">
                <FaPrayingHands />
              </div>

              <h4>
                Prayer & Worship
              </h4>

              <p>
                We encourage young people to develop a deeper
                relationship with God through prayer and worship.
              </p>

            </div>


            {/* FELLOWSHIP */}

            <div className="welcome-card">

              <div className="welcome-icon">
                <FaUsers />
              </div>

              <h4>
                Christian Fellowship
              </h4>

              <p>
                Young people build meaningful friendships and
                encourage one another within a Christ-centred community.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="leaders-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              LEADERSHIP
            </span>

            <h2>
              Youth Leadership
            </h2>

            <p className="section-subtitle">
              The Presbyterian Youth Fellowship is guided by dedicated
              leaders who provide spiritual direction, coordination and
              servant leadership.
            </p>

          </div>


          <div className="row g-4">

            {/* ELDER IN CHARGE */}

            <div className="col-lg-6">

              <div className="official-card">

                <div className="official-image placeholder-image">

                  <FaUserTie />

                </div>

                <div className="official-content">

                  <span>
                    Elder in Charge
                  </span>

                  <h3>
                    Rosaline Gathage
                  </h3>

                  <p>
                    Provides spiritual oversight and supports the
                    spiritual growth and development of the Youth Ministry.
                  </p>

                </div>

              </div>

            </div>


            {/* CHAIRMAN */}

            <div className="col-lg-6">

              <div className="official-card">

                <div className="official-image placeholder-image">

                  <FaUsers />

                </div>

                <div className="official-content">

                  <span>
                    Chairman
                  </span>

                  <h3>
                    James King’ori Kago
                  </h3>

                  <p>
                    Coordinates Youth Ministry activities, programmes
                    and initiatives throughout the year.
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

      <section className="officials-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              YOUTH MINISTRY
            </span>

            <h2>
              Youth Ministry Officials
            </h2>

            <p className="section-subtitle">
              Our elected officials help coordinate the ministry and
              lead various programmes and activities throughout the year.
            </p>

          </div>


          <div className="officials-grid">

            {officials.map((official, index) => (

              <div
                className="official-list-card"
                key={index}
              >

                <div className="official-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="official-list-content">

                  <span>
                    {official.position}
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

      <section className="committee-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              COMMITTEE
            </span>

            <h2>
              Committee Members
            </h2>

            <p className="section-subtitle">
              These members support the Youth Ministry leadership
              in planning and implementing various programmes and activities.
            </p>

          </div>


          <div className="committee-grid">

            {committeeMembers.map((member, index) => (

              <div
                className="committee-card"
                key={index}
              >

                <div className="committee-icon">
                  <FaUsers />
                </div>

                <h4>
                  {member}
                </h4>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ROLES / PURPOSE
      ===================================================== */}

      <section className="mission-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR PURPOSE
            </span>

            <h2>
              Roles of the Youth Ministry
            </h2>

            <p className="section-subtitle">
              The Youth Ministry seeks to nurture young people in
              faith while equipping them to serve God, the church
              and the wider community.
            </p>

          </div>


          <div className="roles-grid">

            <div className="roles-column">

              {rolesLeft.map((role, index) => (

                <div
                  className="role-item"
                  key={index}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {role}
                  </p>

                </div>

              ))}

            </div>


            <div className="roles-column">

              {rolesRight.map((role, index) => (

                <div
                  className="role-item"
                  key={index}
                >

                  <span>
                    {String(index + 5).padStart(2, "0")}
                  </span>

                  <p>
                    {role}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="activities-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              CURRENT PROJECTS
            </span>

            <h2>
              Youth Projects
            </h2>

            <p className="section-subtitle">
              Our young people participate in projects that strengthen
              the church, serve the community and support ministry growth.
            </p>

          </div>


          <div className="projects-grid">

            {projects.map((project, index) => (

              <div
                className="project-card"
                key={index}
              >

                <div className="project-icon">
                  {project.icon}
                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="creed-section">

        <div className="container">

          <div className="achievement-card">

            <div className="achievement-icon">
              <FaCross />
            </div>

            <span className="section-tag">
              OUR JOURNEY
            </span>

            <h2>
              Youth Ministry Achievements
            </h2>

            <div className="achievement-divider"></div>

            <ul className="achievement-list">

              {achievements.map((achievement, index) => (

                <li key={index}>
                  {achievement}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="gallery-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR GALLERY
            </span>

            <h2>
              Youth Ministry Gallery
            </h2>

            <p className="section-subtitle">
              Moments of worship, fellowship, service and growth
              within our Youth Ministry.
            </p>

          </div>


          <div className="gallery-grid">

            {galleryImages.map((image, index) => (

              <div
                className="gallery-card"
                key={index}
              >

                <img
                  src={image}
                  alt={`Youth Ministry activity ${index + 1}`}
                  className="gallery-image"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SOCIAL MEDIA
      ===================================================== */}

      <section className="youth-social-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              STAY CONNECTED
            </span>

            <h2>
              Follow Our Youth Ministry
            </h2>

            <p className="section-subtitle">
              Stay connected with the PCEA Ngong Parish Youth Ministry
              through our social media platforms and keep up with
              our latest activities, events and announcements.
            </p>

          </div>


          <div className="youth-social-grid">


            {/* =================================================
                INSTAGRAM
            ================================================= */}

            <a
              href="https://www.instagram.com/pcea_ngong_parish_youth/"
              target="_blank"
              rel="noopener noreferrer"
              className="youth-social-card instagram-card"
            >

              <div className="youth-social-icon">
                <FaInstagram />
              </div>

              <div className="youth-social-content">

                <span>
                  FOLLOW US ON
                </span>

                <h3>
                  Instagram
                </h3>

                <p>
                  See photos, videos, events and memorable
                  moments from our Youth Ministry.
                </p>

                <strong>
                  Follow on Instagram →
                </strong>

              </div>

            </a>


            {/* =================================================
                TIKTOK
            ================================================= */}

            <a
              href="https://www.tiktok.com/@p.c.e.a.ngong.parish"
              target="_blank"
              rel="noopener noreferrer"
              className="youth-social-card tiktok-card"
            >

              <div className="youth-social-icon">
                <FaTiktok />
              </div>

              <div className="youth-social-content">

                <span>
                  FOLLOW US ON
                </span>

                <h3>
                  TikTok
                </h3>

                <p>
                  Watch our latest youth videos, activities,
                  worship moments and creative content.
                </p>

                <strong>
                  Follow on TikTok →
                </strong>

              </div>

            </a>


          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="churchschool-cta">

        <div className="container text-center">

          <span className="section-tag">
            JOIN US
          </span>

          <h2>
            Grow in Christ. Serve. Make a Difference.
          </h2>

          <p>
            We invite every young person to grow in Christ,
            build lasting friendships and use their gifts to
            serve God and the community.
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


export default Youth;