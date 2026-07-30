import { Link } from "react-router-dom";

function Visit() {
  return (
    <section className="py-5" data-aos="fade-left">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <img
              src="https://via.placeholder.com/700x500"
              alt="Church"
              className="img-fluid rounded shadow"
            />

          </div>

          <div className="col-lg-6">

            <small className="text-primary fw-bold">
              PLAN YOUR VISIT
            </small>

            <h2 className="display-5 fw-bold mt-2">
              We'd Love to Welcome You
            </h2>

            <p className="lead text-muted">
              Whether you're visiting for the first time or looking for a church
              family, you'll always find a warm welcome at PCEA Ngong Parish.
            </p>

            <div className="mt-4">

              <h5>📍 Location</h5>
              <p>Ngong Town, Kajiado County</p>

              <h5>⛪ Sunday Services</h5>
              <p>8:00 AM & 10:30 AM</p>

            </div>

            <Link to="/contact" className="btn btn-primary btn-lg mt-3">
              Get Directions
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Visit;