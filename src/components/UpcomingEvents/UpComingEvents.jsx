import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import events from "../../data/Events";
import "./UpComingEvents.css";

function UpcomingEvents() {

  return (

    <section className="events-section">

      <div className="container">

        <div className="section-title text-center">

          <span className="section-tag">
            UPCOMING EVENTS
          </span>

          <h2>
            What's Happening at PCEA Ngong Parish
          </h2>

          <p className="section-description">
            Stay connected with worship services, conferences,
            fellowships, ministry meetings and special events
            taking place throughout our parish.
          </p>

        </div>

        <div className="row g-4">

          {events.slice(0, 3).map((event) => (

            <div
              className="col-lg-4 col-md-6"
              key={event.id}
            >

              <div className="event-card">

                <div className="event-date">

                  <span className="day">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                    })}
                  </span>

                  <span className="month">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      month: "short",
                    })}
                  </span>

                </div>

                <div className="event-content">

                  <span className="section-tag">
                    UPCOMING EVENT
                  </span>

                  <h3>
                    {event.title}
                  </h3>

                  <div className="event-meta">

                    <p>

                      <FaClock />

                      {event.time}

                    </p>

                    <p>

                      <FaMapMarkerAlt />

                      {event.location}

                    </p>

                  </div>

                  <Link
                    to="/calendar"
                    className="event-link"
                  >

                    View Details

                    <FaArrowRight />

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-5">

          <Link
            to="/calendar"
            className="welcome-btn"
          >

            <FaCalendarAlt />

            View Full Calendar

          </Link>

        </div>

      </div>

    </section>

  );
}

export default UpcomingEvents;