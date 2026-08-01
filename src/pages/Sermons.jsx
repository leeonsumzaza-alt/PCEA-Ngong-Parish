import "./Sermons.css";
import { FaPlayCircle, FaUser, FaCalendarAlt } from "react-icons/fa";
import sermonsBanner from "../assets/images/Hero/sermons-banner.jpg";
import { useEffect, useState } from "react";
import { getLatestVideos } from "../services/youtube";

function Sermons() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadVideos = async () => {
    try {
      const data = await getLatestVideos();

      console.log(data); // <-- Add this

      setVideos(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  loadVideos();
}, []);

  return (
    <>
      {/* Hero */}

      <section
        className="page-hero"
        style={{
          backgroundImage: `url(${sermonsBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay">
          <div className="container text-center">
            <h1>Sermons</h1>
            <p>Growing Through the Word of God</p>
          </div>
        </div>
      </section>

      {/* Featured Sermon */}

      <section className="featured-sermon">
        <div className="container">

          {loading ? (

            <div className="text-center py-5">
              <h3>Loading latest sermon...</h3>
            </div>

          ) : videos.length > 0 ? (

            <div className="row align-items-center g-5">

              <div className="col-lg-6">

                <div className="ratio ratio-16x9">

                  <iframe
                    src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                    title={videos[0].snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                </div>

              </div>

              <div className="col-lg-6">

                <span className="section-tag">
                  FEATURED SERMON
                </span>

                <h2>{videos[0].snippet.title}</h2>

                <p>
                  {videos[0].snippet.description
                    ? videos[0].snippet.description.substring(0, 250)
                    : "Watch our latest sermon from PCEA Ngong Parish."}
                </p>

                <p>
                  <FaCalendarAlt />{" "}
                  {new Date(
                    videos[0].snippet.publishedAt
                  ).toLocaleDateString()}
                </p>

                <a
                  href={`https://www.youtube.com/watch?v=${videos[0].id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="welcome-btn"
                >
                  <FaPlayCircle /> Watch on YouTube
                </a>

              </div>

            </div>

          ) : (

            <div className="text-center py-5">
              <h3>No sermons found.</h3>
            </div>

          )}

        </div>
      </section>

      {/* Latest Sermons */}

      <section className="sermons-section">
        <div className="container">

          <div className="section-title">

            <span className="section-tag">
              RECENT MESSAGES
            </span>

            <h2>Latest Sermons</h2>

          </div>

          <div className="row g-4">

  {loading ? (

    <div className="col-12 text-center py-5">
      <h4>Loading sermons...</h4>
    </div>

  ) : videos.length > 0 ? (

    videos.map((video) => (

      <div
        className="col-lg-4 col-md-6"
        key={video.id.videoId}
      >

        <div className="sermon-card">

          <div className="sermon-image">

            <img
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />

            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="play-overlay"
            >
              <FaPlayCircle />
            </a>

          </div>

          <div className="sermon-content">

            <h3>{video.snippet.title}</h3>

            <p>
              <FaUser /> PCEA Ngong Parish
            </p>

            <p>
              <FaCalendarAlt />{" "}
              {new Date(video.snippet.publishedAt).toLocaleDateString()}
            </p>

            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-btn"
            >
              Watch on YouTube
            </a>

          </div>

        </div>

      </div>

    ))

  ) : (

    <div className="col-12 text-center py-5">
      <h4>No sermons available.</h4>
      <p>Please check back later.</p>
    </div>

  )}

</div>
</div>
</section>

    </>
  );
}  
export default Sermons;