import "./MenMinistry.css";
import { Link } from "react-router-dom";

import {
  FaBible,
  FaUsers,
  FaCross,
  FaHandsHelping,
  FaChurch,
  FaUserTie,
  FaHandshake,
  FaBookOpen,
} from "react-icons/fa";

import pcmfBanner from "../assets/images/Hero/pcmf-banner.jpg";

import gallery1 from "../assets/images/PCMF/pcmf1.jpg";
import gallery2 from "../assets/images/PCMF/pcmf2.jpg";
import gallery3 from "../assets/images/PCMF/pcmf3.jpg";


function MensMinistry() {

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
  ];


  const officials = [
    {
      position: "Chairperson",
      name: "John Kageni Kimani",
    },
    {
      position: "Vice Chairperson",
      name: "Evans Kaburu Mutiga",
    },
    {
      position: "Secretary",
      name: "Charles Thairu Nyamu",
    },
    {
      position: "Vice Secretary",
      name: "Patrick Munyingi Maina",
    },
    {
      position: "Treasurer",
      name: "David Nderitu Gitahi",
    },
    {
      position: "Vice Treasurer",
      name: "Kelvin Sitonik Ledama",
    },
  ];


  const committeeMembers = [
    "Samuel Muchiri Kibuku",
    "Joseph Njoroge Wanguru",
    "Simon Leteipa Sikawa",
    "Samuel Muriithi Ndereba",
    "Peter Muturi Giturwa",
    "Isaac Kimani Waruingi",
    "Peter Githinji Ngare",
    "Charles Theuri Nyamu",
    "Paul Kimani Wangari",
  ];


  const rolesLeft = [
    "Encourage men to grow spiritually through prayer and Bible study.",
    "Promote Christian discipleship and personal spiritual development.",
    "Prepare men to become godly leaders in their families.",
    "Encourage active participation in church ministry and service.",
  ];


  const rolesRight = [
    "Support evangelism and Christian outreach.",
    "Promote fellowship and brotherhood among men.",
    "Serve the church and wider community through development projects.",
    "Encourage men to live as responsible Christian role models.",
  ];


  const membershipLevels = [
    {
      icon: <FaBookOpen />,
      title: "Card Level",
      description:
        "This is the entry level for every man joining the Church. Upon joining, a member is issued with a membership card and begins a holistic journey covering spiritual growth, fellowship and godly values.",
    },
    {
      icon: <FaHandshake />,
      title: "Badge Level",
      description:
        "After making notable progress at the Card Level and being registered in the Holy Communion Register, a member is awarded the PCMF Badge, recognizing him as an ambassador of the fellowship.",
    },
    {
      icon: <FaUserTie />,
      title: "Tie Level",
      description:
        "This is the highest level of membership. During a church ceremony officiated by the Parish Minister, members receive the PCMF Tie and Maroon Blazer as symbols of full membership.",
    },
  ];


  const achievements = [
    "Supporting church development and community initiatives.",
    "Mentoring men to become faithful Christian leaders.",
    "Supporting evangelism and outreach within the parish and beyond.",
    "Encouraging fellowship and brotherhood among men.",
    "Supporting church programmes through volunteer service.",
  ];


  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${pcmfBanner})`,
        }}
      >

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / PCMF
              </span>

              <h1>
                Presbyterian Church
                <span> Men's Fellowship</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Building men of faith, leadership and service for Christ.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WELCOME
      ===================================================== */}

      <section className="pcmf-welcome">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR MEN
            </span>

            <h2>
              Welcome to PCMF
            </h2>

            <p className="section-subtitle">
              The Presbyterian Church Men's Fellowship equips men to
              become faithful followers of Christ, godly leaders in
              their families, active servants in the church and positive
              influences within the community.
            </p>

          </div>


          <div className="welcome-grid">

            <div className="welcome-card">

              <div className="welcome-icon">
                <FaBible />
              </div>

              <h4>
                Spiritual Growth
              </h4>

              <p>
                Encouraging men to deepen their relationship with God
                through Bible study, prayer and Christian discipleship.
              </p>

            </div>


            <div className="welcome-card">

              <div className="welcome-icon">
                <FaUsers />
              </div>

              <h4>
                Brotherhood
              </h4>

              <p>
                Building strong relationships among men through
                fellowship, encouragement and shared Christian values.
              </p>

            </div>


            <div className="welcome-card">

              <div className="welcome-icon">
                <FaHandsHelping />
              </div>

              <h4>
                Service & Leadership
              </h4>

              <p>
                Equipping men to serve Christ, lead their families and
                contribute positively to the church and community.
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
              PCMF Leadership
            </h2>

            <p className="section-subtitle">
              The Presbyterian Church Men's Fellowship is guided by
              dedicated leaders who provide spiritual direction,
              coordination and servant leadership.
            </p>

          </div>


          <div className="row g-4">

            {/* Elder */}

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
                    Grishon Ngugi Gikonyo
                  </h3>

                  <p>
                    Provides spiritual oversight and supports the
                    spiritual growth and development of the men's
                    fellowship.
                  </p>

                </div>

              </div>

            </div>


            {/* Chairman */}

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
                    John Kageni Kimani
                  </h3>

                  <p>
                    Coordinates PCMF activities, programmes and
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
              PCMF LEADERSHIP
            </span>

            <h2>
              PCMF Officials
            </h2>

            <p className="section-subtitle">
              Our elected officials help coordinate the fellowship
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
              These members support the PCMF leadership in planning,
              coordinating and implementing fellowship programmes.
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
          ROLES
      ===================================================== */}

      <section className="mission-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR PURPOSE
            </span>

            <h2>
              Roles of PCMF
            </h2>

            <p className="section-subtitle">
              PCMF seeks to nurture men in faith while equipping them
              to lead, serve and make a positive difference in the
              church, their families and the wider community.
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
          MEMBERSHIP
      ===================================================== */}

      <section className="membership-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              MEMBERSHIP
            </span>

            <h2>
              How to Join PCMF
            </h2>

            <p className="section-subtitle">
              Membership provides men with an opportunity to grow
              spiritually, build meaningful relationships and serve
              Christ through the fellowship.
            </p>

          </div>


          <div className="membership-grid">

            {membershipLevels.map((level, index) => (

              <div
                className="membership-card"
                key={index}
              >

                <div className="membership-icon">
                  {level.icon}
                </div>

                <span className="membership-number">
                  0{index + 1}
                </span>

                <h3>
                  {level.title}
                </h3>

                <p>
                  {level.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OBLIGATIONS
      ===================================================== */}

      <section className="obligations-section">

        <div className="container">

          <div className="obligations-card">

            <div className="obligations-icon">
              <FaChurch />
            </div>

            <div className="obligations-content">

              <span className="section-tag">
                MEMBERSHIP COMMITMENT
              </span>

              <h2>
                Obligations Upon Joining
              </h2>

              <p>
                Every member of PCMF is encouraged to actively
                participate in the life of the fellowship and support
                the mission of the church.
              </p>


              <div className="obligations-list">

                <div>
                  <span>01</span>
                  <p>Attend fellowship meetings regularly.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Support church and community activities.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Participate in evangelism and outreach.</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Live as a Christian role model.</p>
                </div>

                <div>
                  <span>05</span>
                  <p>
                    Make annual contributions as agreed at the
                    beginning of each Church calendar year.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      <section className="achievements-section">

        <div className="container">

          <div className="achievement-card">

            <div className="achievement-icon">
              <FaCross />
            </div>

            <span className="section-tag">
              OUR JOURNEY
            </span>

            <h2>
              PCMF Achievements
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
              PCMF Gallery
            </h2>

            <p className="section-subtitle">
              Highlights of fellowship, worship, conferences,
              outreach and ministry activities.
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
                  alt={`PCMF activity ${index + 1}`}
                  className="gallery-image"
                />

              </div>

            ))}

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
            Grow in Christ. Lead. Serve. Make a Difference.
          </h2>

          <p>
            Become part of a fellowship of men committed to growing
            in Christ, serving the church and positively impacting
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


export default MensMinistry;