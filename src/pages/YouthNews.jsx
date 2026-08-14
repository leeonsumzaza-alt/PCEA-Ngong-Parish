import "./YouthNews.css";
import newsBanner from "../assets/images/Hero/news-banner.jpg";
import mainAnnouncementsVideo from "../assets/videos/main-announcements.mp4";

function YouthNews() {
  
  return (
    <>
      {/* HERO */}

      <section
        className="about-hero"
        style={{
                  backgroundImage: `url(${newsBanner})`,
                }}
      >
        <div className="about-hero-overlay">
          <div className="container">
            <div className="about-hero-content">

              <span className="hero-breadcrumb">
                HOME / NEWS / YOUTH
              </span>

              <h1>
                Youth <span>News</span>
              </h1>

              <div className="hero-divider"></div>

              <p>
                Stay updated with youth fellowship,
                events, Bible studies and activities.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS VIDEO */}
      
      <section className="announcement-video-section">
        <div className="container">
      
          <div className="section-title text-center">
      
            <span className="section-tag">
              THIS WEEK'S ANNOUNCEMENTS
            </span>
      
            <h2>
              Watch the Announcements
            </h2>
      
            <p>
              Watch this week's announcements from
              PCEA Ngong Parish.
            </p>
      
          </div>
      
          <div className="announcement-video-wrapper">
      
            <video
              controls
              preload="metadata"
              className="announcement-video"
            >
              <source
                src={mainAnnouncementsVideo}
                type="video/mp4"
              />
      
              Your browser does not support the video player.
            </video>
      
          </div>
      
        </div>
      </section>
    </>
  );
}

export default YouthNews;