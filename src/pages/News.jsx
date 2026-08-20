import { Link } from "react-router-dom";
import "./News.css";
import newsBanner from "../assets/images/Hero/news-banner.jpg";

function News() {
  const mainChurchNews = [
    {
      title: "Weekly Intimations",
      date: "16 August 2026",
      description:
        "Read the latest weekly intimations, church announcements, services, meetings and important information from PCEA Ngong Parish.",
      category: "MAIN CHURCH",
    },
    {
      title: "Women's Guild Conference",
      date: "25 July 2026",
      description:
        "The Women's Guild will be hosting its annual conference with worship, fellowship, teaching and guest speakers.",
      category: "MAIN CHURCH",
    },
    {
      title: "Church Renovation Project",
      date: "20 July 2026",
      description:
        "Construction work continues as we improve our church facilities. Thank you for your continued support and generosity.",
      category: "MAIN CHURCH",
    },
  ];

  const youthNews = [
    {
      title: "Youth Camp Registration Now Open",
      date: "28 July 2026",
      description:
        "Registration for this year's Youth Camp is now ongoing. All young people are encouraged to register before the deadline.",
      category: "YOUTH",
    },
    {
      title: "Youth Fellowship",
      date: "2 August 2026",
      description:
        "Join us for our weekly youth fellowship as we come together for worship, Bible study, prayer and fellowship.",
      category: "YOUTH",
    },
    {
      title: "Youth Sports Day",
      date: "9 August 2026",
      description:
        "The Youth Ministry invites all young people to participate in our upcoming sports and fellowship day.",
      category: "YOUTH",
    },
  ];


  const renderNewsCards = (items) => {
    return (
      <div className="row g-4">
        {items.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <article className="news-card">
              <div className="news-card-top">
                <span className="news-category">
                  {item.category}
                </span>

                <span className="news-date">
                  {item.date}
                </span>
              </div>

              <div className="news-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link to="/contact" className="read-btn">
                  Read More
                  <span> →</span>
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* ================= NEWS HERO ================= */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${newsBanner})`,
        }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <div
              className="about-hero-content"
              data-aos="fade-up"
            >
              <span className="hero-breadcrumb">
                HOME / NEWS & INTIMATIONS
              </span>

              <h1>
                News <span>& Intimations</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Stay informed with the latest announcements,
                activities and important updates from PCEA Ngong Parish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="news-intro-section">
        <div className="container">
          <div className="section-title text-center">
            <span className="section-tag">
              PCEA NGONG PARISH
            </span>

            <h2>
              Stay Connected With Us
            </h2>

            <p>
              Find the latest church announcements, weekly
              intimations, youth updates and important information
              about activities happening across the parish.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CHURCH ================= */}

      <section className="main-church-news-section">
        <div className="container">

          <div className="news-category-heading">
            <div>
              <span className="section-tag">
                MAIN CHURCH
              </span>

              <h2>
                Main Church
              </h2>

              <p>
                Weekly intimations, announcements, services,
                meetings and parish activities.
              </p>
            </div>

            <Link
              to="/news/main-church"
              className="category-btn"
            >
              View All Main Church News
            </Link>
          </div>

          {renderNewsCards(mainChurchNews)}

        </div>
      </section>

      {/* ================= YOUTH ================= */}

      <section className="youth-news-section">
        <div className="container">

          <div className="news-category-heading">
            <div>
              <span className="section-tag">
                YOUTH MINISTRY
              </span>

              <h2>
                Youth
              </h2>

              <p>
                Stay updated with youth fellowship,
                Bible studies, events, sports and activities.
              </p>
            </div>

            <Link
              to="/news/youth"
              className="category-btn"
            >
              View All Youth News
            </Link>
          </div>

          {renderNewsCards(youthNews)}

        </div>
      </section>

    



      {/* ================= CTA ================= */}

      <section className="news-cta">

        <div className="container text-center">

          <span className="section-tag">
            KEEP UP TO DATE
          </span>

          <h2>
            Stay Connected
          </h2>

          <p>
            Keep checking the PCEA Ngong Parish News &
            Intimations page for the latest church announcements,
            events and activities.
          </p>

          <Link
            to="/calendar"
            className="welcome-btn"
          >
            View Church Calendar
          </Link>

        </div>

      </section>
    </>
  );
}

export default News;