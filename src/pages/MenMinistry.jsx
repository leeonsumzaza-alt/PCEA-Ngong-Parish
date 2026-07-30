import "./MenMinistry.css";

function MensMinistry() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="overlay">
          <div className="container text-center">
            <h1>Men's Ministry</h1>
            <p>Building Godly Men for Christ, Family and Community</p>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to the Men's Ministry</h2>
          <p>
            The Men's Ministry equips men to become faithful followers of Christ,
            godly leaders in their families, active servants in the church and
            positive influences in the community.
          </p>
        </div>
      </section>

      {/* Fellowship */}
      <section className="activities-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Fellowship</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Men's Fellowship</h4>
                <p>Building friendships through worship and fellowship.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Prayer Breakfasts</h4>
                <p>Monthly prayer, encouragement and networking.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Bible Study</h4>
                <p>Growing spiritually through God's Word.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="content-section">
        <div className="container">
          <h2>Leadership Development</h2>

          <p>
            We mentor men to become servant leaders in their homes, workplaces,
            church and society through discipleship and leadership training.
          </p>
        </div>
      </section>

      {/* Community */}
      <section className="content-section bg-light">
        <div className="container">
          <h2>Community Service</h2>

          <ul>
            <li>Church development projects</li>
            <li>Supporting needy families</li>
            <li>Community clean-up activities</li>
            <li>Hospital visitation</li>
            <li>Mission outreach</li>
          </ul>
        </div>
      </section>

      {/* Events */}
      <section className="events-section">
        <div className="container">
          <h2 className="text-center mb-4">Upcoming Events</h2>

          <ul>
            <li>Men's Conference</li>
            <li>Prayer Breakfast</li>
            <li>Leadership Seminar</li>
            <li>Community Outreach</li>
            <li>Men's Fellowship Day</li>
          </ul>
        </div>
      </section>

      {/* Leaders */}
      <section className="gallery-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Leadership Team</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Chairman</h4>
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

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="text-center mb-5">Gallery</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?41" className="gallery-image" alt="" />
            </div>

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?42" className="gallery-image" alt="" />
            </div>

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?43" className="gallery-image" alt="" />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="churchschool-cta">
        <div className="container text-center">
          <h2>Join the Men's Ministry</h2>

          <p>
            Become part of a fellowship of men committed to growing in Christ,
            serving the church and impacting the community.
          </p>

          <a href="/contact" className="welcome-btn">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default MensMinistry;