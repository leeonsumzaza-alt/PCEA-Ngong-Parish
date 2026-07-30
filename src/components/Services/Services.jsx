import "./Services.css";
import { FaChurch, FaBible, FaPrayingHands } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaChurch />,
      title: "Sunday Worship",
      time: "8:00 AM",
      description:
        "Join us every Sunday for inspiring worship, biblical teaching and fellowship.",
    },
    {
      icon: <FaBible />,
      title: "Second Service",
      time: "10:30 AM",
      description:
        "A vibrant worship experience for families, youth and children with practical biblical teaching.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Midweek Fellowship",
      time: "Wednesday • 5:30 PM",
      description:
        "Gather with us for prayer, Bible study and spiritual encouragement during the week.",
    },
  ];

  return (
    <section className="services" data-aos="fade-up">
      <div className="container">

        <div className="section-title">

          <span className="section-tag">
            JOIN US THIS WEEK
          </span>

          <h2>Service Times</h2>

          <p>
            We warmly invite you to worship with us, grow in God's Word and
            experience authentic Christian fellowship.
          </p>

        </div>

        <div className="service-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <div className="service-time">
                {service.time}
              </div>

              <p>{service.description}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;