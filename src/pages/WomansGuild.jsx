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
          <h2 style={{ textAlign: 'center' }}>Welcome to the Woman's Guild</h2>
          <p>
            The Woman's Guild is a ministry dedicated to nurturing women
            spiritually, emotionally and socially through prayer, Bible study,
            fellowship and service to God and the community.
          </p>
        </div>
      </section>

      {/* ================= GUILD LEADERSHIP ================= */}

<section className="leaders-section">

<div className="container">

<div className="section-title text-center">

<span className="section-tag">
LEADERSHIP
</span>

<h2>Guild Leadership</h2>

<p>
The Woman's Guild is guided by dedicated leaders who provide
spiritual guidance and servant leadership.
</p>

</div>

<div className="row g-4">

<div className="col-lg-6">

<div className="official-card">

<div className="official-image">

<img
src="/images/placeholder.jpg"
alt="Guild Elder"
/>

</div>

<div className="official-content">

<span>Elder in Charge</span>

<h3>Name Coming Soon</h3>

<p>
Provides spiritual oversight and guidance to the Guild.
</p>

</div>

</div>

</div>

<div className="col-lg-6">

<div className="official-card">

<div className="official-image">

<img
src="/images/placeholder.jpg"
alt="Chairwoman"
/>

</div>

<div className="official-content">

<span>Chairwoman</span>

<h3>Name Coming Soon</h3>

<p>
Coordinates Guild programs, meetings and ministry activities.
</p>

</div>

</div>

</div>

</div>

</div>

</section>

{/* ================= GUILD OFFICIALS ================= */}

<section className="content-section bg-light">

<div className="container">

<h2>Guild Officials</h2>

<div className="row">

<div className="col-md-6">

<ul>

<li>Chairwoman</li>

<li>Vice Chairwoman</li>

<li>Secretary</li>

<li>Assistant Secretary</li>

<li>Treasurer</li>

<li>Organizing Secretary</li>

</ul>

</div>

<div className="col-md-6">

<ul>

<li>Prayer Coordinator</li>

<li>Projects Coordinator</li>

<li>Mission Coordinator</li>

<li>Welfare Coordinator</li>

<li>Choir Leader</li>

<li>Committee Members</li>

</ul>

</div>

</div>

</div>

</section>

{/* ================= MEMBERSHIP ================= */}

<section className="content-section">

<div className="container">

<h2>Becoming a Member</h2>

<div className="join-card">

<div className="join-level">

<h4>Membership</h4>

<p>

Guild membership is open to all women and girls who are committed to
serving Christ. Any woman or young lady who desires to grow in faith
and fellowship is welcome to join the Guild.

</p>

</div>

<div className="join-level">

<h4>Fellowship Journey</h4>

<p>

A prospective member is expected to fellowship with other Guild
members for a period of two years while participating in the life
and activities of the ministry.

</p>

</div>

<div className="join-level">

<h4>Dedication</h4>

<p>

After completing the fellowship period, members are dedicated during
a special church service officiated by the Moderator and are
presented with the Guild head-scarf as a symbol of membership.

</p>

</div>

</div>

</div>

</section>

{/* ================= ROLES ================= */}

<section className="content-section bg-light">

<div className="container">

<h2>Roles of the Woman's Guild</h2>

<div className="row g-4">

<div className="col-md-4">

<div className="ministry-card">

<h4>Prayer</h4>

<p>
Leading women in prayer, worship and spiritual growth.
</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Mentorship</h4>

<p>
Mentoring young women and strengthening Christian families.
</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Service</h4>

<p>
Serving the church and community through compassion and outreach.
</p>

</div>

</div>

</div>

</div>

</section>

{/* ================= ACTIVITIES ================= */}

<section className="content-section">

<div className="container">

<h2>Guild Activities</h2>

<ul>

<li>Prayer Meetings</li>

<li>Bible Study Fellowship</li>

<li>Hospital Visitation</li>

<li>Evangelism</li>

<li>Mentorship Programs</li>

<li>Women's Conferences</li>

<li>Retreats</li>

<li>Community Outreach</li>

<li>Family Life Seminars</li>

</ul>

</div>

</section>

{/* ================= PROJECTS ================= */}

<section className="content-section bg-light">

<div className="container">

<h2>Guild Projects</h2>

<div className="row g-4">

<div className="col-md-4">

<div className="ministry-card">

<h4>Church Support</h4>

<p>
Supporting church development and ministry initiatives.
</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Community Care</h4>

<p>
Supporting vulnerable families and people in need.
</p>

</div>

</div>

<div className="col-md-4">

<div className="ministry-card">

<h4>Mission Work</h4>

<p>
Participating in evangelism and community outreach programs.
</p>

</div>

</div>

</div>

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