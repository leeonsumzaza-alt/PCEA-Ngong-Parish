import "./Gallery.css";
import galleryBanner from "../assets/images/Hero/gallery-banner.jpg";


function Gallery() {
  const images = [
    "https://via.placeholder.com/700x500",
    "https://via.placeholder.com/700x500",
    "https://via.placeholder.com/700x500",
    "https://via.placeholder.com/700x500",
    "https://via.placeholder.com/700x500",
    "https://via.placeholder.com/700x500",
    "https://via.placeholder.com/700x500",
    "https://via.placeholder.com/700x500",
  ];

  return (
    <>
      {/* Hero */}

      {/* Hero */}
<section
  className="page-hero"
  style={{
    backgroundImage: `url(${galleryBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="overlay">
    <div className="container text-center">
      <h1>Church Gallery</h1>
      <p>Capturing Moments of Worship, Fellowship & Community</p>
    </div>
  </div>
</section>
      {/* Intro */}

      <section className="gallery-intro">

        <div className="container">

          <div className="section-title">

            <span className="section-tag">
              OUR MEMORIES
            </span>

            <h2>Life at PCEA Ngong Parish</h2>

            <p>
              Explore moments from worship services, conferences, youth
              fellowships, mission work, community outreach and special church
              celebrations.
            </p>

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="gallery-section">

        <div className="container">

          <div className="gallery-grid">

            {images.map((image, index) => (

              <div className="gallery-item" key={index}>

                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="gallery-cta">

        <div className="container text-center">

          <h2>Become Part of Our Story</h2>

          <p>
            We would love to have you join our worship services, fellowships
            and church events as we continue growing together in Christ.
          </p>

          <button className="welcome-btn">
            Visit Our Church
          </button>

        </div>

      </section>
    </>
  );
}

export default Gallery;