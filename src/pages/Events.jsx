import "./Events.css";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import eventsBanner from "../assets/images/Hero/calendar-banner.jpg";

function Events() {

  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "8:00 AM & 10:30 AM",
      venue: "Main Sanctuary",
      image: "https://via.placeholder.com/700x450",
    },
    {
      title: "Midweek Fellowship",
      date: "Every Wednesday",
      time: "5:30 PM",
      venue: "Church Hall",
      image: "https://via.placeholder.com/700x450",
    },
    {
      title: "Youth Fellowship",
      date: "Every Friday",
      time: "6:00 PM",
      venue: "Youth Centre",
      image: "https://via.placeholder.com/700x450",
    },
    {
      title: "Prayer Meeting",
      date: "Every Thursday",
      time: "6:00 AM",
      venue: "Main Sanctuary",
      image: "https://via.placeholder.com/700x450",
    },
    {
      title: "Family Sunday",
      date: "First Sunday Every Month",
      time: "10:30 AM",
      venue: "Main Sanctuary",
      image: "https://via.placeholder.com/700x450",
    },
    {
      title: "Church Conference",
      date: "Coming Soon",
      time: "To Be Announced",
      venue: "PCEA Ngong Parish",
      image: "https://via.placeholder.com/700x450",
    },
  ];

  return (
    <>

     {/* ================= EVENTS HERO ================= */}

<section
  className="about-hero"
  style={{
    backgroundImage:`url(${eventsBanner})`,
  }}
>

  <div className="about-hero-overlay">

    <div className="container">

      <div
        className="about-hero-content"
        data-aos="fade-up"
      >

        <span className="hero-breadcrumb">
          HOME / EVENTS
        </span>


        <h1>
          Church
          <span> Events</span>
        </h1>


        <div className="hero-divider"></div>


        <p>
          Stay connected with upcoming gatherings,
          celebrations and activities at PCEA Ngong Parish.
        </p>


      </div>

    </div>

  </div>

</section>

      {/* Intro */}

      <section className="events-intro">

        <div className="container">

          <div className="section-title">

            <span className="section-tag">
              JOIN US
            </span>

            <h2>Upcoming Events</h2>

            <p>
              Worship, fellowship and grow with us through our weekly services,
              conferences, fellowships and special church events.
            </p>

          </div>

        </div>

      </section>

      {/* Events */}

      <section className="events-section">

        <div className="container">

          <div className="row g-4">

            {events.map((event, index) => (

              <div className="col-lg-4 col-md-6" key={index}>

                <div className="event-card">

                  <img
                    src={event.image}
                    alt={event.title}
                  />

                  <div className="event-content">

                    <h3>{event.title}</h3>

                    <p>
                      <FaCalendarAlt />
                      {event.date}
                    </p>

                    <p>
                      <FaClock />
                      {event.time}
                    </p>

                    <p>
                      <FaMapMarkerAlt />
                      {event.venue}
                    </p>

                    <button className="welcome-btn">
                      Learn More
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="events-cta">

        <div className="container text-center">

          <h2>You're Always Welcome</h2>

          <p>
            We would love to worship, pray and fellowship with you. Join us at
            any of our upcoming services and church events.
          </p>

          <button className="welcome-btn" onClick={() => window.location.href = "/calendar"}>
            View Church Calendar
          </button>

        </div>

      </section>

    </>
  );
}

export default Events;