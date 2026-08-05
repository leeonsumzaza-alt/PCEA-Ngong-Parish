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
  FaShieldAlt,
  FaHandshake,
  FaLightbulb,
  FaGlobeAfrica,
} from "react-icons/fa";
import "./About.css";
import historyImage from "../assets/images/About/History1.jpg";
import aboutBanner from "../assets/images/Hero/about-banner.jpg";

function About() {
  return (
    <>
      {/* Hero */}
<section
  className="about-hero"
  style={{
    backgroundImage: `url(${aboutBanner})`,
  }}
>
  <div className="about-hero-overlay">
    <div className="container">

      <div className="about-hero-content">

        <span className="hero-breadcrumb">
          HOME / ABOUT US
        </span>

        <h1>About Us</h1>

        <div className="hero-divider"></div>

        <p>
          Growing in Faith,
          <br />
          Serving the Community Through Christ
        </p>

        <div className="scroll-indicator">
          ↓
        </div>

      </div>

    </div>
  </div>
</section>
      

      {/* History */}

<section className="history-section">

  <div className="container">

    <div className="row align-items-center g-5">

      {/* Image */}

      <div className="col-lg-6">

        <div className="history-image-wrapper">

          <img
            src={historyImage}
            alt="PCEA Ngong Parish"
            className="history-image"
          />

          <div className="history-badge">

            <span>ESTABLISHED</span>

            <h3>19XX</h3>

          </div>

        </div>

      </div>

      {/* Text */}

      <div className="col-lg-6">

        <span className="section-tag">
          OUR STORY
        </span>

        <h2 className="history-title">

          Walking in Faith,

          <br />

          Growing Together

        </h2>

        <div className="section-line"></div>

        <p>
          PCEA Ngong Parish has faithfully served the community through
          the preaching of God's Word, worship, discipleship and outreach.
          Over the years, the parish has continued to grow spiritually
          and numerically while raising generations committed to Christ.
        </p>

        <p>
          Through God's grace, the parish continues to impact families,
          empower ministries, and spread the Gospel within Ngong and
          beyond.
          <strong> Replace this paragraph with the official church history.</strong>
        </p>

        <div className="history-features">

          <div>
            <FaCross />
            <span>Christ-Centered Worship</span>
          </div>

          <div>
            <FaHeart />
            <span>Loving Christian Community</span>
          </div>

          <div>
            <FaBible />
            <span>Biblical Teaching</span>
          </div>

        </div>

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

          <div className="row g-1 mt-6">

            <div className="profile-grid">

  <div className="profile-card">
    <FaChurch className="about-icon" />
    <h4>Parish</h4>
    <p>PCEA Ngong Parish</p>
  </div>

  <div className="profile-card">
    <FaMapMarkerAlt className="about-icon" />
    <h4>Location</h4>
    <p>Ngong, Kajiado County</p>
  </div>

  <div className="profile-card">
    <FaUsers className="about-icon" />
    <h4>Congregation</h4>
    <p>Enchorro Emuny Congregation</p>
  </div>

  <div className="profile-card">
    <FaPray className="about-icon" />
    <h4>Parish Minister</h4>
    <p>Rev. Dr Josephine Mutuota</p>
  </div>

  <div className="profile-card">
    <FaBible className="about-icon" />
    <h4>Presbytery</h4>
    <p>Ngong Hills Presbytery</p>
  </div>

</div>
           

          </div>

        </div>

      </section>

      {/* Vision Mission */}

<section className="vision-section">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        OUR PURPOSE
      </span>

      <h2>Vision & Mission</h2>

      <p className="section-subtitle">
        Guided by God's Word, our vision and mission define who we are
        and inspire everything we do as a parish.
      </p>

    </div>

    <div className="row g-5 mt-4">

      {/* Vision */}

      <div className="col-lg-6">

        <div className="vision-card vision-blue">

          <div className="vision-watermark">
            <FaCross />
          </div>

          <div className="vision-icon">
            <FaCross />
          </div>

          <h3>Our Vision</h3>

          <div className="vision-divider"></div>

          <p>
            A Model Parish That Impacts People With The Knowledge Of
            God And His Son Jesus Christ.
          </p>

        </div>

      </div>

      {/* Mission */}

      <div className="col-lg-6">

        <div className="vision-card vision-red">

          <div className="vision-watermark">
            <FaHandsHelping />
          </div>

          <div className="vision-icon">
            <FaHandsHelping />
          </div>

          <h3>Our Mission</h3>

          <div className="vision-divider"></div>

          <p>
            Our Purpose Of Existence Is To Obey The Great Commission
            And The Great Commandment.
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

   <div className="values-grid">
  {[
    {
      title: "Faithfulness",
      icon: <FaCross />,
      description:
        "Remaining steadfast in our commitment to God, His Word, and His calling in every aspect of life and ministry.",
    },
    {
      title: "Inclusiveness",
      icon: <FaGlobeAfrica />,
      description:
        "Welcoming and embracing all people with Christ's love, regardless of age, background, or status.",
    },
    {
      title: "Kindness",
      icon: <FaHeart />,
      description:
        "Showing compassion, generosity, and genuine care to one another and to the wider community.",
    },
    {
      title: "Love",
      icon: <FaHandshake />,
      description:
        "Demonstrating Christ's unconditional love through worship, fellowship, service, and outreach.",
    },
    {
      title: "Open-mindedness",
      icon: <FaLightbulb />,
      description:
        "Listening with humility, valuing different perspectives, and remaining teachable while staying grounded in biblical truth.",
    },
    {
      title: "Integrity",
      icon: <FaShieldAlt />,
      description:
        "Living honestly, transparently, and faithfully in a manner that honors God and builds trust.",
    },
    {
      title: "Wisdom",
      icon: <FaBible />,
      description:
        "Seeking God's guidance and applying biblical understanding in every decision and action.",
    },
  ].map((value, index) => (
    <div key={index}>
      <div className="value-card">
        <div className="value-icon">
          {value.icon}
        </div>

        <h4>{value.title}</h4>

        <p>{value.description}</p>
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
            <p className="section-subtitle">
  Our faith is rooted in the timeless truths of God's Word, guiding our worship,
  fellowship, discipleship, and service to the community.
</p>

          </div>

          <div className="row g-4 mt-4">

            {[
  {
    title: "The Holy Scriptures",
    subtitle: "God's inspired and authoritative Word",
  },
  {
    title: "The Holy Trinity",
    subtitle: "Father, Son and Holy Spirit",
  },
  {
    title: "Jesus Christ",
    subtitle: "Our Lord and Savior",
  },
  {
    title: "The Holy Spirit",
    subtitle: "Our Comforter and Guide",
  },
  {
    title: "Salvation",
    subtitle: "By grace through faith",
  },
  {
    title: "The Church",
    subtitle: "The Body of Christ",
  },
  {
    title: "The Sacraments",
    subtitle: "Signs of God's covenant",
  },
  {
    title: "The Second Coming",
    subtitle: "The glorious return of Christ",
  },
].map((belief, index) => (

              <div className="col-lg-3 col-md-6" key={index}>
  <div className="belief-card">

    <div className="belief-icon">
      <FaBible />
    </div>

    <h5>{belief.title}</h5>

    <p>{belief.subtitle}</p>

    <span className="belief-line"></span>

  </div>
</div>

           

          ))}

          </div>
        </div>
      </section>

      {/* Organizational Structure

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

      </section> */}

      {/* Map */}

<section className="location-section">

  <div className="container">

    <div className="row g-5 align-items-center">

      {/* Left Side */}

      <div className="col-lg-5">

        <span className="section-tag">
          FIND US
        </span>

        <h2 className="location-title">
          Visit PCEA Ngong Parish
        </h2>

        <p className="location-text">
          We warmly welcome you to worship with us and become part of our
          growing Christian family.
        </p>

        <div className="location-info">

          <div className="location-item">

            <FaMapMarkerAlt className="location-icon" />

            <div>
              <h5>Location</h5>
              <p>Ngong Town, Kajiado County</p>
            </div>

          </div>

          <div className="location-item">

            <FaChurch className="location-icon" />

            <div>
              <h5>Sunday Worship</h5>
              <p>Join us every Sunday</p>
            </div>

          </div>

         

        </div>

        <Link
          to="/contact"
          className="welcome-btn"
        >
          Plan Your Visit
        </Link>

      </div>

      {/* Right Side */}

      <div className="col-lg-7">

        <div className="map-wrapper">

          <iframe
            title="PCEA Ngong Parish"
            src="https://www.google.com/maps?q=Ngong,+Kenya&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="map-card">

            <FaChurch className="map-card-icon" />

            <div>
              <h5>PCEA Ngong Parish</h5>
              <p>Ngong Town, Kajiado County</p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

    </>
  );
}

export default About;