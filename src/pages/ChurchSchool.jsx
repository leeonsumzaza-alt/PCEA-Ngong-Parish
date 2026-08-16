import "./ChurchSchool.css";
import { Link } from "react-router-dom";
import {
  FaBible,
  FaChild,
  FaUsers,
  FaPrayingHands,
  FaMusic,
  FaFutbol,
  FaChalkboardTeacher,
  FaHeart,
  FaCross,
} from "react-icons/fa";

import childrenministryBanner from "../assets/images/Hero/childrenministry-banner.jpg";

import gallery1 from "../assets/images/ChurchSchool/kids1.jpg";
import gallery2 from "../assets/images/ChurchSchool/kids2.jpg";
import gallery3 from "../assets/images/ChurchSchool/kids3.jpg";


function ChurchSchool() {

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
  ];


  const ageGroups = [
    {
      title: "Toddlers",
      age: "2 – 4 Years",
      icon: <FaChild />,
      description:
        "Helping our youngest children begin learning about God's love through simple Bible lessons, songs and activities.",
    },
    {
      title: "Junior",
      age: "5 – 8 Years",
      icon: <FaBible />,
      description:
        "Building a strong foundation of faith through Bible stories, prayer, memory verses and Christian fellowship.",
    },
    {
      title: "Intermediate",
      age: "9 – 12 Years",
      icon: <FaUsers />,
      description:
        "Encouraging children to understand God's Word, develop their faith and grow in Christian character.",
    },
    {
      title: "Teens",
      age: "13 – 17 Years",
      icon: <FaPrayingHands />,
      description:
        "Equipping young people to grow spiritually, make godly choices and live out their faith in everyday life.",
    },
  ];


  const officials = [
    {
      position: "Chairperson",
      name: "Diana Nyakabete Kimondo",
    },
    {
      position: "Vice Chairperson",
      name: "Teresia Waithira Njenga",
    },
    {
      position: "Secretary",
      name: "Ann Ndiko Karuithie",
    },
    {
      position: "Vice Secretary",
      name: "Felister Gathoni Mungai",
    },
    {
      position: "Treasurer",
      name: "Susan Watare Murigu",
    },
  ];


  const committeeMembers = [
    "Anastacia Njambi Kariuki",
    "Diana Mbeyu Gichangi",
    "Ann Wanjiru Kinaro",
    "Gladys Wairimu Mathenge",
  ];


  const activitiesLeft = [
    "Sunday Church School Classes",
    "Children's Sunday Service",
    "Daily Vacation Bible School (DVBS)",
    "Bible Quiz Competitions",
    "Memory Verse Recitation",
  ];


  const activitiesRight = [
    "Children's Choir Ministry",
    "Prayer Meetings",
    "Fun Days & Sports",
    "Holiday Camps",
    "Parents & Teachers Fellowship",
  ];


  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${childrenministryBanner})`,
        }}
      >

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / CHURCH SCHOOL
              </span>

              <h1>
                Church School
                <span> Ministry</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Growing children in Christ through biblical teaching,
                worship, fellowship and Christian service.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WELCOME
      ===================================================== */}

      <section className="churchschool-welcome">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR CHILDREN
            </span>

            <h2>
              Welcome to Church School
            </h2>

            <p className="section-subtitle">
              Our Church School Ministry provides a safe, loving and
              Christ-centred environment where children can learn God's
              Word, develop their faith and grow together as followers
              of Jesus Christ.
            </p>

          </div>


          <div className="welcome-grid">

            <div className="welcome-card">

              <div className="welcome-icon">
                <FaBible />
              </div>

              <h4>Biblical Teaching</h4>

              <p>
                Children are taught God's Word in ways that are
                meaningful and appropriate for their age.
              </p>

            </div>


            <div className="welcome-card">

              <div className="welcome-icon">
                <FaPrayingHands />
              </div>

              <h4>Prayer & Worship</h4>

              <p>
                We encourage children to develop a personal relationship
                with God through prayer and worship.
              </p>

            </div>


            <div className="welcome-card">

              <div className="welcome-icon">
                <FaHeart />
              </div>

              <h4>Christian Fellowship</h4>

              <p>
                Children build friendships and learn to care for one
                another in a loving Christian community.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          AGE GROUPS
      ===================================================== */}

      <section className="age-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              AGE GROUPS
            </span>

            <h2>
              Growing Together at Every Stage
            </h2>

            <p className="section-subtitle">
              Our classes are organised according to age so that every
              child receives teaching and activities appropriate to
              their stage of development.
            </p>

          </div>


          <div className="age-grid">

            {ageGroups.map((group, index) => (

              <div
                className="age-card"
                key={index}
              >

                <div className="age-icon">
                  {group.icon}
                </div>

                <span className="age-range">
                  {group.age}
                </span>

                <h3>
                  {group.title}
                </h3>

                <p>
                  {group.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CHURCH SCHOOL LEADERSHIP
      ===================================================== */}

      <section className="leaders-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              LEADERSHIP
            </span>

            <h2>
              Church School Leadership
            </h2>

            <p className="section-subtitle">
              Our Church School is guided by dedicated leaders who
              provide spiritual direction, coordination and servant
              leadership within the ministry.
            </p>

          </div>


          <div className="row g-4">


            {/* Elder in Charge */}

            <div className="col-lg-6">

              <div className="official-card">

                <div className="official-image placeholder-image">

                  <FaChalkboardTeacher />

                </div>

                <div className="official-content">

                  <span>
                    Elder in Charge
                  </span>

                  <h3>
                    Alice Gichane
                  </h3>

                  <p>
                    Provides spiritual oversight and supports the
                    leadership and development of the Church School Ministry.
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
                    Diana Nyakabete Kimondo
                  </h3>

                  <p>
                    Coordinates Church School activities, programmes
                    and ministry initiatives throughout the year.
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
              CHURCH SCHOOL
            </span>

            <h2>
              Church School Officials
            </h2>

            <p className="section-subtitle">
              Our elected officials help coordinate the ministry and
              ensure that Church School programmes are organised and
              carried out effectively.
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
              These members support the Church School leadership in
              planning and implementing ministry activities.
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
          SUNDAY CLASSES
      ===================================================== */}

      <section className="classes-section">

        <div className="container">

          <div className="classes-content">

            <div>

              <span className="section-tag">
                EVERY SUNDAY
              </span>

              <h2>
                Sunday Church School
              </h2>

              <p>
                Children participate in engaging lessons and activities
                designed to help them understand God's Word and apply
                biblical principles in their daily lives.
              </p>

            </div>


            <div className="classes-list">

              <div>
                <FaBible />
                <span>Bible Lessons</span>
              </div>

              <div>
                <FaBible />
                <span>Memory Verses</span>
              </div>

              <div>
                <FaPrayingHands />
                <span>Prayer</span>
              </div>

              <div>
                <FaMusic />
                <span>Praise & Worship</span>
              </div>

              <div>
                <FaFutbol />
                <span>Games & Activities</span>
              </div>

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
              MINISTRY ACTIVITIES
            </span>

            <h2>
              Children's Ministry Activities
            </h2>

            <p className="section-subtitle">
              Through a variety of activities, children are given
              opportunities to learn, worship, serve and have fun
              together.
            </p>

          </div>


          <div className="activities-grid">


            <div className="activity-column">

              {activitiesLeft.map((activity, index) => (

                <div
                  className="activity-item"
                  key={index}
                >

                  <span>
                    {index + 1}
                  </span>

                  <p>
                    {activity}
                  </p>

                </div>

              ))}

            </div>


            <div className="activity-column">

              {activitiesRight.map((activity, index) => (

                <div
                  className="activity-item"
                  key={index}
                >

                  <span>
                    {index + 6}
                  </span>

                  <p>
                    {activity}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHILDREN'S CREED
      ===================================================== */}

      <section className="creed-section">

        <div className="container">

          <div className="creed-card">

            <div className="creed-icon">
              <FaCross />
            </div>

            <span className="section-tag">
              OUR FAITH
            </span>

            <h2>
              Children's PCEA Creed
            </h2>

            <div className="creed-divider"></div>

            <p>
              "I believe in God the Father, who loves me and hates sin.
              And His Son Jesus Christ who died for my sins. I believe
              if I repent, He will forgive me and give me His Holy Spirit.
              I will pray to Him diligently."
            </p>

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
              OUR CHILDREN
            </span>

            <h2>
              Children's Gallery
            </h2>

            <p className="section-subtitle">
              A glimpse into the fellowship, learning and activities
              enjoyed by our Church School children.
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
                  alt={`Church School activity ${index + 1}`}
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
            Give Your Child a Foundation in Christ
          </h2>

          <p>
            Every child is welcome to learn, grow, worship and build
            lasting friendships with us at PCEA Ngong Parish.
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


export default ChurchSchool;