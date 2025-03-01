import { useEffect } from "react";
import Home from "/src/pages/Home.jsx";
import { Link, useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, []);

  return (
    <div className="flex flex-col gap-9 justify-center items-center">
      <div className="flex flex-col gap-9 justify-center items-center p-14 mt-36 bg-neutral-800 w-8/12 rounded-xl">
        <h1 className="text-sky-400 text-5xl">404 - Page Not Found 😖</h1>
        <p className="text-sky-400">
          Where the path should lead, There’s only a blank stare. A place
          untouched, Where no code dares to go. The page is lost.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
