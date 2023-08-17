import { Link, useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="hero bg-base-100 min-h-screen bg-gradient-to-r">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">Uh oh! We've got a problem.</h1>
          <p className="py-6 text-2xl">
            Error: {error.status} {error.message || error.statusText}
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn" onClick={() => navigate(-1)}>
              <svg
                className="h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4v-3z"></path>
              </svg>
              <span>Go Back</span>
            </button>
            <Link to="/" className="btn">
              <svg
                className="h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
              </svg>
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
