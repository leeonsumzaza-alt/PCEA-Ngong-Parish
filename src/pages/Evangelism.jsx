import "./Evangelism.css";

import {
  FaBible,
  FaUsers,
  FaHandsHelping,
  FaPrayingHands,
  FaChurch,
  FaBullhorn,
  FaHeart,
  FaGlobeAfrica,
  FaUserTie,
  FaCross,
  FaPeopleArrows,
  FaBookOpen,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import evangelismBanner from "../assets/images/Hero/evangelism-banner.jpg";

// Add these images to:
// src/assets/images/Evangelism/
// import gallery1 from "../assets/images/Evangelism/evangelism1.jpg";
// import gallery2 from "../assets/images/Evangelism/evangelism2.jpg";
// import gallery3 from "../assets/images/Evangelism/evangelism3.jpg";


function Evangelism() {

  /* =====================================================
     EVANGELISM OFFICIALS
  ===================================================== */

  const officials = [
    {
      position: "Chairperson",
      name: "Rachel Watiri Nyamu",
    },
    {
      position: "Vice Chairperson",
      name: "Kate Senteiyo Nguru",
    },
    {
      position: "Secretary",
      name: "Ruth Wanjiru Kimani",
    },
    {
      position: "Vice Secretary",
      name: "Margaret Njeri Kihoro",
    },
    {
      position: "Treasurer",
      name: "Grace Wambui Munene",
    },
  ];


  /* =====================================================
     COMMITTEE MEMBERS
  ===================================================== */

  const committeeMembers = [
    "Eunice Wanjiku Muhoro",
    "Elizabeth Njoki Mwaura",
    "Susan Wanjiku Ngumo",
    "Mary Wanjiku Kamau",
    "Alice Maina",
    "Anthony Ndonga Muriu",
    "Winnie Wahu Ng'ang'a",
    "Purity Wanja Kibirichi",
    "Erick Mutwiri Mutegi",
    "Samuel Kiragu Hinga",
  ];


  /* =====================================================
     EVANGELISM ROLES
  ===================================================== */

  const roles = [
    {
      icon: <FaBullhorn />,
      title: "Gospel Outreach",
      text:
        "Sharing the message of Jesus Christ through personal evangelism, church outreach and community programmes.",
    },
    {
      icon: <FaBible />,
      title: "Discipleship",
      text:
        "Helping new and existing believers grow in their relationship with Christ through teaching, fellowship and spiritual guidance.",
    },
    {
      icon: <FaGlobeAfrica />,
      title: "Mission Outreach",
      text:
        "Participating in mission activities that take the Gospel to communities beyond the local congregation.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Service",
      text:
        "Demonstrating Christ's love through practical assistance, compassion and service to people in need.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Prayer & Intercession",
      text:
        "Praying for the church, community and those who need to hear and respond to the Gospel.",
    },
    {
      icon: <FaBookOpen />,
      title: "Evangelism Training",
      text:
        "Equipping members with the knowledge, confidence and skills needed to effectively share their faith.",
    },
  ];


  /* =====================================================
     EVANGELISM ACTIVITIES
  ===================================================== */

  const activities = [
    {
      icon: <FaBullhorn />,
      title: "Door-to-Door Evangelism",
      text:
        "Reaching households within the community with the Gospel and creating opportunities for people to learn about Christ.",
    },
    {
      icon: <FaChurch />,
      title: "Church Outreach",
      text:
        "Supporting parish outreach programmes and creating opportunities for people to encounter the love of God.",
    },
    {
      icon: <FaUsers />,
      title: "Open-Air Ministry",
      text:
        "Participating in public evangelistic gatherings where the Gospel is preached and the community is invited to respond.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Prayer Missions",
      text:
        "Organizing prayer activities focused on the church, community, missions and those who have not yet encountered Christ.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Service",
      text:
        "Combining Gospel ministry with practical acts of service that demonstrate Christian love and compassion.",
    },
    {
      icon: <FaPeopleArrows />,
      title: "Mission Trips",
      text:
        "Supporting and participating in mission visits to communities beyond the parish in partnership with other church ministries.",
    },
  ];


  /* =====================================================
     EVANGELISM PROJECTS
  ===================================================== */

  const projects = [
    {
      icon: <FaHandsHelping />,
      title: "Community Outreach",
      text:
        "Reaching vulnerable families and communities through practical support, compassion and Gospel ministry.",
    },
    {
      icon: <FaBible />,
      title: "Bible Distribution",
      text:
        "Encouraging people to engage with Scripture by making God's Word available during outreach activities.",
    },
    {
      icon: <FaUsers />,
      title: "Discipleship Groups",
      text:
        "Creating small fellowship groups where new believers can grow spiritually and develop deeper relationships with Christ.",
    },
  ];


  /* =====================================================
     ACHIEVEMENTS
  ===================================================== */

  const achievements = [
    "Participated in parish and community evangelism programmes.",
    "Supported mission and outreach activities within the parish.",
    "Reached families and individuals through community visits.",
    "Encouraged new believers through fellowship and discipleship.",
    "Supported practical community service initiatives.",
    "Mobilized members to participate in prayer and Gospel outreach.",
  ];


  /* =====================================================
     GALLERY
  ===================================================== */

  // const galleryImages = [
  //   gallery1,
  //   gallery2,
  //   gallery3,
  // ];


  return (
    <>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${evangelismBanner})`,
        }}
      >

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / EVANGELISM
              </span>

              <h1>
                Evangelism
                <span> Ministry</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Sharing the love of Christ and spreading
                the Gospel through faith, outreach and service.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="evangelism-intro">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              ABOUT EVANGELISM
            </span>

            <h2 className="intro-title">
              Reaching People With The Gospel Of Christ
            </h2>

            <p className="intro-text">
              The Evangelism Ministry of PCEA Ngong Parish is committed
              to sharing the message of Jesus Christ within the church,
              the community and beyond.
            </p>

            <p className="intro-text">
              Through outreach, discipleship and acts of service,
              we seek to bring people closer to God and encourage
              spiritual transformation.
            </p>

          </div>


          <div className="intro-cards">

            <div className="intro-card">

              <div className="intro-icon">
                <FaCross />
              </div>

              <h3>
                Proclaim Christ
              </h3>

              <p>
                Sharing the Gospel and pointing people to the saving
                grace of Jesus Christ.
              </p>

            </div>


            <div className="intro-card">

              <div className="intro-icon">
                <FaUsers />
              </div>

              <h3>
                Build Disciples
              </h3>

              <p>
                Helping believers grow in faith and become committed
                followers of Christ.
              </p>

            </div>


            <div className="intro-card">

              <div className="intro-icon">
                <FaHeart />
              </div>

              <h3>
                Serve Others
              </h3>

              <p>
                Demonstrating God's love through practical service
                and compassionate ministry.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="evangelism-officials">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              LEADERSHIP
            </span>

            <h2>
              Evangelism Leadership
            </h2>

            <p>
              Our Evangelism Ministry is guided by dedicated leaders
              committed to spreading the Gospel and serving the community.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {/* Elder */}

            <div className="col-lg-5 col-md-6">

              <div className="official-card">

                <div className="official-image placeholder-image">

                  <FaUserTie />

                </div>

                <div className="official-content">

                  <span>
                    Elder in Charge
                  </span>

                  <h3>
                    ANTHONY NG’ANG’A
                  </h3>

                  <p>
                    Provides spiritual oversight and guidance to the
                    Evangelism Ministry while encouraging members in
                    Gospel outreach and discipleship.
                  </p>

                </div>

              </div>

            </div>


            {/* Chairperson */}

            <div className="col-lg-5 col-md-6">

              <div className="official-card">

                <div className="official-image placeholder-image">

                  <FaUsers />

                </div>

                <div className="official-content">

                  <span>
                    Chairperson
                  </span>

                  <h3>
                    RACHAEL WATIRI NYAMU
                  </h3>

                  <p>
                    Coordinates evangelism programmes, outreach activities
                    and ministry initiatives throughout the parish.
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

      <section className="evangelism-officials-list">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR TEAM
            </span>

            <h2>
              Evangelism Officials
            </h2>

            <p>
              Our elected officials help coordinate evangelism programmes
              and support the ministry throughout the church year.
            </p>

          </div>


          <div className="officials-list">

            {officials.map((official, index) => (

              <div
                className="official-list-item"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>

                  <h4>
                    {official.position}
                  </h4>

                  <p>
                    {official.name}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMITTEE
      ===================================================== */}

      <section className="education-officials">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR TEAM
            </span>

            <h2>
              Evangelism Committee Members
            </h2>

            <p>
              Committee members support the leadership in organizing
              outreach, missions, discipleship and community programmes.
            </p>

          </div>


          <div className="officials-list">

            {committeeMembers.map((member, index) => (

              <div
                className="education-official-item"
                key={index}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>

                  <p>
                    {member}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ROLES
      ===================================================== */}

      <section className="evangelism-roles">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR ROLE
            </span>

            <h2>
              Roles of the Evangelism Ministry
            </h2>

            <p>
              The Evangelism Ministry seeks to reach people with the
              Gospel while demonstrating the love of Christ through
              practical service.
            </p>

          </div>


          <div className="row g-4">

            {roles.map((role, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="role-card">

                  <div className="role-icon">
                    {role.icon}
                  </div>

                  <h3>
                    {role.title}
                  </h3>

                  <p>
                    {role.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="evangelism-activities">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              WHAT WE DO
            </span>

            <h2>
              Evangelism Activities
            </h2>

            <p>
              Through a variety of activities, the ministry creates
              opportunities for people to hear the Gospel and experience
              Christian fellowship and service.
            </p>

          </div>


          <div className="row g-4">

            {activities.map((activity, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="activity-card">

                  <div className="activity-icon">
                    {activity.icon}
                  </div>

                  <h3>
                    {activity.title}
                  </h3>

                  <p>
                    {activity.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="evangelism-projects">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              MINISTRY INITIATIVES
            </span>

            <h2>
              Evangelism Projects
            </h2>

            <p>
              Our ministry supports practical initiatives that combine
              Gospel outreach with discipleship and community service.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {projects.map((project, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="project-card">

                  <div className="project-icon">
                    {project.icon}
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="evangelism-achievements">

        <div className="container">

          <div className="achievement-wrapper">

            <div className="achievement-icon">
              <FaCross />
            </div>

            <span className="section-tag">
              OUR JOURNEY
            </span>

            <h2>
              Evangelism Ministry Achievements
            </h2>

            <p className="achievement-intro">
              Through the commitment of our members and leaders,
              the Evangelism Ministry continues to serve the church
              and reach the wider community.
            </p>

            <div className="achievement-divider"></div>

            <div className="achievement-grid">

              {achievements.map((achievement, index) => (

                <div
                  className="achievement-item"
                  key={index}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>
                    {achievement}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="evangelism-gallery">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR GALLERY
            </span>

            <h2>
              Evangelism Ministry Gallery
            </h2>

            <p>
              Moments of outreach, fellowship, service and Gospel ministry
              within PCEA Ngong Parish.
            </p>

          </div>


          {/* <div className="row g-4">

            {galleryImages.map((image, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="gallery-card">

                  <img
                    src={image}
                    alt={`Evangelism Ministry activity ${index + 1}`}
                    className="gallery-image"
                  />

                </div>

              </div>

            ))}

          </div> */}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="evangelism-cta">

        <div className="container text-center">

          <span className="section-tag">
            JOIN THE MISSION
          </span>

          <h2>
            Go Into All The World
          </h2>

          <p>
            Be part of the Evangelism Ministry as we share the Gospel,
            serve our community and help people grow in their relationship
            with Jesus Christ.
          </p>

          <Link
            to="/contact"
            className="evangelism-btn"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </>
  );
}


export default Evangelism;