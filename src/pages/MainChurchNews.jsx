import "./MainChurchNews.css";
import newsBanner from "../assets/images/Hero/news-banner.jpg";
import mainAnnouncementsVideo from "../assets/videos/main-announcements.mp4";

function MainChurchNews() {
  const bulletins = [
    {
      title: "Sunday Worship Bulletin",
      date: "16 August 2026",
      description:
        "Weekly order of service, Bible readings, church announcements and upcoming parish activities.",
      file: "/bulletins/main-church-16-08-2026.pdf",
    },
    {
      title: "Sunday Worship Bulletin",
      date: "9 August 2026",
      description:
        "Church announcements, services, meetings and activities for the week.",
      file: "/bulletins/main-church-09-08-2026.pdf",
    },
    {
      title: "Sunday Worship Bulletin",
      date: "2 August 2026",
      description:
        "Latest parish information, worship details and important church announcements.",
      file: "/bulletins/main-church-02-08-2026.pdf",
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
                HOME / NEWS / MAIN CHURCH
              </span>

              <h1>
                Main Church <span>News</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Weekly intimations, announcements and important
                information from PCEA Ngong Parish.
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
              Watch this week's announcements from
              PCEA Ngong Parish.
            </p>

          </div>

          <div className="announcement-video-wrapper">

            <video
              controls
              preload="metadata"
              className="announcement-video"
            >
              <source
                src={mainAnnouncementsVideo}
                type="video/mp4"
              />

              Your browser does not support the video player.
            </video>

          </div>

        </div>

      </section>


      {/* ================= LATEST BULLETINS ================= */}

      <section className="main-bulletins-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              LATEST BULLETINS
            </span>

            <h2>
              Sunday Bulletins
            </h2>

            <p>
              Access the latest church bulletins, announcements,
              Bible readings and weekly service information.
            </p>

          </div>


          {/* BULLETIN CARDS */}

          <div className="bulletins-grid">

            {bulletins.map((bulletin, index) => (

              <article
                className={`main-bulletin-card ${
                  index === 0 ? "latest" : ""
                }`}
                key={index}
              >

                {/* Latest Badge */}

                {index === 0 && (
                  <span className="latest-bulletin-badge">
                    LATEST
                  </span>
                )}


                {/* PDF DOCUMENT */}

                <div className="pdf-document">

                  <div className="pdf-fold"></div>

                  <span className="pdf-label">
                    PDF
                  </span>

                  <div className="pdf-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>


                {/* CONTENT */}

                <div className="bulletin-card-content">

                  <span className="bulletin-date">
                    {bulletin.date}
                  </span>

                  <h3>
                    {bulletin.title}
                  </h3>

                  <p>
                    {bulletin.description}
                  </p>


                  {/* ACTIONS */}

                  <div className="bulletin-buttons">

                    <a
                      href={bulletin.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-bulletin-btn"
                    >
                      View Bulletin
                      <span>→</span>
                    </a>

                    <a
                      href={bulletin.file}
                      download
                      className="download-bulletin-btn"
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

      <section className="bulletin-info-section">

        <div className="container">

          <div className="bulletin-info-box">

            <div className="bulletin-info-icon">
              PDF
            </div>

            <div>

              <h3>
                Stay Updated
              </h3>

              <p>
                New church bulletins will be added here every
                week. Check back regularly for the latest
                announcements and service information.
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default MainChurchNews;