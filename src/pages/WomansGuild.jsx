import "./WomansGuild.css";
import womansBanner from "../assets/images/Hero/womans-banner.jpg";

function WomenGuild() {
  return (
    <>
      {/* ================= WOMAN'S GUILD HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${womansBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / WOMAN'S GUILD
        </span>


        <h1>
          Presbyterian Woman's

          <span> Guild</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Serving Christ through faith,
          fellowship and compassionate ministry.
        </p>


      </div>

    </div>

  </div>

</section>

      {/* Welcome */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to the Woman's Guild</h2>
          <p>
            The Woman's Guild is a ministry dedicated to nurturing women
            spiritually, emotionally and socially through prayer, Bible study,
            fellowship and service to God and the community.
          </p>
        </div>
      </section>

      {/* Activities */}
      <section className="activities-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Activities</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Prayer Meetings</h4>
                <p>Weekly fellowship and intercessory prayer.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Bible Study</h4>
                <p>Growing together through God's Word.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Community Outreach</h4>
                <p>Serving families and the surrounding community.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meetings */}
      <section className="content-section">
        <div className="container">
          <h2>Guild Meetings</h2>

          <ul>
            <li>Monthly Woman's Guild Fellowship</li>
            <li>Prayer Meetings</li>
            <li>Leadership Meetings</li>
            <li>Department Planning Meetings</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="content-section bg-light">
        <div className="container">
          <h2>Guild Projects</h2>

          <ul>
            <li>Supporting needy families</li>
            <li>Hospital visitation</li>
            <li>Church development projects</li>
            <li>Community outreach programmes</li>
          </ul>
        </div>
      </section>

      {/* Bible Study */}
      <section className="content-section">
        <div className="container">
          <h2>Bible Study</h2>

          <p>
            Women meet regularly for Bible study, discipleship,
            mentorship and prayer as they grow together in Christ.
          </p>
        </div>
      </section>

      {/* Conferences */}
      <section className="content-section bg-light">
        <div className="container">
          <h2>Conferences & Retreats</h2>

          <p>
            The ministry participates in parish, presbytery and national
            conferences that strengthen women spiritually and equip them
            for Christian leadership.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="text-center mb-5">Guild Leadership</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Chairperson</h4>
                <p>Name Here</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Secretary</h4>
                <p>Name Here</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Treasurer</h4>
                <p>Name Here</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Upcoming Events</h2>

          <ul>
            <li>Woman's Prayer Day</li>
            <li>Annual Guild Conference</li>
            <li>Community Outreach</li>
            <li>Leadership Seminar</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="text-center mb-5">Woman's Guild Gallery</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?31" className="gallery-image" alt="" />
            </div>

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?32" className="gallery-image" alt="" />
            </div>

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?33" className="gallery-image" alt="" />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="churchschool-cta">
        <div className="container text-center">
          <h2>Join the Women's Guild</h2>

          <p>
            We warmly welcome every woman to grow in faith, fellowship,
            worship and service through the Women's Ministry.
          </p>

          <a href="/contact" className="welcome-btn">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default WomenGuild;