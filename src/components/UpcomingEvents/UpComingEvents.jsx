import { Link } from "react-router-dom";
import events from "../../data/Events";
import "./UpComingEvents.css";

function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <div className="container">

        <div className="section-title text-center">
          <span className="section-tag">UPCOMING EVENTS</span>
          <h2>What's Happening</h2>
          <p>
            Join us in worship, fellowship and ministry through our upcoming
            church events.
          </p>
        </div>

        <div className="row g-4">

          {events.slice(0, 3).map((event) => (
            <div className="col-lg-4 col-md-6" key={event.id}>

              <div className="event-card">

                <div className="event-date">
                  {new Date(event.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                  })}
                </div>

                <h3>{event.title}</h3>

                <p><strong>Time:</strong> {event.time}</p>

                <p><strong>Venue:</strong> {event.location}</p>

              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-5">
          <Link to="/calendar" className="events-btn">
            View Full Calendar
          </Link>
        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;