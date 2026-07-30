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

function Contact() {
  return (
    <>
      {/* Hero */}

      <section className="page-hero">
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

                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <FaInstagram />
                  </a>

                  <a href="#">
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

                <button className="welcome-btn mt-4">
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
          title="PCEA Ngong Parish"
          src="https://www.google.com/maps?q=Ngong%20Town&output=embed"
          loading="lazy"
        ></iframe>

      </section>

    </>
  );
}

export default Contact;