import "./Youth.css";
import youthBanner from "../assets/images/Hero/youth-banner.jpg";
import gallery1 from "../assets/images/Youth/youth1.jpg";
import gallery2 from "../assets/images/Youth/youth2.jpg";
import gallery3 from "../assets/images/Youth/youth3.jpg";

function Youth() {
  const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
];
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
          <h2 style={{ textAlign: 'center' }}>Welcome to the Youth Ministry</h2>
          <p>
            The Youth Ministry exists to help young people grow spiritually,
            build meaningful friendships, discover their God-given gifts and
            become faithful disciples of Jesus Christ through worship,
            fellowship, discipleship and service.
          </p>
        </div>
      </section>

      {/* ================= YOUTH LEADERSHIP ================= */}

<section className="leaders-section">

  <div className="container">

    <div className="section-title text-center">
      <span className="section-tag">
        LEADERSHIP
      </span>

      <h2>Youth Leadership</h2>

      <p>
        The Presbyterian Youth Fellowship is guided by dedicated
        leaders who provide spiritual direction and servant leadership.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-lg-6">
        <div className="official-card">

          <div className="official-image">
            <img
              src="/images/placeholder.jpg"
              alt="Youth Elder"
            />
          </div>

          <div className="official-content">
            <span>Elder in Charge</span>
            <h3>ROSALINE GATHAGE</h3>

            <p>
              Provides spiritual oversight and mentors the men of the
              fellowship.
            </p>
          </div>

        </div>
      </div>

      <div className="col-lg-6">
        <div className="official-card">

          <div className="official-image">
            <img
              src="/images/placeholder.jpg"
              alt="Chairman"
            />
          </div>

          <div className="official-content">
            <span>Chairman</span>
            <h3>JAMES KING’ORI KAGO</h3>

            <p>
              Coordinates the activities and programs of the fellowship.
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>

</section>

{/* ================= OFFICIALS ================= */}

<section className="teachers-section">

<div className="container">

<h2>Youth Ministry Officials</h2>

<p>
Our elected officials coordinate the ministry and help lead different
programs throughout the year.
</p>

<div className="teacher-list">

<ul>

<li>Chairperson - James King'ori Kago</li>

<li>Vice Chairperson - Josphat Kamau Mburu</li>

<li>Secretary - Lydia Njoki Wakiuru</li>

<li>Vice Secretary - Grace Wanjiku Wahome</li>

<li>Treasurer - Hezron Miano Ngatia</li>

</ul>

</div>

</div>

</section>

{/* ================= COMMITTEE MEMBERS================= */}

<section className="teachers-section">

<div className="container">

<h2>Commitee Members</h2>

<div className="teacher-list">

<ul>

<li>Joy Christine Murugi</li>

<li>Monica Wanjiku Kamanda</li>

<li>Lydia Munyingi</li>

<li>David Kanene</li>

<li>Lucy Muthoni Koisaba</li>

<li>Daniel Kiarie</li>

<li>Joeseph Weru</li>

<li>Peter Gichuki</li>

<li>Daniel King'ori</li>

<li>Peter Ndung'u</li>

<li>Jackline Maina</li>

<li>Charles Maina</li>

</ul>

</div>

</div>

</section>

{/* ================= ROLES ================= */}

<section className="mission-section">

<div className="container">

<div className="section-title text-center">

<span className="section-tag">
OUR PURPOSE
</span>

<h2>Roles of the Youth Ministry</h2>

</div>

<div className="row g-4">

<div className="col-md-6">

<ul className="activity-list">

<li>Promote Christian discipleship.</li>

<li>Encourage Bible study and prayer.</li>

<li>Develop future church leaders.</li>

<li>Support evangelism and missions.</li>

</ul>

</div>

<div className="col-md-6">

<ul className="activity-list">

<li>Promote fellowship among young people.</li>

<li>Develop talents and spiritual gifts.</li>

<li>Support community outreach.</li>

<li>Encourage responsible Christian living.</li>

</ul>

</div>

</div>

</div>

</section>

{/* ================= PROJECTS ================= */}

<section className="activities-section">

<div className="container">

<div className="section-title text-center">

<span className="section-tag">
CURRENT PROJECTS
</span>

<h2>Youth Projects</h2>

</div>

<div className="row g-4">

<div className="col-md-4">

<div className="ministry-card">

<h4>Community Outreach</h4>

<p>Serving families and supporting local community initiatives.</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Church Development</h4>

<p>Supporting church activities through volunteer service.</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Fundraising</h4>

<p>Organizing projects that support ministry growth and missions.</p>

</div>

</div>

</div>

</div>

</section>

{/* ================= ACHIEVEMENTS ================= */}

<section className="creed-section">

<div className="container">

<div className="creed-card">

<h2>Youth Ministry Achievements</h2>

<ul className="achievement-list">

<li>Successfully organized annual youth camps.</li>

<li>Participated in regional youth conferences.</li>

<li>Led successful community outreach initiatives.</li>

<li>Won church sports competitions.</li>

<li>Developed young leaders serving in church ministries.</li>

</ul>

</div>

</div>

</section>

      
      {/* Gallery */}
      <section className="gallery-section">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        OUR GALLERY
      </span>

      <h2>Youth Ministry Gallery</h2>

      <p>
        Moments of worship, fellowship, service and growth
        within our Youth Ministry.
      </p>

    </div>

    <div className="row g-4">

      {galleryImages.map((image, index) => (

        <div
          className="col-lg-4 col-md-6"
          key={index}
        >

          <div className="gallery-card">

            <img
              src={image}
              alt={`Youth Ministry ${index + 1}`}
              className="gallery-image"
            />

          </div>

        </div>

      ))}

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