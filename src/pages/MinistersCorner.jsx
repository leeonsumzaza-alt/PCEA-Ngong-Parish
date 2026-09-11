import "./MinistersCorner.css";

import {
  FaBible,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import parishminister from "../assets/images/Leaders/parishminister.jpg";


function MinistersCorner() {




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
    "https://www.facebook.com/RevWateshM";

  // =====================================================
  // GET LATEST VIDEO
  // =====================================================

  

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