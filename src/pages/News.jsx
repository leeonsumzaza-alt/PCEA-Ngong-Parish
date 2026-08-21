import { Link } from "react-router-dom";
import "./News.css";
import newsBanner from "../assets/images/Hero/news-banner.jpg";

function News() {
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
              View Main Church News →
            </Link>

          </div>

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
              View Youth News →
            </Link>

          </div>

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