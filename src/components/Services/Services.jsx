import "./Services.css";
import {
  FaChurch,
  FaBible,
  FaPrayingHands,
} from "react-icons/fa";

function Services() {

  const services = [

    {
      icon: <FaChurch />,
      title: "First Service",
      time: "Sunday • 8:30 AM",
      description:
        "Join us for a Christ-centred worship experience filled with prayer, praise, biblical teaching and Christian fellowship.",
    },

    {
      icon: <FaBible />,
      title: "Second Service",
      time: "Sunday • 10:30 AM",
      description:
        "A vibrant worship service for families, youth and children with practical biblical teaching for everyday living.",
    },

    {
      icon: <FaPrayingHands />,
      title: "Midweek Fellowship",
      time: "Wednesday • 5:00 PM",
      description:
        "Gather together for Bible study, prayer and spiritual encouragement as we grow together in Christ.",
    },

  ];

  return (

    <section className="services-section">

      <div className="container">

        <div className="section-title text-center">

          <span className="section-tag">
            JOIN US THIS WEEK
          </span>

          <h2>
            Worship With Us
          </h2>

          <p className="section-description">
            Whether you are joining us for the first time or have
            worshipped with us for many years, we warmly welcome
            you to experience heartfelt worship, biblical teaching
            and Christian fellowship.
          </p>

        </div>

        <div className="row g-4">

          {services.map((service, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <div className="service-card">

                <div className="service-icon">

                  {service.icon}

                </div>

                <span className="service-time">

                  {service.time}

                </span>

                <h3>

                  {service.title}

                </h3>

                <p>

                  {service.description}

                </p>

            

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Services;