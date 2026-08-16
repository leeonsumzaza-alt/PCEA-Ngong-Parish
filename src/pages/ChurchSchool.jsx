import "./ChurchSchool.css";
import childrenministryBanner from "../assets/images/Hero/childrenministry-banner.jpg";
import gallery1 from "../assets/images/ChurchSchool/kids1.jpg";
import gallery2 from "../assets/images/ChurchSchool/kids2.jpg";
import gallery3 from "../assets/images/ChurchSchool/kids3.jpg";


function ChurchSchool() {

  const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
];

  

  return (
    <>
      {/* ================= CHURCH SCHOOL HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage: `url(${childrenministryBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / CHURCH SCHOOL
        </span>


        <h1>
          Church School
          <span> Ministry</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Growing children in Christ through
          biblical teaching, worship and fellowship.
        </p>


      </div>

    </div>

  </div>

</section>

      {/* Welcome */}
      <section className="welcome-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Welcome to Church School</h2>

          <p>
            Our Church School Ministry nurtures children through Bible teaching,
            worship, prayer and Christian fellowship. Every child is encouraged
            to know Christ and grow in faith.
          </p>
        </div>
      </section>

      {/* Age Groups */}
      <section className="age-section">
        <div className="container">
          <h2 className="text-center mb-5">Age Groups</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="ministry-card">
                <h4>Toddlers</h4>
                <p>2 - 4 Years</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="ministry-card">
                <h4>Junior</h4>
                <p>5 - 8 Years</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="ministry-card">
                <h4>Intermediate</h4>
                <p>9 - 12 Years</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="ministry-card">
                <h4>Teens</h4>
                <p>13 - 17 Years</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= YOUTH LEADERSHIP ================= */}

<section className="leaders-section">

  <div className="container">

    <div className="section-title text-center">
      <span className="section-tag">
        LEADERSHIP
      </span>

      <h2>Church School Leadership</h2>

      <p>
        The Presbyterian Church  Fellowship is guided by dedicated
        leaders who provide spiritual direction and servant leadership.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-lg-6">
        <div className="official-card">

          <div className="official-image">
            <img
              src="/images/placeholder.jpg"
              alt="Church School Elder"
            />
          </div>

          <div className="official-content">
            <span>Elder in Charge</span>
            <h3>ALICE GICHANE</h3>

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
            <h3>DIANA NYAKABETE KIMONDO</h3>

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

<h2>Church School Officials</h2>

<p>
Our elected officials coordinate the ministry and help lead different
programs throughout the year.
</p>

<div className="teacher-list">

<ul>

<li>Chairperson - Diana Nyakabete Kimondo</li>

<li>Vice Chairperson - Teresia Waithira Njenga</li>

<li>Secretary - Ann Ndiko Karuithie</li>

<li>Vice Secretary - Felister Gathoni Mungai</li>

<li>Treasurer - Susan Watare Murigu</li>

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

<li>Anastacia Njambi Kariuki</li>

<li>Diana Mbeyu Gichangi</li>

<li>Ann Wanjiru Kinaro</li>

<li>Gladys Wairimu Mathenge</li>

</ul>

</div>

</div>

</section>

      {/* Sunday Classes */}
      <section className="content-section">
        <div className="container">
          <h2>Sunday Classes</h2>

          <ul>
            <li>Bible Lessons</li>
            <li>Memory Verses</li>
            <li>Prayer</li>
            <li>Praise & Worship</li>
            <li>Games and Activities</li>
          </ul>
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}

<section className="activities-section">

<div className="container">

<h2>Children's Ministry Activities</h2>

<div className="row g-4">

<div className="col-md-6">

<ul className="activity-list">

<li>Sunday Church School Classes</li>

<li>Children's Sunday Service</li>

<li>Daily Vacation Bible School (DVBS)</li>

<li>Bible Quiz Competitions</li>

<li>Memory Verse Recitation</li>

</ul>

</div>

<div className="col-md-6">

<ul className="activity-list">

<li>Children's Choir Ministry</li>

<li>Prayer Meetings</li>

<li>Fun Days & Sports</li>

<li>Holiday Camps</li>

<li>Parents & Teachers Fellowship</li>

</ul>

</div>

</div>

</div>

</section>

      {/* ================= CHILDREN'S CREED ================= */}

<section className="creed-section">

<div className="container">

<div className="creed-card">

<h2>Children's PCEA Creed</h2>

<p>

"I believe in God the Father, who loves me and hates sin. And his son Jesus Christ who died for my sins, I believe if I repent, He will forgive me and give me His Holy Spirit. I will pray to him diligently.""

</p>

</div>

</div>

</section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="text-center mb-5">Children's Gallery</h2>

          <div className="row g-4">
  {galleryImages.map((image, index) => (
    <div className="col-lg-4 col-md-6" key={index}>
      <div className="gallery-card">
        <img
          src={image}
          alt={`Church School ${index + 1}`}
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
          <h2>Join Our Church School</h2>

          <p>
            Every child is welcome to learn, grow and worship with us every
            Sunday.
          </p>

          <a href="/contact" className="welcome-btn">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

export default ChurchSchool;