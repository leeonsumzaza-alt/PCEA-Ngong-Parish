import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";
import events from "../data/Events";
import calendarBanner from "../assets/images/Hero/calendar-banner.jpg";

function Calendar() {
  
  const handleEventClick = (info) => {
    alert(
      `Event: ${info.event.title}\nDate: ${info.event.start.toLocaleDateString()}`
    );
  };

  return (
    <>
      {/* Hero */}
      <section
  className="page-hero"
  style={{
    backgroundImage: `url(${calendarBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="overlay">
    <div className="container text-center">
      <h1>About Us</h1>
      <p>Knowing Christ and Making Him Known</p>
    </div>
  </div>
</section>

      {/* Calendar */}
      <section className="calendar-section">
        <div className="container">

          <div className="section-title text-center">
            <span className="section-tag">EVENT CALENDAR</span>
            <h2>Parish Activities</h2>
            <p>
              Browse our church calendar to stay informed about worship
              services, fellowships, meetings, conferences and special events.
            </p>
          </div>

          <div className="calendar-wrapper">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth",
              }}
              events={events}
              eventClick={handleEventClick}
              height="auto"
            />
          </div>

        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">

          <h2 className="text-center mb-5">
            Upcoming Events
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="event-card">
                <h4>Sunday Worship</h4>
                <p>2 August 2026</p>
                <span>8:30 AM</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="event-card">
                <h4>Youth Fellowship</h4>
                <p>7 August 2026</p>
                <span>2:00 PM</span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="event-card">
                <h4>Women's Guild</h4>
                <p>10 August 2026</p>
                <span>10:00 AM</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Calendar;