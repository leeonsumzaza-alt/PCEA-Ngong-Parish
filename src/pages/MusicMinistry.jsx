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
    backgroundImage:`url(${musicBanner})`,
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


      {/* Welcome Section */}
      <section className="choir-section">
        <h2>Welcome to Our Choir Ministry</h2>

        <p>
          The Choir Ministry of PCEA Ngong Parish is dedicated to serving God
          through music, worship, and praise. Through songs and hymns, the choir
          leads the congregation into meaningful worship experiences while
          spreading God's message through music.
        </p>
      </section>


      {/* About Choir */}
      <section className="choir-cards">

        <div className="choir-card">
          <h3>Our Mission</h3>
          <p>
            To glorify God through excellent musical ministry and inspire
            believers through songs of worship, praise, and encouragement.
          </p>
        </div>


        <div className="choir-card">
          <h3>Choir Activities</h3>
          <ul>
            <li>Sunday worship services</li>
            <li>Special church celebrations</li>
            <li>Worship concerts</li>
            <li>Community outreach programs</li>
            <li>Choir rehearsals</li>
          </ul>
        </div>


        <div className="choir-card">
          <h3>Join Our Choir</h3>
          <p>
            Anyone with a passion for singing and serving God through music is
            welcome to join our ministry. Come and use your gift to glorify God.
          </p>
        </div>

      </section>


      {/* Leadership */}
      <section className="choir-leaders">

        <h2>Choir Leadership</h2>

        <div className="leader-grid">

          <div className="leader-card">
            <h3>Choir Patron</h3>
            <p>Name Coming Soon</p>
          </div>


          <div className="leader-card">
            <h3>Choir Director</h3>
            <p>Name Coming Soon</p>
          </div>


          <div className="leader-card">
            <h3>Choir Members</h3>
            <p>Dedicated Worship Team</p>
          </div>

        </div>

      </section>


      {/* Gallery */}
      <section className="choir-gallery">

        <h2>Choir Gallery</h2>

        <div className="gallery-placeholder">
          <p>Choir photos will be added here</p>
        </div>

      </section>


      {/* Call To Action */}
      <section className="choir-cta">

        <h2>Sing. Serve. Worship.</h2>

        <p>
          Join the Choir Ministry and be part of a team that uses music to
          touch lives and glorify God.
        </p>

        <button>
          Join Choir
        </button>

      </section>


    </div>
  );
}

export default MusicMinistry;