import "./Gallery.css";
import galleryBanner from "../assets/images/Hero/gallery-banner.jpg";

// Gallery Images
import PCMF1 from "../assets/images/Gallery/PCMF/PCMF1.HEIC";

// =======================
// Gallery Data
// =======================

const galleryImages = [
  {
    image: PCMF1,
    title: "PCMF Fellowship",
    category: "PCMF",
  },

  // Example:
  // {
  //   image: worship1,
  //   title: "Sunday Worship",
  //   category: "Worship",
  // },
  //
  // {
  //   image: youth1,
  //   title: "Youth Fellowship",
  //   category: "Youth",
  // },
];

function Gallery() {
  return (
    <>
      {/* ================= GALLERY HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${galleryBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / GALLERY
        </span>


        <h1>
          Church
          <span> Gallery</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Capturing moments of worship, fellowship
          and service at PCEA Ngong Parish.
        </p>


      </div>

    </div>

  </div>

</section>

      {/* ================= INTRO ================= */}

      <section className="gallery-intro">

        <div className="container">

          <div className="text-center">

            <span className="section-tag">
              OUR MEMORIES
            </span>

            <h2 className="intro-title">
              Life at <br />
              PCEA Ngong Parish
            </h2>

            <p className="intro-text">
              Explore memorable moments from worship services,
              fellowships, church ministries, conferences,
              outreach programmes and special celebrations as
              we continue growing together in Christ.
            </p>

          </div>

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="gallery-section">

        <div className="container">

          <div className="gallery-grid">

            {galleryImages.map((photo, index) => (

              <div
                className="gallery-item"
                key={index}
              >

                <img
                  src={photo.image}
                  alt={photo.title}
                />

                <div className="gallery-overlay">

                  <span>{photo.category}</span>

                  <h4>{photo.title}</h4>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="gallery-cta">

        <div className="container text-center">

          <span className="section-tag">
            JOIN US
          </span>

          <h2>
            Become Part of Our Story
          </h2>

          <p>
            We warmly invite you to worship with us, participate
            in our ministries and become part of the growing
            family of PCEA Ngong Parish.
          </p>

          <button className="welcome-btn">
            Worship With Us
          </button>

        </div>

      </section>
    </>
  );
}

export default Gallery;