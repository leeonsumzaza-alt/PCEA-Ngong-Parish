import { Link } from "react-router-dom";
import {
  FaCross,
  FaHandsHelping,
  FaHeart,
  FaBible,
  FaChurch,
  FaMapMarkerAlt,
  FaUsers,
  FaPray,
} from "react-icons/fa";
import "./About.css";
import historyImage from "../assets/images/About/History1.jpg";
import aboutBanner from "../assets/images/Hero/about-banner.jpg";

function About() {
  return (
    <>
      {/* Hero */}
<section
  className="page-hero"
  style={{
    backgroundImage: `url(${aboutBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="overlay">
    <div className="container text-center">
      <h1>About Us</h1>
      <p>Knowing Christ and Making Him Known</p>
    </div>
  </div>
</section>
      

      {/* History */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <img
                src={historyImage}
                alt="PCEA Ngong Parish"
                className="img-fluid rounded shadow-lg"
              />
            </div>

            <div className="col-lg-6">

              <span className="section-tag">OUR HISTORY</span>

              <h2>History of PCEA Ngong Parish</h2>

              <p>
                PCEA Ngong Parish has faithfully served the community through
                the preaching of God's Word, worship, discipleship and outreach.
                Over the years the parish has continued to grow spiritually and
                numerically while raising generations committed to Christ.
              </p>

              <p>
                Through God's grace, the parish continues to impact families,
                empower ministries and spread the Gospel within Ngong and beyond.
                <strong> Replace this paragraph with the official church history.</strong>
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Parish Profile */}

      <section className="profile-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PARISH PROFILE
            </span>

            <h2>Quick Information</h2>

          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="profile-card">
                <FaChurch className="about-icon"/>
                <h4>Parish Name</h4>
                <p>PCEA Ngong Parish</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="profile-card">
                <FaMapMarkerAlt className="about-icon"/>
                <h4>Location</h4>
                <p>Ngong, Kajiado County</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="profile-card">
                <FaUsers className="about-icon"/>
                <h4>Congregations</h4>
                <p>Insert Congregations</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="profile-card">
                <FaPray className="about-icon"/>
                <h4>Parish Minister</h4>
                <p>Insert Name</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="profile-card">
                <FaBible className="about-icon"/>
                <h4>Presbytery</h4>
                <p>Insert Presbytery</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="profile-card">
                <FaHeart className="about-icon"/>
                <h4>Membership</h4>
                <p>Growing Church Family</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Vision Mission Motto */}

      <section className="vision-section">

        <div className="container">

          <div className="row g-4">

            <div className="col-lg-4">

              <div className="vision-card">

                <FaCross className="about-icon"/>

                <h3>Vision</h3>

                <p>
                  To be a Christ-centred church transforming lives through
                  the power of the Gospel.
                </p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="vision-card">

                <FaHandsHelping className="about-icon"/>

                <h3>Mission</h3>

                <p>
                  To worship God, disciple believers, serve humanity and
                  proclaim Christ.
                </p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="vision-card">

                <FaBible className="about-icon"/>

                <h3>Motto</h3>

                <p>
                  Knowing Christ and Making Him Known.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Core Values */}

      <section className="values-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              CORE VALUES
            </span>

            <h2>What We Stand For</h2>

          </div>

          <div className="row g-4">

            {[
              "Faith",
              "Love",
              "Prayer",
              "Integrity",
              "Service",
              "Unity",
              "Stewardship",
              "Excellence",
            ].map((value, index) => (

              <div className="col-lg-3 col-md-6" key={index}>

                <div className="value-card">

                  <FaCross className="about-icon"/>

                  <h4>{value}</h4>

                  <p>
                    Living according to biblical principles every day.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Statement of Faith */}

      <section className="belief-section">

        <div className="container">

          <div className="text-center">

            <span className="section-tag">
              STATEMENT OF FAITH
            </span>

            <h2>What We Believe</h2>

          </div>

          <div className="row g-4 mt-4">

            {[
              "The Holy Scriptures",
              "The Holy Trinity",
              "Jesus Christ",
              "The Holy Spirit",
              "Salvation",
              "The Church",
              "The Sacraments",
              "The Second Coming",
            ].map((belief, index) => (

              <div className="col-lg-3 col-md-6" key={index}>

                <div className="belief-card">

                  <FaBible className="about-icon"/>

                  <h5>{belief}</h5>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Organizational Structure */}

      <section className="structure-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              ORGANIZATIONAL STRUCTURE
            </span>

            <h2>Church Leadership</h2>

          </div>

          <div className="structure">

            <div className="structure-box">General Assembly</div>
            <div className="structure-line"></div>

            <div className="structure-box">Presbytery</div>
            <div className="structure-line"></div>

            <div className="structure-box">Parish Minister</div>
            <div className="structure-line"></div>

            <div className="structure-box">Session & Elders</div>
            <div className="structure-line"></div>

            <div className="structure-box">Ministry Leaders</div>
            <div className="structure-line"></div>

            <div className="structure-box">Church Members</div>

          </div>

        </div>

      </section>

      {/* Map */}

      <section className="location-section">

        <div className="container">

          <div className="row g-5 align-items-center">

            <div className="col-lg-5">

              <span className="section-tag">
                FIND US
              </span>

              <h2>Parish Location</h2>

              <p>
                PCEA Ngong Parish<br/>
                Ngong Town, Kajiado County
              </p>

              <p>
                Worship with us every Sunday and experience God's love in a
                welcoming Christian family.
              </p>

              <Link to="/contact" className="welcome-btn">
                Get Directions
              </Link>

            </div>

            <div className="col-lg-7">

              <iframe
                title="PCEA Ngong Parish"
                src="https://www.google.com/maps?q=Ngong,+Kenya&output=embed"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "15px" }}
                loading="lazy"
              ></iframe>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <div className="container text-center">

          <h2>Join Our Church Family</h2>

          <p>
            We warmly welcome you to worship with us and grow in faith together.
          </p>

          <Link to="/contact" className="welcome-btn">
            Plan Your Visit
          </Link>

        </div>

      </section>

    </>
  );
}

export default About;