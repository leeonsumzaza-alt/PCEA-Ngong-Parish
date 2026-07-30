import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5">

      <h1>404</h1>

      <h3>Page Not Found</h3>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link className="btn btn-primary" to="/">
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;