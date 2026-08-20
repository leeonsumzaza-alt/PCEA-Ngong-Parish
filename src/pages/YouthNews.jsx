import "./YouthNews.css";
import newsBanner from "../assets/images/Hero/news-banner.jpg";
import MainAnnouncements from "../assets/videos/main-announcements.mp4";

function YouthNews() {

  const bulletins = [
    {
      title: "Youth Weekly Bulletin",
      date: "16 August 2026",
      description:
        "Youth announcements, fellowship activities, Bible study information, events and upcoming youth programmes.",
      file: "/bulletins/youth-16-08-2026.pdf",
    },
    {
      title: "Youth Weekly Bulletin",
      date: "9 August 2026",
      description:
        "Latest youth fellowship information, activities, events and important announcements.",
      file: "/bulletins/youth-09-08-2026.pdf",
    },
    {
      title: "Youth Weekly Bulletin",
      date: "2 August 2026",
      description:
        "Youth ministry updates, fellowship details, Bible study information and upcoming activities.",
      file: "/bulletins/youth-02-08-2026.pdf",
    },
  ];

  return (
    <>
      {/* ================= HERO ================= */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${newsBanner})`,
        }}
      >
        <div className="about-hero-overlay">

          <div className="container">

            <div className="about-hero-content">

              <span className="hero-breadcrumb">
                HOME / NEWS / YOUTH
              </span>

              <h1>
                Youth <span>News</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Stay updated with youth fellowship,
                events, Bible studies and activities.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= ANNOUNCEMENTS VIDEO ================= */}

      <section className="announcement-video-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              THIS WEEK'S ANNOUNCEMENTS
            </span>

            <h2>
              Watch the Announcements
            </h2>

            <p>
              Watch this week's youth announcements
              from PCEA Ngong Parish.
            </p>

          </div>


          <div className="announcement-video-wrapper">

            <video
              controls
              preload="metadata"
              className="announcement-video"
            >

              <source
                src={MainAnnouncements}
                type="video/mp4"
              />

              Your browser does not support the video player.

            </video>

          </div>

        </div>

      </section>


      {/* ================= LATEST YOUTH BULLETINS ================= */}

      <section className="youth-bulletins-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              LATEST BULLETINS
            </span>

            <h2>
              Youth Bulletins
            </h2>

            <p>
              Access the latest youth bulletins, announcements,
              fellowship information, Bible studies and upcoming
              youth activities.
            </p>

          </div>


          {/* BULLETIN GRID */}

          <div className="youth-bulletins-grid">

            {bulletins.map((bulletin, index) => (

              <article
                className={`youth-bulletin-card ${
                  index === 0 ? "latest" : ""
                }`}
                key={index}
              >

                {/* LATEST BADGE */}

                {index === 0 && (
                  <span className="latest-youth-bulletin-badge">
                    LATEST
                  </span>
                )}


                {/* PDF DOCUMENT */}

                <div className="youth-pdf-document">

                  <div className="youth-pdf-fold"></div>

                  <span className="youth-pdf-label">
                    PDF
                  </span>

                  <div className="youth-pdf-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>


                {/* CONTENT */}

                <div className="youth-bulletin-content">

                  <span className="youth-bulletin-date">
                    {bulletin.date}
                  </span>

                  <h3>
                    {bulletin.title}
                  </h3>

                  <p>
                    {bulletin.description}
                  </p>


                  {/* BUTTONS */}

                  <div className="youth-bulletin-buttons">

                    <a
                      href={bulletin.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="youth-view-bulletin-btn"
                    >
                      View Bulletin
                      <span>→</span>
                    </a>

                    <a
                      href={bulletin.file}
                      download
                      className="youth-download-bulletin-btn"
                    >
                      Download
                    </a>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= INFORMATION ================= */}

      <section className="youth-bulletin-info-section">

        <div className="container">

          <div className="youth-bulletin-info-box">

            <div className="youth-bulletin-info-icon">
              PDF
            </div>

            <div>

              <h3>
                Stay Updated
              </h3>

              <p>
                New youth bulletins will be added here every
                week. Check back regularly for the latest youth
                announcements, fellowship activities and events.
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default YouthNews;