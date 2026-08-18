import "./Development.css";

import {
  FaUserTie,
  FaBuilding,
  FaHardHat,
  FaChurch,
  FaArrowRight,
} from "react-icons/fa";

// import developmentBanner from "../assets/images/Hero/development-banner.jpg";
// import developmentChairman from "../assets/images/Leaders/development-chairman.jpg";

function Development() {

  /* =====================================================
     COMMITTEE MEMBERS
  ===================================================== */

  const members = [
    "Member Name",
    "Member Name",
    "Member Name",
    "Member Name",
    "Member Name",
    "Member Name",
    "Member Name",
    "Member Name",
  ];


  /* =====================================================
     CHURCH PROJECTS
  ===================================================== */

  const projects = [
    {
      icon: <FaBuilding />,
      title: "Church Development",
      text:
        "Development and improvement of church facilities and infrastructure."
    },

    {
      icon: <FaChurch />,
      title: "Church Facilities",
      text:
        "Supporting projects that improve spaces used for worship, fellowship and ministry."
    },

    {
      icon: <FaHardHat />,
      title: "Future Projects",
      text:
        "Planning and coordinating future development projects for the growth of PCEA Ngong Parish."
    },
  ];


  return (
    <>

      {/* =====================================================
          DEVELOPMENT HERO
      ===================================================== */}

      <section
        className="about-hero"
        // style={{
        //   backgroundImage: `url(${developmentBanner})`,
        // }}
      >

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / DEVELOPMENT COMMITTEE
              </span>

              <h1>
                Development
                <span> Committee</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Building and improving our church for the
                growth and future of God's work.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHAIRMAN
      ===================================================== */}

      <section className="development-chairman">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              DEVELOPMENT COMMITTEE
            </span>

            <h2>
              Committee Chairman
            </h2>

          </div>


          <div className="chairman-card">

            <div className="chairman-image">

              {/* <img
                src={developmentChairman}
                alt="Development Committee Chairman"
              /> */}

            </div>


            <div className="chairman-content">

              <span className="chairman-role">
                CHAIRMAN
              </span>

              <h3>
                CHAIRMAN NAME
              </h3>

              <p>
                The Development Committee Chairman provides
                leadership and coordination for the development
                projects of PCEA Ngong Parish.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          COMMITTEE MEMBERS
      ===================================================== */}

      <section className="development-members">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR TEAM
            </span>

            <h2>
              Committee Members
            </h2>

          </div>


          <div className="members-grid">

            {members.map((member, index) => (

              <div
                className="member-card"
                key={index}
              >

                <span className="member-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <FaUserTie />

                <h4>
                  {member}
                </h4>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CHURCH PROJECTS
      ===================================================== */}

      <section className="development-projects">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              CHURCH DEVELOPMENT
            </span>

            <h2>
              Church Projects
            </h2>

            <p>
              Projects that support the growth, development and
              long-term needs of PCEA Ngong Parish.
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
                  {project.text}
                </p>

                <span className="project-arrow">
                  <FaArrowRight />
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>

  );
}

export default Development;