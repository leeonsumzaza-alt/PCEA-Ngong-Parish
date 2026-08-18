import "./Brigade.css";
import { Link } from "react-router-dom";

import {
  FaBible,
  FaUsers,
  FaHandsHelping,
  FaChild,
  FaHeart,
  FaPrayingHands,
  FaChurch,
  FaFutbol,
  FaCross,
  FaUserTie,
} from "react-icons/fa";

import brigadeBanner from "../assets/images/Hero/brigade-banner.jpg";

// import gallery1 from "../assets/images/Brigade/brigade1.jpg";
// import gallery2 from "../assets/images/Brigade/brigade2.jpg";
// import gallery3 from "../assets/images/Brigade/brigade3.jpg";


function Brigade() {

  // const galleryImages = [
  //   gallery1,
  //   gallery2,
  //   gallery3,
  // ];


  const officials = [
    {
      position: "Chairperson",
      name: "David Githinji Murage",
    },
    {
      position: "Vice Chairperson",
      name: "Grace Naomi Wagikuyu",
    },
    {
      position: "Secretary",
      name: "Immaculate Salaon Kashorda",
    },
    {
      position: "Vice Secretary",
      name: "Evans Karatu Maina",
    },
    {
      position: "Treasurer",
      name: "Sally Jepkosgei Yator",
    },
    {
      position: "Boys Captain",
      name: "Kenneth Gitonga Murungi",
    },
    {
      position: "Girls Captain",
      name: "Alice Wamunyu Ndonga",
    },
  ];


  const committeeMembers = [
    "Florence Wanjiru Mukuna",
    "Masharen Kikanae",
    "Lucy Wanjiku Mwangi",
    "Esther Kainda Mutwerandu",
    "Felister Gathoni Mungai",
  ];


  const rolesLeft = [
    "Promote Christian faith and spiritual growth.",
    "Develop discipline and responsible character.",
    "Encourage Bible study, prayer and worship.",
    "Prepare young people for Christian leadership.",
  ];


  const rolesRight = [
    "Encourage teamwork and fellowship.",
    "Develop practical skills and talents.",
    "Participate in community service.",
    "Promote responsible Christian citizenship.",
  ];


  const activities = [
    {
      icon: <FaBible />,
      title: "Bible Teaching",
      text:
        "The Brigade encourages young people to grow spiritually through Bible study, devotion and Christian teaching.",
    },
    {
      icon: <FaUsers />,
      title: "Leadership Development",
      text:
        "Members are trained to become responsible leaders who serve God, the church and society.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Service",
      text:
        "The Brigade participates in acts of service, helping others and showing Christ's love through action.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Prayer & Worship",
      text:
        "Members are encouraged to develop a strong prayer life and participate actively in Christian worship.",
    },
    {
      icon: <FaFutbol />,
      title: "Sports & Recreation",
      text:
        "Sports and recreational activities promote teamwork, discipline, friendship and healthy development.",
    },
    {
      icon: <FaChild />,
      title: "Character Development",
      text:
        "Young people are guided to develop good character, discipline, confidence and respect for others.",
    },
  ];


  const projects = [
    {
      icon: <FaChurch />,
      title: "Church Service",
      description:
        "Supporting church programmes and participating actively in worship and ministry activities.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Outreach",
      description:
        "Taking part in activities that support families, children and people within the wider community.",
    },
    {
      icon: <FaUsers />,
      title: "Leadership Training",
      description:
        "Equipping young people with leadership skills, discipline and confidence to serve others.",
    },
  ];


  const achievements = [
    "Participated in church and community service activities.",
    "Organized youth fellowship and recreational activities.",
    "Participated in sports and Brigade competitions.",
    "Developed young people through leadership and discipline training.",
    "Supported church programmes and community outreach initiatives.",
  ];


  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${brigadeBanner})`,
        }}
      >

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / BRIGADE
              </span>

              <h1>
                PCEA
                <span> Brigade</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Training young people in discipline, faith,
                leadership and Christian service.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WELCOME
      ===================================================== */}

      <section className="brigade-welcome">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              ABOUT BRIGADE
            </span>

            <h2>
              Nurturing Young People for Christ
            </h2>

            <p className="section-subtitle">
              The PCEA Boys & Girls Brigade is a ministry dedicated
              to guiding young people in their spiritual growth,
              character development and service to God and the community.
              Through Christian teaching, discipline and fellowship,
              members are equipped to become responsible and faithful
              servants.
            </p>

          </div>


          <div className="welcome-grid">

            <div className="welcome-card">

              <div className="welcome-icon">
                <FaBible />
              </div>

              <h4>
                Christian Teaching
              </h4>

              <p>
                Members learn God's Word and are encouraged to develop
                a strong foundation of Christian faith.
              </p>

            </div>


            <div className="welcome-card">

              <div className="welcome-icon">
                <FaUsers />
              </div>

              <h4>
                Fellowship
              </h4>

              <p>
                Young people build meaningful friendships while growing
                together in a Christ-centred environment.
              </p>

            </div>


            <div className="welcome-card">

              <div className="welcome-icon">
                <FaHandsHelping />
              </div>

              <h4>
                Service
              </h4>

              <p>
                The Brigade teaches young people to serve God, the church
                and their communities with humility and dedication.
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
              Boys & Girls Brigade Leadership
            </h2>

            <p className="section-subtitle">
              The Boys & Girls Brigade is guided by dedicated leaders
              who provide spiritual direction, coordination and servant
              leadership.
            </p>

          </div>


          <div className="row g-4">

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
                    Martin Rianto Tiampati
                  </h3>

                  <p>
                    Provides spiritual oversight and guidance while
                    supporting the spiritual development of Brigade members.
                  </p>

                </div>

              </div>

            </div>


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
                    David Githinji Murage
                  </h3>

                  <p>
                    Coordinates Brigade activities, programmes and
                    initiatives throughout the year.
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
              BRIGADE
            </span>

            <h2>
              Brigade Officials
            </h2>

            <p className="section-subtitle">
              Our elected officials help coordinate the Brigade and
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
              These members support Brigade leadership in planning
              and implementing ministry activities.
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
          MOTTOS
      ===================================================== */}

      <section className="brigade-mottos">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR MOTTO
            </span>

            <h2>
              Boys & Girls Brigade
            </h2>

            <p className="section-subtitle">
              Our mottos remind members of their calling to live
              faithfully and serve others.
            </p>

          </div>


          <div className="mottos-grid">

            <div className="motto-card boys-motto">

              <div className="motto-icon">
                <FaChild />
              </div>

              <span>
                BOYS BRIGADE
              </span>

              <h3>
                Sure and Steadfast
              </h3>

            </div>


            <div className="motto-card girls-motto">

              <div className="motto-icon">
                <FaHeart />
              </div>

              <span>
                GIRLS BRIGADE
              </span>

              <h3>
                Seek, Serve and Follow Christ
              </h3>

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
              Roles of the Brigade
            </h2>

            <p className="section-subtitle">
              The Brigade seeks to nurture young people in faith,
              discipline and service while preparing them for
              responsible Christian leadership.
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
          ACTIVITIES
      ===================================================== */}

      <section className="activities-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR ACTIVITIES
            </span>

            <h2>
              What We Do
            </h2>

            <p className="section-subtitle">
              Through Christian teaching, fellowship, recreation and
              service, Brigade members develop spiritually and personally.
            </p>

          </div>


          <div className="projects-grid">

            {activities.map((item, index) => (

              <div
                className="project-card"
                key={index}
              >

                <div className="project-icon">
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


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="projects-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR PROJECTS
            </span>

            <h2>
              Brigade Projects
            </h2>

            <p className="section-subtitle">
              Our members participate in practical projects that
              strengthen the church, develop young people and serve
              the wider community.
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
              Brigade Achievements
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
              Brigade Gallery
            </h2>

            <p className="section-subtitle">
              Moments of fellowship, training, worship, service
              and activities within the Brigade.
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
                  alt={`Brigade activity ${index + 1}`}
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
            Grow in Faith. Serve. Lead.
          </h2>

          <p>
            We welcome young people to become part of the Brigade,
            grow in Christ, develop their gifts and serve God and
            the community.
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


export default Brigade;