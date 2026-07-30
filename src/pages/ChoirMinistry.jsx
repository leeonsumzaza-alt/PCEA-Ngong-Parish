import React from "react";
import "./ChoirMinistry.css";

function ChoirMinistry() {
  return (
    <div className="choir-page">

      {/* Hero Section */}
      <section className="choir-hero">
        <div className="choir-overlay">
          <h1 className="text-dark">Choir Ministry</h1>
          <p className="text-dark">Praising God Through Music and Worship</p>
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

export default ChoirMinistry;