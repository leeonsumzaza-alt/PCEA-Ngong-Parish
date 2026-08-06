import "./Youth.css";
import youthBanner from "../assets/images/Hero/youth-banner.jpg";

function Youth() {
  return (
    <>
      {/* ================= YOUTH HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${youthBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / YOUTH MINISTRY
        </span>


        <h1>
          Youth
          <span> Ministry</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Empowering young people to grow in faith,
          serve Christ and impact the community.
        </p>


      </div>

    </div>

  </div>

</section>

      {/* Welcome */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to the Youth Ministry</h2>
          <p>
            The Youth Ministry exists to help young people grow spiritually,
            build meaningful friendships, discover their God-given gifts and
            become faithful disciples of Jesus Christ through worship,
            fellowship, discipleship and service.
          </p>
        </div>
      </section>

      {/* Ministry Activities */}
      <section className="activities-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Programs</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Youth Fellowship</h4>
                <p>Weekly fellowship, worship and encouragement.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Bible Study</h4>
                <p>Growing deeper through God's Word.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Camps</h4>
                <p>Annual camps for spiritual growth and fellowship.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Conferences</h4>
                <p>Inspirational youth conferences and seminars.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Mentorship</h4>
                <p>Guidance from mature Christian leaders.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Sports</h4>
                <p>Football, volleyball and other sporting activities.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Talent Development</h4>
                <p>Music, drama, dance, media and creative arts.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Mission Activities</h4>
                <p>Evangelism, outreach and community service.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Leadership Training</h4>
                <p>Preparing young leaders for church and society.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="content-section">
        <div className="container">
          <h2>Upcoming Events</h2>

          <ul>
            <li>Youth Fellowship Every Friday</li>
            <li>Annual Youth Camp</li>
            <li>Youth Conference</li>
            <li>Sports Tournament</li>
            <li>Mission Outreach</li>
            <li>Talent Night</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Youth Gallery</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <img
                src="https://picsum.photos/600/400?61"
                className="gallery-image"
                alt="Youth Activity"
              />
            </div>

            <div className="col-md-4">
              <img
                src="https://picsum.photos/600/400?62"
                className="gallery-image"
                alt="Youth Fellowship"
              />
            </div>

            <div className="col-md-4">
              <img
                src="https://picsum.photos/600/400?63"
                className="gallery-image"
                alt="Youth Camp"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="churchschool-cta">
        <div className="container text-center">
          <h2>Join the Youth Ministry</h2>

          <p>
            We invite every young person to grow in Christ, build lasting
            friendships and use their gifts to serve God and the community.
          </p>

          <a href="/contact" className="welcome-btn">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default Youth;