
import React from "react";
import "./MusicMinistry.css";
import musicBanner from "../assets/images/Hero/music-banner.jpg";

function MusicMinistry() {
  return (
    <div className="music-page">

      {/* ================= MUSIC MINISTRY HERO ================= */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${musicBanner})`,
        }}
      >
        <div className="about-hero-overlay">

          <div className="container">

            <div
              className="about-hero-content"
              data-aos="fade-up"
            >

              <span className="hero-breadcrumb">
                HOME / MUSIC MINISTRY
              </span>

              <h1>
                Music
                <span> Ministry</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Using music and worship to glorify God
                and lead the congregation into His presence.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WELCOME ================= */}

      <section className="choir-section">

        <div className="container">

          <span className="section-tag">
            MUSIC MINISTRY
          </span>

          <h2>
            Welcome to Our Music Ministry
          </h2>

          <p>
            The Music Ministry of PCEA Ngong Parish is dedicated to serving God
            through music, worship and praise. Through songs, hymns and
            musical presentations, the ministry leads the congregation into
            meaningful worship experiences while spreading God's message
            through music.
          </p>

        </div>

      </section>


      {/* ================= MISSION ================= */}

      <section className="choir-cards-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR PURPOSE
            </span>

            <h2>
              Music Ministry
            </h2>

          </div>

          <div className="choir-cards">

            <div className="choir-card">

              <h3>Our Mission</h3>

              <p>
                To glorify God through excellent musical ministry and inspire
                believers through songs of worship, praise and encouragement.
              </p>

            </div>


            <div className="choir-card">

              <h3>Our Vision</h3>

              <p>
                To build a vibrant music ministry that nurtures musical gifts,
                strengthens worship and points people to Jesus Christ.
              </p>

            </div>


            <div className="choir-card">

              <h3>Our Calling</h3>

              <p>
                To use the gifts and talents entrusted to us by God to serve
                the church, minister to others and glorify His name.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= LEADERSHIP ================= */}

      <section className="music-leadership">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              MUSIC MINISTRY LEADERSHIP
            </span>

            <h2>
              Serving The Music Ministry
            </h2>

            <p>
              Our leadership provides spiritual direction and coordination
              for the Music Ministry of PCEA Ngong Parish.
            </p>

          </div>


          {/* Officials With Photos */}

          <div className="row g-4 justify-content-center">

            <div className="col-lg-5 col-md-6">

              <div className="music-official-card">

                <div className="official-photo">

                  <img
                    src="/images/placeholder.jpg"
                    alt="Elder in Charge"
                  />

                </div>

                <div className="official-info">

                  <span>
                    ELDER IN CHARGE
                  </span>

                  <h3>
                    Name Coming Soon
                  </h3>

                  <p>
                    Provides spiritual guidance and oversight to the Music
                    Ministry.
                  </p>

                </div>

              </div>

            </div>


            <div className="col-lg-5 col-md-6">

              <div className="music-official-card">

                <div className="official-photo">

                  <img
                    src="/images/placeholder.jpg"
                    alt="Music Ministry Chairperson"
                  />

                </div>

                <div className="official-info">

                  <span>
                    CHAIRPERSON
                  </span>

                  <h3>
                    Name Coming Soon
                  </h3>

                  <p>
                    Coordinates the activities and administration of the
                    Music Ministry.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* Officials List */}

          <div className="officials-list-section">

            <h3>
              Music Ministry Officials
            </h3>

            <ul className="officials-list">

              <li>
                <span>Chairperson</span>
                <strong>Name Coming Soon</strong>
              </li>

              <li>
                <span>Secretary</span>
                <strong>Name Coming Soon</strong>
              </li>

              <li>
                <span>Treasurer</span>
                <strong>Name Coming Soon</strong>
              </li>

              <li>
                <span>Choir Director</span>
                <strong>Name Coming Soon</strong>
              </li>

              <li>
                <span>Music Coordinator</span>
                <strong>Name Coming Soon</strong>
              </li>

              <li>
                <span>Choir Representatives</span>
                <strong>Name Coming Soon</strong>
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* ================= CHOIRS ================= */}

      <section className="church-choirs">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR CHOIRS
            </span>

            <h2>
              Choirs of PCEA Ngong Parish
            </h2>

            <p>
              Our choirs use their musical gifts to lead worship and minister
              through music during church services and special occasions.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {/* Upendo Voices */}

            <div className="col-lg-5 col-md-6">

              <div className="choir-group-card">

                <div className="choir-group-icon">
                  ♪
                </div>

                <h3>
                  Upendo Voices
                </h3>

                <span className="choir-label">
                  CHOIR MINISTRY
                </span>

                <p>
                  Upendo Voices serves through worship, praise and musical
                  ministry, using their voices to glorify God and encourage
                  the congregation.
                </p>

                <ul>

                  <li>Worship and praise</li>
                  <li>Sunday services</li>
                  <li>Special church celebrations</li>
                  <li>Musical presentations</li>

                </ul>

              </div>

            </div>


            {/* Melody Makers */}

            <div className="col-lg-5 col-md-6">

              <div className="choir-group-card">

                <div className="choir-group-icon">
                  ♪
                </div>

                <h3>
                  Melody Makers
                </h3>

                <span className="choir-label">
                  CHOIR MINISTRY
                </span>

                <p>
                  Melody Makers contributes to the worship life of the church
                  through music, fellowship and the development of musical
                  gifts among its members.
                </p>

                <ul>

                  <li>Worship services</li>
                  <li>Choir rehearsals</li>
                  <li>Church celebrations</li>
                  <li>Musical outreach</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ACTIVITIES ================= */}

      <section className="music-activities">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              WHAT WE DO
            </span>

            <h2>
              Music Ministry Activities
            </h2>

            <p>
              The Music Ministry participates in various activities throughout
              the church year.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-lg-4 col-md-6">

              <div className="activity-card">

                <h3>Sunday Worship</h3>

                <p>
                  Leading the congregation in praise, worship and hymns during
                  regular Sunday services.
                </p>

              </div>

            </div>


            <div className="col-lg-4 col-md-6">

              <div className="activity-card">

                <h3>Choir Rehearsals</h3>

                <p>
                  Regular rehearsals where members develop their musical
                  abilities and prepare for upcoming services.
                </p>

              </div>

            </div>


            <div className="col-lg-4 col-md-6">

              <div className="activity-card">

                <h3>Special Services</h3>

                <p>
                  Providing music during special services, celebrations,
                  ceremonies and church occasions.
                </p>

              </div>

            </div>


            <div className="col-lg-4 col-md-6">

              <div className="activity-card">

                <h3>Worship Concerts</h3>

                <p>
                  Organizing and participating in worship concerts and musical
                  presentations that bring the church together.
                </p>

              </div>

            </div>


            <div className="col-lg-4 col-md-6">

              <div className="activity-card">

                <h3>Musical Training</h3>

                <p>
                  Encouraging members to develop their singing, instrumental
                  and musical leadership abilities.
                </p>

              </div>

            </div>


            <div className="col-lg-4 col-md-6">

              <div className="activity-card">

                <h3>Community Ministry</h3>

                <p>
                  Using music to reach, encourage and minister to people within
                  the church and surrounding community.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= GALLERY ================= */}

      <section className="choir-gallery">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">
              OUR GALLERY
            </span>

            <h2>
              Music Ministry Gallery
            </h2>

            <p>
              Moments of worship, fellowship, musical ministry and service.
            </p>

          </div>

          <div className="gallery-placeholder">

            <p>
              Music Ministry photos will be added here.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="choir-cta">

        <div className="container text-center">

          <h2>
            Sing. Serve. Worship.
          </h2>

          <p>
            Join the Music Ministry and be part of a team that uses music
            to touch lives and glorify God.
          </p>

          <button>
            Join Music Ministry
          </button>

        </div>

      </section>

    </div>
  );
}

export default MusicMinistry;
