import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import contactBanner from "../assets/images/Hero/calendar-banner.jpg";

function Contact() {
  return (
    <>
      {/* Hero */}
      {/* Hero */}
<section
  className="page-hero"
  style={{
    backgroundImage: `url(${contactBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="overlay">
    <div className="container text-center">
      <h1>Contact Us</h1>
      <p>We'd Love to Hear From You</p>
    </div>
  </div>
</section>

      {/* Contact */}
      <section className="contact-section">
        <div className="container">
          <div className="row g-5">

            {/* Contact Info */}
            <div className="col-lg-5">

              <span className="section-tag">
                GET IN TOUCH
              </span>

              <h2>Contact Information</h2>

              <div className="contact-card">

                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <h5>Address</h5>
                    <p>Ngong Town, Kajiado County</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaPhone />
                  <div>
                    <h5>Phone</h5>
                    <p>+254 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <h5>Email</h5>
                    <p>info@pceangong.org</p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaClock />
                  <div>
                    <h5>Office Hours</h5>
                    <p>Monday - Friday</p>
                    <p>8:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="social-contact">

                  <a
                    href="https://www.facebook.com/PCEAEnchorroEmuny/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/pcea_ngong_parish_youth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="https://www.youtube.com/@PCEANGONGPARISH"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <FaYoutube />
                  </a>

                </div>

              </div>

            </div>

            {/* Form */}
            <div className="col-lg-7">

              <span className="section-tag">
                SEND A MESSAGE
              </span>

              <h2>We'd Love to Hear From You</h2>

              <form className="contact-form">

                <div className="row">

                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>

                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="mb-4"
                />

                <textarea
                  rows="7"
                  placeholder="Write your message..."
                ></textarea>

                <button type="submit" className="welcome-btn mt-4">
                  Send Message
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* Map */}
<section className="map-section">
  <iframe
    title="PCEA Enchorro Emuny Church"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.699515133887!2d36.65268659591676!3d-1.3569019267331432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0321616ea38d%3A0xdf51067094560e5e!2sPCEA%20Enchorro%20Emuny%20Church!5e0!3m2!1sen!2ske!4v1787211111974!5m2!1sen!2ske"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
</section>
    </>
  );
}

export default Contact;