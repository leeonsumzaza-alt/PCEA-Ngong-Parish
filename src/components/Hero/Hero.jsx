import { useState, useEffect } from "react";
import {
  FaChurch,
  FaMapMarkerAlt,
  FaPlayCircle,
} from "react-icons/fa";

import "./Hero.css";

import hero1 from "../../assets/images/Hero/Hero1.jpg";
import hero2 from "../../assets/images/Hero/Hero2.jpg";
import hero3 from "../../assets/images/Hero/Hero3.jpg";

function Hero() {
  const slides = [
    {
      image: hero1,
      badge: "WELCOME TO PCEA NGONG PARISH",
      title: "Growing Together",
      highlight: "in Christ",
      description:
        "Join a Christ-centred family committed to worship, discipleship, fellowship and service as we seek to know Christ and make Him known.",
    },
    {
      image: hero2,
      badge: "JOIN US THIS SUNDAY",
      title: "Experience",
      highlight: "God's Presence",
      description:
        "Come and worship with us every Sunday through inspiring praise, biblical teaching and authentic Christian fellowship.",
    },
    {
      image: hero3,
      badge: "KNOW CHRIST • MAKE HIM KNOWN",
      title: "Serving God",
      highlight: "Serving People",
      description:
        "Together we are building lives, strengthening families and transforming our community through the love of Jesus Christ.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(slider);
  }, [slides.length]);

  return (
    <section className="hero">

      {/* Background Images */}

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            currentSlide === index ? "active" : ""
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}

      {/* Overlay */}

      <div className="hero-overlay">

        <div className="container">

          <div className="hero-content">

            <span className="hero-badge">
              {slides[currentSlide].badge}
            </span>

            <h1>

              {slides[currentSlide].title}

              <br />

              <span>
                {slides[currentSlide].highlight}
              </span>

            </h1>

            <p>
              {slides[currentSlide].description}
            </p>

          
            

          </div>

        </div>

        <div className="hero-info">

  <div className="info-item">

    <div className="info-icon">
      <FaChurch />
    </div>

    <div>

      <h4>Sunday Worship</h4>

      <p>8:30 AM & 10:30 AM</p>

    </div>

  </div>

  <div className="info-divider"></div>

  <div className="info-item">

    <div className="info-icon">
      <FaMapMarkerAlt />
    </div>

    <div>

      <h4>Location</h4>

      <p>Ngong Town, Kajiado County</p>

    </div>

  </div>

  <div className="info-divider"></div>

  <a
    href="https://www.youtube.com/@PCEANGONGPARISH"
    target="_blank"
    rel="noopener noreferrer"
    className="info-item online"
  >

    <div className="info-icon">
      <FaPlayCircle />
    </div>

    <div>

      <h4>Watch Live</h4>

      <p>YouTube Livestream</p>

    </div>

  </a>

</div>

        {/* Slider Dots */}

        <div className="hero-dots">

          {slides.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={
                currentSlide === index
                  ? "dot active"
                  : "dot"
              }
            />

          ))}

        </div>

        

      </div>

    </section>
  );
}

export default Hero;