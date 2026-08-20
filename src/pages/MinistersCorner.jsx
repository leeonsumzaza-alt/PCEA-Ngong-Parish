import "./MinistersCorner.css";
import { useEffect, useState } from "react";
import parishminister from "../assets/images/Leaders/parishminister.jpg";

import {
  FaBible,
  FaPrayingHands,
  FaHeart,
  FaChurch,
  FaUsers,
  FaHandsHelping,
  FaCross,
  FaCalendarAlt,
  FaYoutube,
  FaPlay,
  FaArrowRight,
} from "react-icons/fa";

function MinistersCorner() {

  /* =====================================================
     PARISH MINISTER
  ===================================================== */

  const parishMinister = {
    name: "Rev. Dr Josephine Mutuota",
    role: "Parish Minister",
    image: parishminister,
    description:
      "The Parish Minister provides spiritual leadership, pastoral care, biblical teaching and overall guidance for the ministries of PCEA Ngong Parish.",
  };


  /* =====================================================
     YOUTUBE LATEST VIDEO
  ===================================================== */

  const [latestVideo, setLatestVideo] = useState(null);
  const [youtubeLoading, setYoutubeLoading] = useState(true);
  const [youtubeError, setYoutubeError] = useState(false);


  useEffect(() => {

    const fetchLatestVideo = async () => {

      try {

        setYoutubeLoading(true);
        setYoutubeError(false);

        const response = await fetch("/api/youtube");

        if (!response.ok) {
          throw new Error("Unable to load YouTube video");
        }

        const data = await response.json();

        if (!data.video) {
          throw new Error("No video found");
        }

        setLatestVideo(data.video);

      } catch (error) {

        console.error("YouTube API Error:", error);

        setYoutubeError(true);

      } finally {

        setYoutubeLoading(false);

      }

    };

    fetchLatestVideo();

  }, []);


  /* =====================================================
     RESPONSIBILITIES
  ===================================================== */

  const responsibilities = [
    {
      icon: <FaBible />,
      title: "Preaching & Teaching",
      text:
        "Providing biblical teaching and preaching that helps the congregation understand God's Word and grow in faith.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Prayer & Spiritual Guidance",
      text:
        "Encouraging prayer, spiritual growth and a deeper relationship with God through pastoral guidance.",
    },
    {
      icon: <FaHeart />,
      title: "Pastoral Care",
      text:
        "Offering spiritual support, encouragement and care to individuals and families within the parish community.",
    },
    {
      icon: <FaChurch />,
      title: "Worship & Sacraments",
      text:
        "Providing leadership in worship services, sacraments and other important aspects of the life of the church.",
    },
    {
      icon: <FaUsers />,
      title: "Congregational Leadership",
      text:
        "Working with church leaders, departments and members to strengthen unity and promote the mission of the parish.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Ministry",
      text:
        "Supporting the church's mission of serving the wider community and demonstrating Christ's love through practical ministry.",
    },
  ];


  /* =====================================================
     MINISTRY VALUES
  ===================================================== */

  const ministryValues = [
    {
      icon: <FaCross />,
      title: "Christ-Centred",
      text:
        "Keeping Jesus Christ at the centre of preaching, worship, leadership and pastoral ministry.",
    },
    {
      icon: <FaBible />,
      title: "Biblical",
      text:
        "Grounding ministry and teaching in the truth and authority of God's Word.",
    },
    {
      icon: <FaHeart />,
      title: "Compassionate",
      text:
        "Serving God's people with love, humility, patience and genuine concern.",
    },
  ];


  return (
    <>
      {/* =====================================================
          MINISTERS CORNER HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / MINISTERS CORNER
              </span>

              <h1>
                Ministers
                <span> Corner</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                A place of spiritual guidance, pastoral care and
                biblical teaching at PCEA Ngong Parish.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="ministers-intro">

        <div className="container">

          <div className="text-center">

            <span className="section-tag">
              MINISTERS CORNER
            </span>

            <h2 className="intro-title">
              Serving God's People Through Ministry
            </h2>

            <p className="intro-text">
              The Ministers Corner of PCEA Ngong Parish provides a
              connection between the parish ministry and the congregation.
              It highlights the role of our ministers in preaching,
              teaching, pastoral care, prayer and spiritual leadership.
            </p>

            <p className="intro-text">
              Through faithful service and Christ-centred leadership,
              our ministers seek to nurture believers, strengthen
              families and guide the church in fulfilling its mission.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PARISH MINISTER
      ===================================================== */}

      <section className="minister-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PARISH MINISTRY
            </span>

            <h2>
              Meet Our Parish Minister
            </h2>

            <p>
              Our parish minister provides spiritual leadership,
              pastoral care and guidance to the congregation.
            </p>

          </div>


          <div className="minister-profile">

            <div className="minister-image">

              <img
                src={parishMinister.image}
                alt={parishMinister.name}
              />

            </div>


            <div className="minister-content">

              <span className="minister-role">
                PARISH MINISTER
              </span>

              <h2>
                {parishMinister.name}
              </h2>

              <p>
                The Parish Minister provides spiritual leadership and
                pastoral oversight at PCEA Ngong Parish. Through
                preaching, teaching, prayer and pastoral care, the
                minister works alongside church leaders and members
                to nurture a growing and faithful Christian community.
              </p>

              <p>
                The ministry is committed to proclaiming God's Word,
                strengthening families, encouraging believers and
                helping the parish fulfil its mission of serving
                Christ and the community.
              </p>


              <div className="minister-highlights">

                <div>
                  <FaBible />
                  <span>Biblical Teaching</span>
                </div>

                <div>
                  <FaPrayingHands />
                  <span>Prayer</span>
                </div>

                <div>
                  <FaHeart />
                  <span>Pastoral Care</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MINISTER'S MESSAGE
      ===================================================== */}

      <section className="minister-message-section">

        <div className="container">

          <div className="minister-message">

            <div className="message-icon">
              <FaBible />
            </div>

            <span className="section-tag">
              FROM THE MINISTER
            </span>

            <h2>
              A Word of Encouragement
            </h2>

            <div className="message-divider"></div>

            <p>
              Welcome to PCEA Ngong Parish. We are grateful to God
              for His faithfulness and for the opportunity to worship,
              serve and grow together as a church family.
            </p>

            <p>
              As we continue our journey of faith, may we remain
              committed to God's Word, devoted to prayer and willing
              to serve one another with love and humility.
            </p>

            <p>
              May our lives continually reflect the love of Christ
              in our homes, workplaces, church and wider community.
            </p>

            <strong>
              — PCEA Ngong Parish Ministry
            </strong>

          </div>

        </div>

      </section>


      {/* =====================================================
          LATEST CHRISTIAN MESSAGE
      ===================================================== */}

      <section className="latest-message-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              FROM THE MINISTER
            </span>

            <h2>
              Latest Christian Message
            </h2>

            <p>
              Watch the latest Christian teaching, devotional
              message and encouragement from Rev. Dr Josephine Mutuota.
            </p>

          </div>


          <div className="latest-video-card">

            {/* VIDEO / THUMBNAIL */}

            <div className="latest-video">

              {youtubeLoading && (

                <div className="youtube-loading">

                  <div className="youtube-spinner"></div>

                  <p>
                    Loading latest message...
                  </p>

                </div>

              )}


              {!youtubeLoading && latestVideo && (

                <a
                  href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-thumbnail-link"
                >

                  <img
                    src={latestVideo.thumbnail}
                    alt={latestVideo.title}
                    className="youtube-thumbnail"
                  />

                  <div className="youtube-play-button">
                    <FaPlay />
                  </div>

                </a>

              )}


              {!youtubeLoading && youtubeError && (

                <div className="youtube-error">

                  <FaYoutube />

                  <h3>
                    Latest Message
                  </h3>

                  <p>
                    We are currently unable to load the latest
                    video. Please visit our YouTube channel.
                  </p>

                  <a
                    href="https://www.youtube.com/@Revwatesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="youtube-error-btn"
                  >
                    Visit YouTube
                  </a>

                </div>

              )}

            </div>


            {/* VIDEO INFORMATION */}

            <div className="latest-video-content">

              <div className="youtube-label">

                <FaYoutube />

                <span>
                  PCEA Ngong Parish
                </span>

              </div>


              {latestVideo && !youtubeLoading ? (

                <>
                  <h3>
                    {latestVideo.title}
                  </h3>

                  <p className="latest-video-date">
                    {latestVideo.date}
                  </p>

                  <p className="latest-video-description">
                    Join Rev. Dr Josephine Mutuota for biblical
                    encouragement, Christian teaching and spiritual
                    reflection through her latest message.
                  </p>

                  <a
                    href={`https://www.youtube.com/watch?v=${latestVideo.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latest-video-btn"
                  >
                    Watch on YouTube
                    <FaArrowRight />
                  </a>
                </>

              ) : (

                <>
                  <h3>
                    Daily Christian Encouragement
                  </h3>

                  <p className="latest-video-description">
                    Follow Rev. Dr Josephine Mutuota for regular
                    Christian teaching, encouragement and devotionals.
                  </p>

                  <a
                    href="https://www.youtube.com/@Revwatesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latest-video-btn"
                  >
                    Visit YouTube Channel
                    <FaArrowRight />
                  </a>
                </>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESPONSIBILITIES
      ===================================================== */}

      <section className="minister-responsibilities">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              PASTORAL MINISTRY
            </span>

            <h2>
              Our Ministry Responsibilities
            </h2>

            <p>
              The ministry serves the congregation through
              spiritual leadership, teaching, pastoral care and
              community engagement.
            </p>

          </div>


          <div className="responsibilities-grid">

            {responsibilities.map((item, index) => (

              <div
                className="responsibility-card"
                key={index}
              >

                <div className="responsibility-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MINISTRY VALUES
      ===================================================== */}

      <section className="minister-values">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR VALUES
            </span>

            <h2>
              Ministry Built On Faith
            </h2>

          </div>


          <div className="values-grid">

            {ministryValues.map((item, index) => (

              <div
                className="ministry-value-card"
                key={index}
              >

                <div className="value-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PASTORAL CARE
      ===================================================== */}

      <section className="pastoral-care">

        <div className="container">

          <div className="pastoral-card">

            <div className="pastoral-icon">
              <FaHandsHelping />
            </div>

            <div className="pastoral-content">

              <span className="section-tag">
                PASTORAL CARE
              </span>

              <h2>
                Walking With You Through Every Season
              </h2>

              <p>
                The church is committed to walking alongside
                individuals and families through seasons of
                celebration, difficulty, growth and transition.
              </p>

              <p>
                Through prayer, counsel, encouragement and
                fellowship, our pastoral ministry seeks to remind
                every member that they are part of a caring
                Christian family.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          JOIN US
      ===================================================== */}

      <section className="ministers-cta">

        <div className="container text-center">

          <span className="section-tag">
            JOIN US
          </span>

          <h2>
            Grow With Us In Faith
          </h2>

          <p>
            We invite you to worship with us, participate in the
            life of the church and grow together in God's Word.
          </p>

          <a
            href="/calendar"
            className="minister-btn"
          >
            <FaCalendarAlt />
            View Church Calendar
          </a>

        </div>

      </section>

    </>
  );
}

export default MinistersCorner;