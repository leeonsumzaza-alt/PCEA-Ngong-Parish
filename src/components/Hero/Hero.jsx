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
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="overlay">
        <div className="container">

          <div className="hero-content">

            <span className="hero-badge">
              Welcome to PCEA Ngong Parish
            </span>

            <h1>
              Growing Together in Christ,
              <br />
              Transforming Lives Through His Love
            </h1>

            <p>
              Join us for worship, fellowship, discipleship and service as we
              seek to know Christ and make Him known within our community and
              beyond.
            </p>

            <div className="service-alert">
              Sunday Worship • 8:30 AM & 10:30 AM
            </div>

            <div className="hero-buttons">

              <Link to="/watch-live" className="btn-primary">
                Watch Live
              </Link>

              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>

              <Link to="/contact" className="btn-outline">
                Plan Your Visit
              </Link>

              <Link to="/give" className="btn-give">
                Give Online
              </Link>

            </div>

            <div className="hero-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={currentImage === index ? "dot active" : "dot"}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>

          </div>

          <div className="scroll-indicator">
            <span>Explore</span>

            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;