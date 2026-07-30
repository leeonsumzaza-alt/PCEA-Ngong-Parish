import "./Sermons.css";
import { FaPlayCircle, FaUser, FaCalendarAlt } from "react-icons/fa";

function Sermons() {
  const sermons = [
    {
      title: "Walking by Faith",
      preacher: "Rev. John Doe",
      date: "20 July 2026",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "The Power of Prayer",
      preacher: "Rev. Jane Doe",
      date: "13 July 2026",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Living in God's Grace",
      preacher: "Guest Speaker",
      date: "6 July 2026",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Hope in Christ",
      preacher: "Rev. John Doe",
      date: "29 June 2026",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <>
      {/* Hero */}

      <section className="page-hero">
        <div className="overlay">
          <div className="container text-center">
            <h1>Sermons</h1>
            <p>Growing Through the Word of God</p>
          </div>
        </div>
      </section>

      {/* Featured */}

      <section className="featured-sermon">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <img
                src="https://via.placeholder.com/800x500"
                alt="Featured Sermon"
                className="img-fluid rounded shadow-lg"
              />

            </div>

            <div className="col-lg-6">

              <span className="section-tag">
                FEATURED SERMON
              </span>

              <h2>Walking by Faith</h2>

              <p>
                Be encouraged through God's Word as we explore what it truly
                means to trust Him in every season of life.
              </p>

              <button className="welcome-btn">
                <FaPlayCircle /> Watch Sermon
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Sermons */}

      <section className="sermons-section">

        <div className="container">

          <div className="section-title">

            <span className="section-tag">
              RECENT MESSAGES
            </span>

            <h2>Latest Sermons</h2>

          </div>

          <div className="row g-4">

            {sermons.map((sermon, index) => (

              <div className="col-lg-3 col-md-6" key={index}>

                <div className="sermon-card">

                  <img
                    src={sermon.image}
                    alt={sermon.title}
                  />

                  <div className="sermon-content">

                    <h3>{sermon.title}</h3>

                    <p>
                      <FaUser /> {sermon.preacher}
                    </p>

                    <p>
                      <FaCalendarAlt /> {sermon.date}
                    </p>

                    <button className="watch-btn">
                      Watch Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="sermon-cta">

        <div className="container text-center">

          <h2>Never Miss a Sermon</h2>

          <p>
            Continue growing in your faith by listening to our latest biblical
            teachings wherever you are.
          </p>

          <button className="welcome-btn">
            View All Sermons
          </button>

        </div>

      </section>
    </>
  );
}

export default Sermons;