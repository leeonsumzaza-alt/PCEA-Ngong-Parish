import { useState, useEffect } from "react";
import "./ChurchSchool.css";

import hero1 from "../assets/images/ChurchSchool/kids1.jpg";
import hero2 from "../assets/images/ChurchSchool/kids2.jpg";
import hero3 from "../assets/images/ChurchSchool/kids3.jpg";
import hero4 from "../assets/images/ChurchSchool/kids4.jpg";
import hero5 from "../assets/images/ChurchSchool/kids5.jpg";

function ChurchSchool() {
  const images = [hero1, hero2, hero3, hero4, hero5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <div className="overlay">
          <div className="container text-center">
            <h1>Church School Ministry</h1>
            <p>Growing Children in Christ</p>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to Church School</h2>

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

      {/* DVBS */}
      <section className="content-section bg-light">
        <div className="container">
          <h2>Daily Vacation Bible School (DVBS)</h2>

          <p>
            Every holiday we organize DVBS where children enjoy Bible lessons,
            worship, games, music, crafts and fellowship.
          </p>
        </div>
      </section>

      {/* Children's Choir */}
      <section className="content-section">
        <div className="container">
          <h2>Children's Choir</h2>

          <p>
            Our children's choir ministers through music during church services
            and special events.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <div className="container">
          <h2 className="text-center mb-4">Upcoming Events</h2>

          <ul>
            <li>Children's Sunday</li>
            <li>DVBS</li>
            <li>Bible Quiz</li>
            <li>Parents Meeting</li>
            <li>Fun Day</li>
          </ul>
        </div>
      </section>

      {/* Parent Resources */}
      <section className="content-section bg-light">
        <div className="container">
          <h2>Parent Resources</h2>

          <p>
            Parents are encouraged to support their children through family
            devotions, Bible reading and prayer at home.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="text-center mb-5">Children's Gallery</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <img
                src="https://picsum.photos/600/400?1"
                className="gallery-image"
                alt="Children"
              />
            </div>

            <div className="col-md-4">
              <img
                src="https://picsum.photos/600/400?2"
                className="gallery-image"
                alt="Children"
              />
            </div>

            <div className="col-md-4">
              <img
                src="https://picsum.photos/600/400?3"
                className="gallery-image"
                alt="Children"
              />
            </div>
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