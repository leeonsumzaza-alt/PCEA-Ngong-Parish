import React from "react";
import "./MusicMinistry.css";
import { Link } from "react-router-dom";

import {
  FaMusic,
  FaChurch,
  FaUsers,
  FaPrayingHands,
  FaHandsHelping,
  FaMicrophone,
  FaBible,
  FaHeart,
  FaGuitar,
  FaCross,
  FaUserTie,
} from "react-icons/fa";

import musicBanner from "../assets/images/Hero/music-banner.jpg";


function MusicMinistry() {

  const officials = [
    {
      position: "Chairman",
      name: "Francis Njoroge Macharia",
    },
    {
      position: "Vice Chairman",
      name: "Ann Mumbi Njuguna",
    },
    {
      position: "Secretary",
      name: "Mary Nyambura Ngugi",
    },
    {
      position: "Treasurer",
      name: "John Moshe Nduru",
    },
  ];


  const committeeMembers = [
    "Margaret Njeri Kihoro",
    "Susan Wanjiku Ngumo",
    "Catherine Muthoni Tetu",
    "Jackson Wainaina Gikang'a",
    "Joseph Wanguru Njoroge",
    "Christine Njeri Gichuhi",
  ];


  const choirs = [
    {
      icon: <FaMusic />,
      title: "Upendo Voices",
      description:
        "Upendo Voices serves through worship, praise and musical ministry, using their voices to glorify God and encourage the congregation.",
      activities: [
        "Worship and praise",
        "Sunday services",
        "Special church celebrations",
        "Musical presentations",
      ],
    },
    {
      icon: <FaMicrophone />,
      title: "Melody Makers",
      description:
        "Melody Makers contributes to the worship life of the church through music, fellowship and the development of musical gifts among its members.",
      activities: [
        "Worship services",
        "Choir rehearsals",
        "Church celebrations",
        "Musical outreach",
      ],
    },
  ];


  const activities = [
    {
      icon: <FaChurch />,
      title: "Sunday Worship",
      text:
        "Leading the congregation in praise, worship and hymns during regular Sunday services.",
    },
    {
      icon: <FaMusic />,
      title: "Choir Rehearsals",
      text:
        "Regular rehearsals where members develop their musical abilities and prepare for upcoming services.",
    },
    {
      icon: <FaCross />,
      title: "Special Services",
      text:
        "Providing music during special services, celebrations, ceremonies and church occasions.",
    },
    {
      icon: <FaMicrophone />,
      title: "Worship Concerts",
      text:
        "Organizing and participating in worship concerts and musical presentations that bring the church together.",
    },
    {
      icon: <FaGuitar />,
      title: "Musical Training",
      text:
        "Encouraging members to develop their singing, instrumental and musical leadership abilities.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Ministry",
      text:
        "Using music to reach, encourage and minister to people within the church and surrounding community.",
    },
  ];


  return (
    <div className="music-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${musicBanner})`,
        }}
      >

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / MUSIC MINISTRY
              </span>

              <h1>
                Music
                <span> Ministry</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Using music and worship to glorify God and lead
                the congregation into His presence.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WELCOME
      ===================================================== */}

      <section className="music-welcome">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              MUSIC MINISTRY
            </span>

            <h2>
              Welcome to Our Music Ministry
            </h2>

            <p className="section-subtitle">
              The Music Ministry of PCEA Ngong Parish is dedicated to
              serving God through music, worship and praise. Through
              songs, hymns and musical presentations, the ministry
              leads the congregation into meaningful worship experiences
              while spreading God's message through music.
            </p>

          </div>


          <div className="music-intro-grid">

            <div className="music-intro-card">

              <div className="music-intro-icon">
                <FaMusic />
              </div>

              <h3>
                Worship Through Music
              </h3>

              <p>
                We use music to create meaningful opportunities for
                worship, praise and spiritual reflection.
              </p>

            </div>


            <div className="music-intro-card">

              <div className="music-intro-icon">
                <FaPrayingHands />
              </div>

              <h3>
                Spiritual Growth
              </h3>

              <p>
                Members are encouraged to grow spiritually through
                prayer, fellowship and faithful service.
              </p>

            </div>


            <div className="music-intro-card">

              <div className="music-intro-icon">
                <FaHeart />
              </div>

              <h3>
                Serving With Love
              </h3>

              <p>
                Every musical gift is used to serve the church and
                share the love of Christ with others.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="music-leadership">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              LEADERSHIP
            </span>

            <h2>
              Music Ministry Leadership
            </h2>

            <p className="section-subtitle">
              Our leadership provides spiritual direction, guidance
              and coordination for the Music Ministry of PCEA Ngong Parish.
            </p>

          </div>


          <div className="row g-4 justify-content-center">


            {/* Patron Elder */}

            <div className="col-lg-6 col-md-6">

              <div className="music-official-card">

                <div className="official-photo placeholder-photo">

                  <FaUsers />

                </div>

                <div className="official-info">

                  <span>
                    Patron Elder
                  </span>

                  <h3>
                    John Kiarie
                  </h3>

                  <p>
                    Provides spiritual guidance, pastoral support and
                    oversight to the Music Ministry.
                  </p>

                </div>

              </div>

            </div>


            {/* Chairperson */}

            <div className="col-lg-6 col-md-6">

              <div className="music-official-card">

                <div className="official-photo placeholder-photo">

                  <FaUserTie />

                </div>

                <div className="official-info">

                  <span>
                    Chairperson
                  </span>

                  <h3>
                    Francis Njoroge Macharia
                  </h3>

                  <p>
                    Coordinates the activities, administration and
                    programmes of the Music Ministry.
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

      <section className="music-officials">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              LEADERSHIP TEAM
            </span>

            <h2>
              Music Ministry Officials
            </h2>

            <p className="section-subtitle">
              Our elected officials coordinate the ministry and
              support the various programmes and activities throughout
              the church year.
            </p>

          </div>


          <div className="music-officials-grid">

            {officials.map((official, index) => (

              <div
                className="music-official-list-card"
                key={index}
              >

                <div className="official-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>

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

      <section className="music-committee">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              COMMITTEE
            </span>

            <h2>
              Music Committee Members
            </h2>

            <p className="section-subtitle">
              Committee members work together with the leadership
              to support the Music Ministry and its programmes.
            </p>

          </div>


          <div className="committee-grid">

            {committeeMembers.map((member, index) => (

              <div
                className="music-committee-card"
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
          CHOIRS
      ===================================================== */}

      <section className="church-choirs">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR CHOIRS
            </span>

            <h2>
              Choirs of PCEA Ngong Parish
            </h2>

            <p className="section-subtitle">
              Our choirs use their musical gifts to lead worship
              and minister through music during church services and
              special occasions.
            </p>

          </div>


          <div className="choirs-grid">

            {choirs.map((choir, index) => (

              <div
                className="choir-group-card"
                key={index}
              >

                <div className="choir-group-icon">
                  {choir.icon}
                </div>

                <span className="choir-label">
                  CHOIR MINISTRY
                </span>

                <h3>
                  {choir.title}
                </h3>

                <p>
                  {choir.description}
                </p>

                <ul>

                  {choir.activities.map((activity, activityIndex) => (

                    <li key={activityIndex}>
                      {activity}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}

      <section className="music-activities">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              WHAT WE DO
            </span>

            <h2>
              Music Ministry Activities
            </h2>

            <p className="section-subtitle">
              The Music Ministry participates in various activities
              throughout the church year.
            </p>

          </div>


          <div className="activities-grid">

            {activities.map((activity, index) => (

              <div
                className="music-activity-card"
                key={index}
              >

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

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PURPOSE
      ===================================================== */}

      <section className="music-purpose">

        <div className="container">

          <div className="purpose-card">

            <div className="purpose-icon">
              <FaBible />
            </div>

            <span className="section-tag">
              OUR PURPOSE
            </span>

            <h2>
              Worship That Glorifies God
            </h2>

            <div className="purpose-divider"></div>

            <p>
              The Music Ministry exists to use musical gifts faithfully
              in the service of God, helping the congregation worship,
              encouraging believers and proclaiming the Gospel through
              music.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="choir-gallery">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR GALLERY
            </span>

            <h2>
              Music Ministry Gallery
            </h2>

            <p className="section-subtitle">
              Moments of worship, fellowship, musical ministry and service.
            </p>

          </div>


          <div className="gallery-grid">

            <div className="gallery-card">

              <div className="gallery-placeholder">
                <FaMusic />
              </div>

              <p>
                Music Ministry photos will be added here.
              </p>

            </div>

            <div className="gallery-card">

              <div className="gallery-placeholder">
                <FaMicrophone />
              </div>

              <p>
                Worship and choir moments.
              </p>

            </div>

            <div className="gallery-card">

              <div className="gallery-placeholder">
                <FaChurch />
              </div>

              <p>
                Special church celebrations.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="music-cta">

        <div className="container text-center">

          <span className="section-tag">
            JOIN US
          </span>

          <h2>
            Use Your Gift to Worship God
          </h2>

          <p>
            Whether you sing, play an instrument or simply have a heart
            for worship, there is a place for you in the Music Ministry.
          </p>

          <Link
            to="/contact"
            className="music-btn"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </div>
  );
}

export default MusicMinistry;