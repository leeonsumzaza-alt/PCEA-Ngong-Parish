import "./UpComingEvents.css";
import events from "../../data/Events";

function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <div className="container">
        <h2>Upcoming Events</h2>

        <div className="row">
          {events.slice(0, 3).map((event) => (
            <div className="col-md-4" key={event.id}>
              <div className="event-card">
                <h4>{event.title}</h4>
                <p>{event.date}</p>
                <p>{event.time}</p>
                <p>{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;