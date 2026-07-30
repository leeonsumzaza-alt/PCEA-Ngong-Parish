import "./ChristianEducation.css";

function ChristianEducation() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="overlay">
          <div className="container text-center">
            <h1>Christian Education</h1>
            <p>Growing in God's Word Through Learning and Discipleship</p>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to Christian Education</h2>
          <p>
            Christian Education equips believers with biblical knowledge,
            discipleship and practical Christian living. Our goal is to help
            every member grow spiritually and become mature followers of Christ.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="activities-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Programs</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Bible Study Materials</h4>
                <p>Structured Bible lessons for all ages.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Discipleship</h4>
                <p>Helping believers grow in faith and service.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Catechism</h4>
                <p>Preparing members for confirmation and deeper faith.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Leadership Training</h4>
                <p>Training future church leaders through biblical principles.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Online Bible Classes</h4>
                <p>Virtual learning opportunities for members.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ministry-card">
                <h4>Christian Resources</h4>
                <p>Books, devotionals and study guides for spiritual growth.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Upcoming Classes */}
      <section className="content-section">
        <div className="container">
          <h2>Upcoming Classes</h2>

          <ul>
            <li>Weekly Bible Study</li>
            <li>New Members Class</li>
            <li>Catechism Lessons</li>
            <li>Leadership Development Course</li>
            <li>Online Discipleship Sessions</li>
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Gallery</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?51" className="gallery-image" alt="" />
            </div>

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?52" className="gallery-image" alt="" />
            </div>

            <div className="col-md-4">
              <img src="https://picsum.photos/600/400?53" className="gallery-image" alt="" />
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="churchschool-cta">
        <div className="container text-center">
          <h2>Join Christian Education</h2>

          <p>
            Grow in your knowledge of God's Word through Bible study,
            discipleship and leadership training.
          </p>

          <a href="/contact" className="welcome-btn">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default ChristianEducation;