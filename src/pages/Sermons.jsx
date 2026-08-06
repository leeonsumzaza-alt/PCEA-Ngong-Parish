import "./Sermons.css";
import { useEffect, useState } from "react";
import {
  FaPlayCircle,
  FaUser,
  FaCalendarAlt,
  FaBible,
  FaPrayingHands,
  FaChurch,
} from "react-icons/fa";

import sermonsBanner from "../assets/images/Hero/sermons-banner.jpg";
import { getLatestVideos } from "../services/youtube";

function Sermons() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await getLatestVideos();
        setVideos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  return (
    <>
      {/* ================= SERMONS HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${sermonsBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / SERMONS
        </span>


        <h1>
          Sermons
        </h1>


        <div className="hero-divider"></div>


        <p>
          Growing in faith through the preaching
          and teaching of God's Word.
        </p>


      </div>

    </div>

  </div>

</section>

      {/* ================= INTRO ================= */}

      <section className="sermons-intro">

        <div className="container">

          <div className="text-center">

            <span className="section-tag">
              OUR SERMONS
            </span>

            <h2 className="intro-title">
              Growing Together Through <br />
              God's Word
            </h2>

            <p className="intro-text">
              Every sermon preached at PCEA Ngong Parish is rooted in
              Scripture and seeks to inspire, equip and strengthen
              believers in their daily walk with Christ.
              Join us every week as we worship together and study
              God's Word.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERMON ================= */}

      <section className="featured-sermon">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              FEATURED MESSAGE
            </span>

            <h2>Latest Sermon</h2>

          </div>

          {loading ? (

            <div className="text-center py-5">
              <h3>Loading latest sermon...</h3>
            </div>

          ) : videos.length > 0 ? (

            <div className="featured-wrapper">

              <div className="row align-items-center g-5">

                <div className="col-lg-6">

                  <div className="ratio ratio-16x9 featured-video">

                    <iframe
                      src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                      title={videos[0].snippet.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>

                  </div>

                </div>

                <div className="col-lg-6">

                  <span className="section-tag">
                    SUNDAY MESSAGE
                  </span>

                  <h2 className="featured-title">
                    {videos[0].snippet.title}
                  </h2>

                  <p className="featured-description">
                    {videos[0].snippet.description
                      ? videos[0].snippet.description.substring(0, 280)
                      : "Watch the latest sermon from PCEA Ngong Parish and be encouraged by God's Word."}
                  </p>

                  <div className="featured-meta">

                    <span>
                      <FaUser /> PCEA Ngong Parish
                    </span>

                    <span>
                      <FaCalendarAlt />{" "}
                      {new Date(
                        videos[0].snippet.publishedAt
                      ).toLocaleDateString()}
                    </span>

                  </div>

                  <div className="featured-actions">

  <a
    href={`https://www.youtube.com/watch?v=${videos[0].id.videoId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="welcome-btn"
  >
    <FaPlayCircle /> Watch Video
  </a>


</div>
                </div>

              </div>

            </div>

          ) : (

            <div className="text-center py-5">
              <h3>No sermons found.</h3>
            </div>

          )}

        </div>

      </section>

      {/* ================= LATEST SERMONS ================= */}

      <section className="sermons-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              RECENT MESSAGES
            </span>

            <h2>Latest Sermons</h2>

          </div>

          <div className="row g-4">
                        {loading ? (

              <div className="col-12 text-center py-5">

                <h4>Loading sermons...</h4>

              </div>

            ) : videos.length > 0 ? (

              videos.slice(1).map((video) => (

                <div
                  className="col-lg-4 col-md-6"
                  key={video.id.videoId}
                >

                  <div className="sermon-card">

                    <div className="sermon-image">

  <img
    src={video.snippet.thumbnails.high.url}
    alt={video.snippet.title}
  />

</div>

                    <div className="sermon-content">

                      <span className="section-tag">
                        SERMON
                      </span>

                      <h3>
                        {video.snippet.title}
                      </h3>

                      <div className="sermon-meta">

                        <p>

                          <FaUser />

                          PCEA Ngong Parish

                        </p>

                        <p>

                          <FaCalendarAlt />

                          {new Date(
                            video.snippet.publishedAt
                          ).toLocaleDateString()}

                        </p>

                      </div>

                      <div className="featured-actions">

  <a
    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
    target="_blank"
    rel="noopener noreferrer"
    className="welcome-btn"
  >
    <FaPlayCircle /> Watch Video
  </a>

</div>

                    </div>

                  </div>

                </div>

              ))

            ) : (

              <div className="col-12 text-center py-5">

                <h3>No sermons available.</h3>

                <p>
                  Please check back later for the latest messages.
                </p>

              </div>

            )}

          </div>

        </div>

      </section>

      {/* ================= WHY LISTEN ================= */}

      <section className="why-sermons">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              WHY LISTEN
            </span>

            <h2>
              Growing Through Every Message
            </h2>

            <p className="section-description">
              Every sermon is prayerfully prepared to encourage,
              challenge and strengthen believers through the
              truth of God's Word.
            </p>

          </div>

          <div className="row g-4">

            <div className="col-lg-4">

              <div className="why-card">

                <div className="why-icon">

                  <FaBible />

                </div>

                <h3>
                  Biblical Truth
                </h3>

                <p>
                  Our sermons faithfully proclaim the Scriptures,
                  helping believers understand and apply God's
                  Word in everyday life.
                </p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="why-card">

                <div className="why-icon">

                  <FaPrayingHands />

                </div>

                <h3>
                  Spiritual Growth
                </h3>

                <p>
                  Every message encourages deeper faith,
                  discipleship and a closer relationship
                  with Jesus Christ.
                </p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="why-card">

                <div className="why-icon">

                  <FaChurch />

                </div>

                <h3>
                  Worship Together
                </h3>

                <p>
                  Join our congregation every Sunday
                  as we worship, learn and grow together
                  as one family in Christ.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>      {/* ================= CALL TO ACTION ================= */}

      <section className="sermons-message">

        <div className="container text-center">

          <span className="section-tag">
            JOIN US
          </span>

          <h2>
            Experience God's Word Every Week
          </h2>

          <p>
            We warmly invite you to worship with us every Sunday at
            PCEA Ngong Parish. Whether you join us in person or watch
            online, our prayer is that every sermon will strengthen
            your faith, deepen your relationship with Christ and equip
            you to live according to God's Word.
          </p>

          <a
            href="https://www.youtube.com/@PCEANGONGPARISH"
            target="_blank"
            rel="noopener noreferrer"
            className="welcome-btn"
          >
            <FaPlayCircle /> Visit Our YouTube Channel
          </a>

        </div>

      </section>

    </>
  );
}

export default Sermons;

          