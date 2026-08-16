import "./ChristianEducation.css";
import christianEducationBanner from "../assets/images/Hero/christianeducation-banner.jpg";
// import christianEducationLeader from "../assets/images/ChristianEducation/leader.jpg";
// import christianEducationPatron from "../assets/images/ChristianEducation/patron.jpg";

function ChristianEducation() {
  return (
    <>
      {/* ================= CHRISTIAN EDUCATION HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${christianEducationBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / CHRISTIAN EDUCATION
        </span>


        <h1>
          Christian
          <span> Education</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Growing in the knowledge of God's Word
          through teaching, discipleship and faith development.
        </p>


      </div>

    </div>

  </div>

</section>

      {/* Welcome */}
      <section className="welcome-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Welcome to Christian Education</h2>
          <p>
            Christian Education equips believers with biblical knowledge,
            discipleship and practical Christian living. Our goal is to help
            every member grow spiritually and become mature followers of Christ.
          </p>
        </div>
      </section>

      {/* ================= CHRISTIAN EDUCATION LEADERSHIP ================= */}

<section className="education-leadership">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        CHRISTIAN EDUCATION LEADERSHIP
      </span>

      <h2>
        Our Leadership
      </h2>

      <p>
        The Christian Education Ministry is guided by dedicated leaders
        committed to teaching God's Word and nurturing spiritual growth.
      </p>

    </div>


    <div className="row g-4 justify-content-center">

      {/* Leader */}

      <div className="col-lg-5 col-md-6">

        <div className="education-leader-card">

          <img
            // src={christianEducationLeader}
            alt="Christian Education Leader"
          />

          <div className="education-leader-content">

            <span>
              Christian Education Patron
            </span>

            <h3>
              ELIZABETH GATHOGO
            </h3>

          </div>

        </div>

      </div>


      {/* Chairman */}

      <div className="col-lg-5 col-md-6">

        <div className="education-leader-card">

          <img
            // src={christianEducationPatron}
            alt="Christian Education Chairman"
          />

          <div className="education-leader-content">

            <span>
              Chairman
            </span>

            <h3>
              LYDIAH WANJUGU MURIITHI
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ================= OFFICIALS ================= */}

<section className="education-officials">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        OUR TEAM
      </span>

      <h2>
        Christian Education Officials
      </h2>

    </div>


    <div className="officials-list">

      <div className="education-official-item">
        <span>01</span>

        <div>
          <h4>Chairman</h4>
          <p>Lydiah Wanjugu Muriithi</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>02</span>

        <div>
          <h4>Vice Chairman</h4>
          <p>Erastus Mwangi Giturwa</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>03</span>

        <div>
          <h4>Secretary</h4>
          <p>Charity Wanjiku Gichamba</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>04</span>

        <div>
          <h4>Vice Secretary</h4>
          <p>Ann Wangari Kimani</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>05</span>

        <div>
          <h4>Treasurer</h4>
          <p>Anthony Ndonga Muriu</p>
        </div>
      </div>

    </div>

  </div>

</section>

{/* ================= COMMITTEE MEMBERS ================= */}

<section className="education-officials">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        OUR TEAM
      </span>

      <h2>
        Committee Members
      </h2>

    </div>


    <div className="officials-list">

      <div className="education-official-item">
        <span>01</span>

        <div>
          <p>Naomi Gakenia Irungu</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>02</span>

        <div>
          <p>Florence Arimi Mutiga</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>03</span>

        <div>
          <p>Esther Kaindi Mutwerandu</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>04</span>

        <div>
          <p>Rachael Waithira Ngure</p>
        </div>
      </div>


      <div className="education-official-item">
        <span>05</span>

        <div>
          <p>Margaret Njeri Kihoro</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>06</span>

        <div>
          <p>John Moshe Nduru</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>07</span>

        <div>
          <p>James Kingori Kago</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>08</span>

        <div>
          <p>Mercy Kagwiria Njiiru</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>09</span>

        <div>
          <p>Rachael Gathoni Kihika</p>
        </div>
      </div>

      <div className="education-official-item">
        <span>10</span>

        <div>
          <p>Mary Wanjeri Njogu</p>
        </div>
      </div>

    </div>

  </div>

</section>

{/* ================= ACTIVITIES ================= */}

<section className="education-activities">

  <div className="container">

    <div className="section-title text-center">

      <span className="section-tag">
        WHAT WE DO
      </span>

      <h2>
        Christian Education Activities
      </h2>

    </div>


    <div className="activities-list">

      <div className="activity-item">
        <span>01</span>
        <div>
          <h4>Bible Study</h4>
          <p>
            Regular Bible study sessions that help members understand
            and apply God's Word.
          </p>
        </div>
      </div>


      <div className="activity-item">
        <span>02</span>
        <div>
          <h4>Discipleship Classes</h4>
          <p>
            Equipping believers to grow spiritually and develop
            a deeper relationship with Christ.
          </p>
        </div>
      </div>


      <div className="activity-item">
        <span>03</span>
        <div>
          <h4>Catechism</h4>
          <p>
            Preparing children, young people and adults for confirmation
            and deeper Christian understanding.
          </p>
        </div>
      </div>


      <div className="activity-item">
        <span>04</span>
        <div>
          <h4>Christian Teaching</h4>
          <p>
            Providing biblical teaching and resources for different
            groups within the church.
          </p>
        </div>
      </div>


      <div className="activity-item">
        <span>05</span>
        <div>
          <h4>Leadership Training</h4>
          <p>
            Preparing members to serve effectively as Christian leaders
            within the church and community.
          </p>
        </div>
      </div>


      <div className="activity-item">
        <span>06</span>
        <div>
          <h4>Teacher Training</h4>
          <p>
            Equipping teachers with skills and biblical knowledge
            to effectively teach God's Word.
          </p>
        </div>
      </div>

    </div>

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
    </>
  );
}

export default ChristianEducation;