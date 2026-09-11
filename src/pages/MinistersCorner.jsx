import "./MinistersCorner.css";
import { useEffect, useState } from "react";
import { getLatestVideos } from "../services/youtube";

import {
  FaBible,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import parishminister from "../assets/images/Leaders/parishminister.jpg";

function MinistersCorner() {

  const [latestVideo, setLatestVideo] = useState(null);
  const [youtubeLoading, setYoutubeLoading] = useState(true);
  const [youtubeError, setYoutubeError] = useState(false);




  // =====================================================
  // MINISTER'S YOUTUBE
  // =====================================================

  const youtubeChannel =
    "https://www.youtube.com/@Revwatesh";

  // =====================================================
  // MINISTER'S FACEBOOK
  // Replace this with her actual Facebook page URL
  // =====================================================

  const facebookPage =
    "PASTE_HER_FACEBOOK_PAGE_URL_HERE";

  // =====================================================
  // GET LATEST VIDEO
  // =====================================================

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        setYoutubeLoading(true);
        setYoutubeError(false);

        const data = await getLatestVideos();

        if (!data || data.length === 0) {
          throw new Error("No videos found");
        }

        const video = data[0];
        const videoId = video.id?.videoId;

        if (!videoId) {
          throw new Error("Video ID not found");
        }

        setLatestVideo({
          videoId,
          title: video.snippet.title,
          thumbnail:
            video.snippet.thumbnails?.high?.url ||
            video.snippet.thumbnails?.medium?.url ||
            video.snippet.thumbnails?.default?.url,
          date: new Date(
            video.snippet.publishedAt
          ).toLocaleDateString("en-KE", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
        });
      } catch (error) {
        console.error("YouTube Error:", error);
        setYoutubeError(true);
      } finally {
        setYoutubeLoading(false);
      }
    };

    fetchLatestVideo();
  }, []);


  return (
    <>
      {/* =====================================================
          HERO
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
                Minister's
                <span> Corner</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Encouragement, prayer and biblical teaching
                from Rev. Dr Josephine Mutuota.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WORD OF ENCOURAGEMENT
      ===================================================== */}

      <section className="minister-message-section">

  <div className="container">

    <div className="minister-message">

      {/* MINISTER PHOTO */}
      <div className="minister-photo-wrapper">

        <div className="minister-photo-frame">

          <img
            src={parishminister}
            alt="Rev. Dr Josephine Mutuota"
            className="minister-photo"
          />

        </div>

        <div className="minister-photo-caption">
          <strong>Rev. Dr Josephine Mutuota</strong>
          <span>Parish Minister</span>
        </div>

      </div>


      {/* MESSAGE */}
      <div className="minister-message-content">

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
          Welcome to PCEA Ngong Parish. We thank God for
          His faithfulness and for the opportunity to worship,
          serve and grow together as His people.
        </p>

        <p>
          Whatever season you may be going through, remember
          that God remains faithful. Continue to trust in His
          Word, remain prayerful and walk confidently in the
          purpose He has placed before you.
        </p>

        <p>
          May the Lord strengthen your faith, guide your steps
          and fill your heart with His peace. Let us continue
          to serve Christ and one another with love, humility
          and hope.
        </p>

        <strong>
          — Rev. Dr Josephine Mutuota
        </strong>

      </div>

    </div>

  </div>

</section>

      


      {/* =====================================================
          SOCIAL MEDIA
      ===================================================== */}

      <section className="minister-social">

        <div className="container text-center">

          <span className="section-tag">
            CONNECT WITH THE MINISTER
          </span>

          <h2>
            Follow Rev. Dr Josephine Mutuota
          </h2>

          <p>
            Stay connected for Christian encouragement,
            teaching and ministry updates.
          </p>


          <div className="minister-social-links">

            <a
              href={youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube-link"
            >
              <FaYoutube />

              <span>
                YouTube
              </span>
            </a>


            <a
              href={facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook-link"
            >
              <FaFacebookF />

              <span>
                Facebook
              </span>
            </a>

          </div>

        </div>

      </section>

    </>
  );
}


export default MinistersCorner;