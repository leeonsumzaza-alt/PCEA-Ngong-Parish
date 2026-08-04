import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import hero1 from "../../assets/images/Hero/Hero1.jpg";
import hero2 from "../../assets/images/Hero/Hero2.jpg";
import hero3 from "../../assets/images/Hero/Hero3.jpg";

function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 5000);

  return () => clearInterval(interval);
}, [images.length]);

  return (
    <section
  className="page-hero"
  style={{
    backgroundImage: `url(${images[currentImage]})`,
  }}
>
      <div className="hero-overlay">

        <div className="container">

          <div className="hero-content">

            <span
              className="hero-badge"
              data-aos="fade-down"
            >
              Welcome to PCEA Ngong Parish
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Growing Together
              <br />
              <span>in Christ</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Join us for worship, fellowship, discipleship and
              service as we seek to know Christ and make Him known
              within Ngong and beyond.
            </p>

            <div
              className="hero-service"
              data-aos="zoom-in"
              data-aos-delay="550"
            >
              Sunday Worship • 8:30 AM &nbsp;|&nbsp; 10:30 AM
            </div>

            <blockquote
              className="hero-verse"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              "Go therefore and make disciples of all nations."
              <span>Matthew 28:19</span>
            </blockquote>

            <div
              className="hero-buttons"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>

              <Link to="/contact" className="btn-secondary">
                Plan Your Visit
              </Link>

              <Link to="/sermons" className="btn-outline">
                Watch Sermons
              </Link>
            </div>

            <div className="hero-slider">

              {images.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={
                    currentImage === index
                      ? "slider-dot active"
                      : "slider-dot"
                  }
                />

              ))}

            </div>

          </div>

        </div>

        <div className="scroll-down">

          <span>Scroll</span>

          <div className="mouse">

            <div className="wheel"></div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;