import { Link } from "react-router-dom";
import {
  FaChild,
  FaUsers,
  FaFemale,
  FaMale,
  FaBookOpen,
  FaChurch,
} from "react-icons/fa";
import "./Ministries.css";
import ministriesBanner from "../assets/images/Hero/ministries-banner.jpg";


function Ministries() {
  const ministries = [

    {
  title: "Church School Ministry",
  icon: <FaChild />,
  link: "/church-school",
  description:
    "Teaching children God's Word through Sunday classes, Bible lessons and discipleship.",
},
    {
      title: "Women's Ministry (Women's Guild)",
      icon: <FaFemale />,
      link: "/women-guild",
      description:
        "Supporting women through fellowship, prayer, Bible study and community outreach.",
    },
    {
  title: "Men's Ministry",
  icon: <FaMale/>,
  link: "/mens-ministry",
  description:
    "Encouraging men in spiritual growth, leadership and service to the community.",
},
    {
  title: "Christian Education",
  icon: <FaBookOpen/>,
  link: "/christian-education",
  description:
    "Providing discipleship, catechism, leadership training and Bible study resources.",
},

{
  title: "Youth Ministry",
  icon: <FaUsers />,
  link: "/youth",
  description:
    "Equipping young people through fellowship, mentorship, Bible study and mission activities.",
},

{
  title: "Choir Ministry",
  icon: <FaChurch />,
  link: "/choir-ministry",
  description:
    "Equipping young people through fellowship, mentorship, Bible study and mission activities.",
},
  ];

  return (
    <>
      {/* Hero */}
      {/* Hero */}
<section
  className="page-hero"
  style={{
    backgroundImage: `url(${ministriesBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="overlay">
    <div className="container text-center">
      <h1>Our Ministries</h1>
      <p>Serving Christ Through Worship, Fellowship and Discipleship</p>
    </div>
  </div>
</section>

      {/* Intro */}
      <section className="ministry-intro">
        <div className="container text-center">
          <span className="section-tag">MINISTRY OPPORTUNITIES</span>
          <h2>Get Involved in the Life of Our Church</h2>
          <p>
            Every member has a place to grow, serve and use their gifts for the glory of
            God. Explore the ministries of PCEA Ngong Parish and find where you can
            participate in fellowship, discipleship and outreach.
          </p>
        </div>
      </section>

      {/* Ministry Cards */}
      <section className="ministries-grid">
        <div className="container">
          <div className="row g-4">
            {ministries.map((ministry, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="ministry-card">
                  <div className="ministry-icon">{ministry.icon}</div>
                  <h3>{ministry.title}</h3>
                  <p>{ministry.description}</p>
                  <Link to={ministry.link} className="ministry-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ministry-cta">
        <div className="container text-center">
          <h2>Serve With Us</h2>
          <p>
            Whether you are a child, youth, man or woman, there is a place for you to
            grow in faith and participate in ministry at PCEA Ngong Parish.
          </p>
          <Link to="/contact" className="welcome-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Ministries;