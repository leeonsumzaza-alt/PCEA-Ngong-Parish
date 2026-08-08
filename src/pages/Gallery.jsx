import "./Gallery.css";
import { useState, useEffect } from "react";
import Youth1 from "../assets/images/Gallery/Youth/Youth1.jpg";
import Youth2 from "../assets/images/Gallery/Youth/Youth2.jpg";


import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
} from "react-icons/fa";

import galleryBanner from "../assets/images/Hero/gallery-banner.jpg";


// ======================================================
// GALLERY DATA
// ======================================================
// Add your image imports and paths here later.
//
// Example:
//
// import PCMF1 from "../assets/images/Gallery/PCMF/PCMF1.jpg";
//
// Then add:
//
// {
//   image: PCMF1,
//   title: "PCMF Fellowship",
//   category: "PCMF",
// },
//
// You can create separate folders for each ministry.
// ======================================================

const galleryImages = [

  // ====================================================
  // PCMF
  // ====================================================

  // {
  //   image: PCMF1,
  //   title: "PCMF Fellowship",
  //   category: "PCMF",
  // },

  // {
  //   image: PCMF2,
  //   title: "PCMF Fellowship",
  //   category: "PCMF",
  // },


  // ====================================================
  // YOUTH
  // ====================================================

  {
    image: Youth1,
    title: "Youth Fellowship",
    category: "Youth",
  },

  {
    image: Youth2,
    title: "Youth Activity",
    category: "Youth",
  },

  // ====================================================
  // WOMAN'S GUILD
  // ====================================================

  // {
  //   image: Woman1,
  //   title: "Woman's Guild Fellowship",
  //   category: "Woman's Guild",
  // },


  // ====================================================
  // BRIGADE
  // ====================================================

  // {
  //   image: Brigade1,
  //   title: "Brigade Activity",
  //   category: "Brigade",
  // },


  // ====================================================
  // CHOIR / MUSIC
  // ====================================================

  // {
  //   image: Choir1,
  //   title: "Choir Ministry",
  //   category: "Music Ministry",
  // },


  // ====================================================
  // CHURCH EVENTS
  // ====================================================

  // {
  //   image: Event1,
  //   title: "Church Event",
  //   category: "Events",
  // },

];


function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);


  // ====================================================
  // OPEN SLIDESHOW
  // ====================================================

  const openSlideshow = (index) => {
    setSelectedImage(index);
  };


  // ====================================================
  // CLOSE SLIDESHOW
  // ====================================================

  const closeSlideshow = () => {
    setSelectedImage(null);
  };


  // ====================================================
  // NEXT IMAGE
  // ====================================================

  const nextImage = () => {

    setSelectedImage((current) => {

      if (current === null || galleryImages.length === 0) {
        return current;
      }

      return (current + 1) % galleryImages.length;

    });

  };


  // ====================================================
  // PREVIOUS IMAGE
  // ====================================================

  const previousImage = () => {

    setSelectedImage((current) => {

      if (current === null || galleryImages.length === 0) {
        return current;
      }

      return (
        (current - 1 + galleryImages.length) %
        galleryImages.length
      );

    });

  };


  // ====================================================
  // KEYBOARD CONTROLS
  // ====================================================

  useEffect(() => {

    const handleKeyboard = (event) => {

      if (selectedImage === null) {
        return;
      }

      if (event.key === "Escape") {
        closeSlideshow();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

    };


    document.addEventListener(
      "keydown",
      handleKeyboard
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyboard
      );

    };

  }, [selectedImage]);


  return (
    <>

      {/* ==================================================
          GALLERY HERO
      ================================================== */}

      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${galleryBanner})`,
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


      {/* ==================================================
          INTRO
      ================================================== */}

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


      {/* ==================================================
          GALLERY
      ================================================== */}

      <section className="gallery-section">

        <div className="container">

          {galleryImages.length > 0 ? (

            <div className="gallery-grid">

              {galleryImages.map((photo, index) => (

                <div
                  className="gallery-item"
                  key={index}
                  onClick={() => openSlideshow(index)}
                >

                  <img
                    src={photo.image}
                    alt={photo.title}
                  />


                  <div className="gallery-overlay">

                    <span>
                      {photo.category}
                    </span>


                    <h4>
                      {photo.title}
                    </h4>


                    <div className="gallery-expand">
                      <FaExpand />
                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="gallery-empty">

              <div className="gallery-empty-icon">
                <FaExpand />
              </div>

              <h3>
                Church Gallery
              </h3>

              <p>
                Photos from our church services,
                ministries, events and fellowship
                will be added here.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ==================================================
          SLIDESHOW
      ================================================== */}

      {selectedImage !== null &&
        galleryImages.length > 0 && (

        <div
          className="slideshow-overlay"
          onClick={closeSlideshow}
        >

          {/* CLOSE */}

          <button
            className="slideshow-close"
            onClick={closeSlideshow}
            aria-label="Close gallery"
          >

            <FaTimes />

          </button>


          {/* PREVIOUS */}

          <button
            className="slideshow-arrow slideshow-prev"
            onClick={(event) => {

              event.stopPropagation();
              previousImage();

            }}
            aria-label="Previous image"
          >

            <FaChevronLeft />

          </button>


          {/* IMAGE */}

          <div
            className="slideshow-content"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >

            <img
              src={galleryImages[selectedImage].image}
              alt={galleryImages[selectedImage].title}
              className="slideshow-image"
            />


            <div className="slideshow-caption">

              <span>
                {galleryImages[selectedImage].category}
              </span>


              <h3>
                {galleryImages[selectedImage].title}
              </h3>


              <p>
                {selectedImage + 1} / {galleryImages.length}
              </p>

            </div>

          </div>


          {/* NEXT */}

          <button
            className="slideshow-arrow slideshow-next"
            onClick={(event) => {

              event.stopPropagation();
              nextImage();

            }}
            aria-label="Next image"
          >

            <FaChevronRight />

          </button>

        </div>

      )}


      {/* ==================================================
          CTA
      ================================================== */}

      <section className="gallery-cta">

        <div className="container text-center">

          <span className="section-tag">
            JOIN US
          </span>


          <h2>
            Become Part of Our Story
          </h2>


          <p>

            We warmly invite you to worship with us,
            participate in our ministries and become
            part of the growing family of PCEA Ngong Parish.

          </p>


          <a
            href="/contact"
            className="welcome-btn"
          >
            Worship With Us
          </a>

        </div>

      </section>

    </>

  );

}


export default Gallery;