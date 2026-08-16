import "./WomansGuild.css";
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
  FaFemale,
  FaHandHoldingHeart,
  FaBookOpen,
} from "react-icons/fa";

import womansBanner from "../assets/images/Hero/womans-banner.jpg";

// import gallery1 from "../assets/images/WomansGuild/womans1.jpg";
// import gallery2 from "../assets/images/WomansGuild/womans2.jpg";
// import gallery3 from "../assets/images/WomansGuild/womans3.jpg";


function WomenGuild() {

  // const galleryImages = [
  //   gallery1,
  //   gallery2,
  //   gallery3,
  // ];


  /* =====================================================
      GUILD OFFICIALS
  ===================================================== */

  const officials = [
    {
      position: "Chairperson",
      name: "Virginia W. Macharia",
    },
    {
      position: "Vice Chairperson",
      name: "Eunice Munyingi",
    },
    {
      position: "Secretary",
      name: "Mercy Wanja Muchai",
    },
    {
      position: "Vice Secretary",
      name: "Joyce Githinji",
    },
    {
      position: "Treasurer",
      name: "Lydia Muthoni Muchai",
    },
  ];


  /* =====================================================
      COMMITTEE MEMBERS
  ===================================================== */

  const committeeMembers = [
    "Agnes Tanei Partet",
    "Millicent Naisimoi",
    "Eunice Wambui Chege",
    "Chrstine Njeri Gichuhi",
    "Martha Warui Muchira",
    "Grace Wairimu Githiora",
    "Winnie Wahu Nganga",
    "Alice Wambui Njengi",
    "Ruth Wanjira Thairu",
    "Margaret Nyaguthii Macharia",
  ];


  /* =====================================================
      ROLES
  ===================================================== */

  const roles = [
    {
      icon: <FaPrayingHands />,
      title: "Prayer & Spiritual Growth",
      description:
        "Leading women in prayer, worship, Bible study and spiritual growth while encouraging a deeper relationship with Christ.",
    },
    {
      icon: <FaUsers />,
      title: "Mentorship",
      description:
        "Mentoring young women and strengthening Christian families through guidance, fellowship and encouragement.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Christian Service",
      description:
        "Serving the church and community through compassion, outreach, care and practical acts of Christian love.",
    },
  ];


  /* =====================================================
      ACTIVITIES
  ===================================================== */

  const activities = [
    "Prayer Meetings",
    "Bible Study Fellowship",
    "Hospital Visitation",
    "Evangelism",
    "Mentorship Programs",
    "Women's Conferences",
    "Retreats",
    "Community Outreach",
    "Family Life Seminars",
  ];


  /* =====================================================
      PROJECTS
  ===================================================== */

  const projects = [
    {
      icon: <FaChurch />,
      title: "Church Support",
      description:
        "Supporting church development, ministry programmes and activities that strengthen the work of the church.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Community Care",
      description:
        "Supporting vulnerable families and people in need through compassion, care and practical assistance.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Mission Work",
      description:
        "Participating in evangelism, outreach and community programmes that share the love of Christ.",
    },
  ];


  /* =====================================================
      ACHIEVEMENTS
  ===================================================== */

  const achievements = [
    "Supporting church development and ministry programmes.",
    "Participating in evangelism and community outreach.",
    "Strengthening fellowship among women in the church.",
    "Supporting vulnerable families and members of the community.",
    "Mentoring women and young girls in Christian faith and values.",
  ];


  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${womansBanner})`,
        }}
      >

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / WOMAN'S GUILD
              </span>

              <h1>
                Presbyterian Woman's
                <span> Guild</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Serving Christ through faith,
                fellowship and compassionate ministry.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WELCOME
      ===================================================== */}

      <section className="guild-welcome">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR WOMEN
            </span>

            <h2>
              Welcome to the Woman's Guild
            </h2>

            <p className="section-subtitle">
              The Woman's Guild is a ministry dedicated to nurturing
              women spiritually, emotionally and socially through
              prayer, Bible study, fellowship and service to God
              and the community.
            </p>

          </div>


          <div className="welcome-grid">

            <div className="welcome-card">

              <div className="welcome-icon">
                <FaBible />
              </div>

              <h4>
                Biblical Growth
              </h4>

              <p>
                Women are encouraged to study God's Word and grow
                spiritually through biblical teaching and discipleship.
              </p>

            </div>


            <div className="welcome-card">

              <div className="welcome-icon">
                <FaPrayingHands />
              </div>

              <h4>
                Prayer & Worship
              </h4>

              <p>
                We encourage women to develop a deeper relationship
                with God through prayer, worship and fellowship.
              </p>

            </div>


            <div className="welcome-card">

              <div className="welcome-icon">
                <FaHeart />
              </div>

              <h4>
                Fellowship & Service
              </h4>

              <p>
                Women build meaningful relationships while serving
                Christ, the church and the wider community.
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
              Guild Leadership
            </h2>

            <p className="section-subtitle">
              The Woman's Guild is guided by dedicated leaders who
              provide spiritual guidance, coordination and servant
              leadership within the ministry.
            </p>

          </div>


          <div className="row g-4">


            {/* Elder in Charge */}

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
                    Virginia W. Macharia
                  </h3>

                  <p>
                    Provides spiritual oversight, guidance and
                    support to the Woman's Guild.
                  </p>

                </div>

              </div>

            </div>


            {/* Chairwoman */}

            <div className="col-lg-6">

              <div className="official-card">

                <div className="official-image placeholder-image">

                  <FaFemale />

                </div>

                <div className="official-content">

                  <span>
                    Chairwoman
                  </span>

                  <h3>
                    Agnes Wangu Mutahi
                  </h3>

                  <p>
                    Coordinates Guild programmes, meetings and
                    ministry activities throughout the year.
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
              WOMAN'S GUILD
            </span>

            <h2>
              Guild Officials
            </h2>

            <p className="section-subtitle">
              Our elected officials help coordinate the ministry
              and lead various programmes and activities throughout
              the year.
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
              These members support the Woman's Guild leadership
              in planning and implementing ministry programmes
              and activities.
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
          MEMBERSHIP
      ===================================================== */}

      <section className="membership-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              MEMBERSHIP
            </span>

            <h2>
              Becoming a Member
            </h2>

            <p className="section-subtitle">
              The Woman's Guild welcomes women and young ladies
              who desire to grow in faith, fellowship and Christian
              service.
            </p>

          </div>


          <div className="membership-grid">

            <div className="membership-card">

              <div className="membership-icon">
                <FaFemale />
              </div>

              <span className="membership-number">
                01
              </span>

              <h3>
                Membership
              </h3>

              <p>
                Guild membership is open to all women and girls
                who are committed to serving Christ. Any woman or
                young lady who desires to grow in faith and fellowship
                is welcome to join the Guild.
              </p>

            </div>


            <div className="membership-card">

              <div className="membership-icon">
                <FaUsers />
              </div>

              <span className="membership-number">
                02
              </span>

              <h3>
                Fellowship Journey
              </h3>

              <p>
                A prospective member is expected to fellowship with
                other Guild members for a period of two years while
                participating in the life and activities of the ministry.
              </p>

            </div>


            <div className="membership-card">

              <div className="membership-icon">
                <FaCross />
              </div>

              <span className="membership-number">
                03
              </span>

              <h3>
                Dedication
              </h3>

              <p>
                After completing the fellowship period, members are
                dedicated during a special church service officiated
                by the Moderator and are presented with the Guild
                head-scarf as a symbol of membership.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROLES
      ===================================================== */}

      <section className="mission-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR PURPOSE
            </span>

            <h2>
              Roles of the Woman's Guild
            </h2>

            <p className="section-subtitle">
              The Woman's Guild seeks to nurture women in faith
              while equipping them to serve God, the church,
              their families and the wider community.
            </p>

          </div>


          <div className="roles-grid">

            {roles.map((role, index) => (

              <div
                className="role-card"
                key={index}
              >

                <div className="role-icon">
                  {role.icon}
                </div>

                <span className="role-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>
                  {role.title}
                </h3>

                <p>
                  {role.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="activities-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              GUILD ACTIVITIES
            </span>

            <h2>
              Activities & Programmes
            </h2>

            <p className="section-subtitle">
              Through fellowship, learning and service, women are
              given opportunities to grow spiritually and positively
              impact the church and community.
            </p>

          </div>


          <div className="activities-grid">

            {activities.map((activity, index) => (

              <div
                className="activity-item"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <FaBookOpen />

                <p>
                  {activity}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="projects-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR WORK
            </span>

            <h2>
              Guild Projects
            </h2>

            <p className="section-subtitle">
              Our projects allow members to put their faith into
              action by supporting the church, families and the
              wider community.
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
              Woman's Guild Achievements
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
              Woman's Guild Gallery
            </h2>

            <p className="section-subtitle">
              Moments of worship, fellowship, service and growth
              within the Woman's Guild.
            </p>

          </div>


          {/* <div className="gallery-grid">

            {galleryImages.map((image, index) => (

              <div
                className="gallery-card"
                key={index}
              >

                <img
                  src={image}
                  alt={`Woman's Guild activity ${index + 1}`}
                  className="gallery-image"
                />

              </div>

            ))}

          </div> */}

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
            Grow in Faith. Serve. Fellowship.
          </h2>

          <p>
            We warmly welcome every woman to grow in faith,
            fellowship, worship and service through the
            Woman's Guild.
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


export default WomenGuild;