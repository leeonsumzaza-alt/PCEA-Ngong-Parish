import { Link } from "react-router-dom";
import "./News.css";
import newsBanner from "../assets/images/Hero/news-banner.jpg";

function News() {
  const news = [
    {
      title: "Youth Camp Registration Now Open",
      date: "28 July 2026",
      image: "https://picsum.photos/600/400?11",
      description:
        "Registration for this year's Youth Camp is now ongoing. All young people are encouraged to register before the deadline.",
    },
    {
      title: "Women's Guild Conference",
      date: "25 July 2026",
      image: "https://picsum.photos/600/400?12",
      description:
        "The Women's Guild will be hosting its annual conference with guest speakers, worship and fellowship.",
    },
    {
      title: "Church Renovation Project",
      date: "20 July 2026",
      image: "https://picsum.photos/600/400?13",
      description:
        "Construction work continues as we improve our church facilities. Thank you for your generous support.",
    },
  ];

  const prayers = [
    "Pray for the sick and those in hospitals.",
    "Pray for our children and youth.",
    "Pray for families within the parish.",
    "Pray for church leadership.",
    "Pray for peace in our nation.",
  ];

  const community = [
    "Community Outreach Programme",
    "Tree Planting Initiative",
    "Food Distribution to Needy Families",
    "Medical Camp",
  ];

  const notices = [
    "Holy Communion Service this Sunday.",
    "Baptism & Confirmation Classes Registration.",
    "Church Office Closed on Public Holidays.",
    "Monthly Parish Fellowship next Saturday.",
  ];

  return (
    <>
      {/* Hero */}

      {/* Hero */}
<section
  className="page-hero"
  style={{
    backgroundImage: `url(${newsBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="overlay">
    <div className="container text-center">
      <h1>News & Announcements</h1>
      <p>Stay Updated With What's Happening At PCEA Ngong Parish</p>
    </div>
  </div>
</section>

      {/* Weekly Bulletin */}

      <section className="bulletin-section">
        <div className="container">

          <div className="section-title text-center">
            <span className="section-tag">WEEKLY BULLETIN</span>
            <h2>Sunday Bulletin</h2>
          </div>

          <div className="bulletin-card">

            <h3>Sunday Worship Bulletin</h3>

            <p>
              Download the latest Sunday bulletin containing the order of
              service, Bible readings, announcements and upcoming activities.
            </p>

            <a href="/" className="welcome-btn">
              Download Bulletin
            </a>

          </div>

        </div>
      </section>

      {/* Parish News */}

      <section className="news-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">PARISH NEWS</span>

            <h2>Latest News</h2>

          </div>

          <div className="row g-4">

            {news.map((item, index) => (

              <div className="col-lg-4" key={index}>

                <div className="news-card">

                  <img src={item.image} alt={item.title} />

                  <div className="news-content">

                    <small>{item.date}</small>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <Link to="/contact" className="read-btn">
                      Read More
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Prayer Requests */}

      <section className="prayer-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">PRAYER REQUESTS</span>

            <h2>Let's Pray Together</h2>

          </div>

          <ul className="list-group">

            {prayers.map((item, index) => (
              <li className="list-group-item" key={index}>
                {item}
              </li>
            ))}

          </ul>

        </div>

      </section>

      {/* Community Updates */}

      <section className="community-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">COMMUNITY UPDATES</span>

            <h2>Serving Our Community</h2>

          </div>

          <div className="row g-4">

            {community.map((item, index) => (

              <div className="col-md-3" key={index}>

                <div className="update-card">

                  <h4>{item}</h4>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Special Notices */}

      <section className="notice-section">

        <div className="container">

          <div className="section-title text-center">

            <span className="section-tag">SPECIAL NOTICES</span>

            <h2>Important Announcements</h2>

          </div>

          <div className="notice-box">

            <ul>

              {notices.map((item, index) => (
                <li key={index}>{item}</li>
              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="news-cta">

        <div className="container text-center">

          <h2>Stay Connected</h2>

          <p>
            Keep checking our News & Announcements page to stay informed about
            everything happening at PCEA Ngong Parish.
          </p>

          <Link to="/calendar" className="welcome-btn">
            View Church Calendar
          </Link>

        </div>

      </section>
    </>
  );
}

export default News;