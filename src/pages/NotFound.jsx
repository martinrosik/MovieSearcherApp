import Home from "/src/pages/Home.jsx";
import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  )
}

export default NotFound;