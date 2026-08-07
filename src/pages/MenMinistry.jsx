import "./MenMinistry.css";
import pcmfBanner from "../assets/images/Hero/pcmf-banner.jpg";
import gallery1 from "../assets/images/PCMF/pcmf1.jpg";
import gallery2 from "../assets/images/PCMF/pcmf2.jpg";
import gallery3 from "../assets/images/PCMF/pcmf3.jpg";


function MensMinistry() {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
  ];

  return (
    <>
      {/* ================= PCMF HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${pcmfBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / PCMF
        </span>


        <h1>
          Presbyterian Church
          <span> Men's Fellowship</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Building men of faith,
          leadership and service for Christ.
        </p>


      </div>

    </div>

  </div>

</section>

      {/* Welcome */}
      <section className="welcome-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Welcome to the Men's Ministry</h2>
          <p>
            The Men's Ministry equips men to become faithful followers of Christ,
            godly leaders in their families, active servants in the church and
            positive influences in the community.
          </p>
        </div>
      </section>

      {/* ================= PCMF LEADERSHIP ================= */}

<section className="leaders-section">

  <div className="container">

    <div className="section-title text-center">
      <span className="section-tag">
        LEADERSHIP
      </span>

      <h2>PCMF Leadership</h2>

      <p>
        The Presbyterian Church Men's Fellowship is guided by dedicated
        leaders who provide spiritual direction and servant leadership.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-lg-6">
        <div className="official-card">

          <div className="official-image">
            <img
              src="/images/placeholder.jpg"
              alt="PCMF Elder"
            />
          </div>

          <div className="official-content">
            <span>Elder in Charge</span>
            <h3>Name Coming Soon</h3>

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
            <h3>Name Coming Soon</h3>

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

<section className="content-section bg-light">

<div className="container">

<h2>PCMF Officials</h2>

<div className="row">

<div className="col-md-6">

<ul>

<li>Chairman</li>

<li>Vice Chairman</li>

<li>Secretary</li>

<li>Assistant Secretary</li>

<li>Treasurer</li>

<li>Organizing Secretary</li>

</ul>

</div>

<div className="col-md-6">

<ul>

<li>Evangelism Coordinator</li>

<li>Projects Coordinator</li>

<li>Welfare Coordinator</li>

<li>Prayer Coordinator</li>

<li>Mission Coordinator</li>

<li>Committee Members</li>

</ul>

</div>

</div>

</div>

</section>

{/* ================= ROLES ================= */}

<section className="content-section">

<div className="container">

<h2>Roles of PCMF</h2>

<div className="row g-4">

<div className="col-md-4">

<div className="ministry-card">

<h4>Spiritual Growth</h4>

<p>
Encouraging men to grow in faith through prayer, Bible study and discipleship.
</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Leadership</h4>

<p>
Preparing men to become godly leaders in their families, church and society.
</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Community Service</h4>

<p>
Serving the church and community through outreach and development projects.
</p>

</div>

</div>

</div>

</div>

</section>

{/* ================= HOW TO JOIN ================= */}

<section className="content-section bg-light">

<div className="container">

<h2>How to Join PCMF</h2>

<div className="join-card">

<div className="join-level">

<h4>1. Card Level</h4>

<p>
This is the entry level for every man joining the Church. Upon joining,
a member is issued with a membership card and begins a holistic journey
covering spiritual growth, fellowship and godly values.
</p>

</div>

<div className="join-level">

<h4>2. Badge Level</h4>

<p>
After making notable progress at the Card Level and being registered in
the Holy Communion Register, a member is awarded the PCMF Badge,
recognizing him as an ambassador of the fellowship.
</p>

</div>

<div className="join-level">

<h4>3. Tie Level</h4>

<p>
This is the highest level of membership. During a church ceremony
officiated by the Parish Minister, members receive the PCMF Tie and
Maroon Blazer as symbols of full membership.
</p>

</div>

</div>

</div>

</section>

{/* ================= OBLIGATIONS ================= */}

<section className="content-section">

<div className="container">

<h2>Obligations Upon Joining</h2>

<div className="ministry-card">

<p>

Every member of PCMF is expected to actively participate in the life of
the fellowship by:

</p>

<ul>

<li>Attending fellowship meetings regularly.</li>

<li>Supporting church and community activities.</li>

<li>Participating in evangelism and outreach.</li>

<li>Living as a Christian role model.</li>

<li>Making annual contributions as agreed at the beginning of each Church calendar year.</li>

</ul>

</div>

</div>

</section>

{/* ================= ACHIEVEMENTS ================= */}

<section className="content-section bg-light">

<div className="container">

<h2>PCMF Achievements</h2>

<div className="row g-4">

<div className="col-md-4">

<div className="ministry-card">

<h4>Community Projects</h4>

<p>
Supporting church development and community initiatives.
</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Mentorship</h4>

<p>
Mentoring men to become faithful Christian leaders.
</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Mission Work</h4>

<p>
Supporting evangelism and outreach within the parish and beyond.
</p>

</div>

</div>

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

      <h2>PCMF Gallery</h2>

      <p>
        Highlights of fellowship, worship, conferences,
        outreach and ministry activities.
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
              alt={`PCMF ${index + 1}`}
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