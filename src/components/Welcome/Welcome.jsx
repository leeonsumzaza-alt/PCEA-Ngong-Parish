import { Link } from "react-router-dom";
import "./Welcome.css";
import welcomeImage from "../../assets/images/About/Welcome1.jpg";

function Welcome() {
  return (
    <section className="welcome" data-aos="fade-up">
      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-6">

            <span className="section-tag">
              WELCOME TO PCEA NGONG PARISH
            </span>

            <h2>
              A Christ-Centred Church for Worship, Growth and Service
            </h2>

            <div className="title-line"></div>

            <p>
              PCEA Ngong Parish is a vibrant congregation committed to knowing
              Christ and making Him known. Through biblical teaching, heartfelt
              worship and Christian fellowship, we seek to nurture believers
              and reach our community with the love of Christ.
            </p>

            <p>
              Whether you are visiting for the first time, searching for a
              church home or looking to deepen your faith, you are warmly
              welcome to worship and grow with us.
            </p>

            <Link to="/about" className="welcome-btn">
              Discover More
            </Link>

          </div>

          <div className="col-lg-6">

            <div className="welcome-image">

              <img
  src={welcomeImage}
  alt="PCEA Ngong Parish Congregation"
/>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Welcome;