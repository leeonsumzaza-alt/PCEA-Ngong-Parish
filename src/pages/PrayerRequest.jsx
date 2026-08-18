import { useState } from "react";
import { FaPrayingHands, FaHeart } from "react-icons/fa";
import "./PrayerRequest.css";

function PrayerRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="prayer-page">

      {/* Hero */}
      <section className="prayer-hero">
        <div className="prayer-hero-overlay">
          <div className="prayer-hero-content">
            <span className="prayer-hero-icon">
              <FaPrayingHands />
            </span>

            <h1>Prayer Request</h1>

            <p>
              Share your prayer request with us. We are here to stand
              with you in prayer.
            </p>
          </div>
        </div>
      </section>


      {/* Introduction */}
      <section className="prayer-intro">
        <div className="prayer-container">

          <span className="section-tag">
            WE BELIEVE IN THE POWER OF PRAYER
          </span>

          <h2>
            You Don't Have to Pray Alone
          </h2>

          <p>
            Whatever you are going through, we would be honoured to
            pray with you. Share your prayer request below and our
            prayer team will stand with you before God.
          </p>

          <div className="prayer-verse">
            <FaPrayingHands />

            <blockquote>
              “Cast all your anxiety on him because he cares for you.”
            </blockquote>

            <span>— 1 Peter 5:7</span>
          </div>

        </div>
      </section>


      {/* Prayer Form */}
      <section className="prayer-form-section">
        <div className="prayer-container">

          <div className="prayer-form-wrapper">

            <div className="prayer-form-header">
              <FaPrayingHands />

              <h2>Submit a Prayer Request</h2>

              <p>
                Fill in the form below and our prayer team will
                receive your request.
              </p>
            </div>


            {submitted ? (

              <div className="prayer-success">

                <div className="success-icon">
                  <FaHeart />
                </div>

                <h3>Thank You for Sharing</h3>

                <p>
                  Your prayer request has been received. Our prayer
                  team will stand with you in prayer.
                </p>

                <p>
                  May God give you strength, peace and comfort.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="prayer-reset-btn"
                >
                  Submit Another Request
                </button>

              </div>

            ) : (

              <form
                className="prayer-form"
                onSubmit={handleSubmit}
              >

                {/* Name */}
                <div className="form-group">

                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />

                </div>


                {/* Email */}
                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                  />

                </div>


                {/* Phone */}
                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />

                </div>


                {/* Prayer Request */}
                <div className="form-group">

                  <label htmlFor="prayer">
                    Your Prayer Request <span>*</span>
                  </label>

                  <textarea
                    id="prayer"
                    name="prayer"
                    rows="7"
                    placeholder="Please share your prayer request..."
                    required
                  ></textarea>

                </div>


                {/* Confidentiality */}
                <div className="prayer-checkbox">

                  <input
                    type="checkbox"
                    id="confidential"
                    name="confidential"
                  />

                  <label htmlFor="confidential">
                    Please keep my prayer request confidential.
                  </label>

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="prayer-submit-btn"
                >
                  <FaPrayingHands />
                  Submit Prayer Request
                </button>

              </form>

            )}

          </div>

        </div>
      </section>


      {/* Closing */}
      <section className="prayer-closing">

        <div className="prayer-container">

          <FaPrayingHands />

          <h2>
            “Pray without ceasing.”
          </h2>

          <p>
            1 Thessalonians 5:17
          </p>

        </div>

      </section>

    </div>
  );
}

export default PrayerRequest;