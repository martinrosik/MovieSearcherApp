import { useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function SignIn() {
  const location = useLocation();
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login") {
      document.title = "Sign In | Movie Searcher";
    }
  }, [location]);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-3 justify-center items-center mt-14 bg-neutral-800 p-16 w-[500px] rounded-3xl">
        <h1 className="text-3xl text-sky-400">Sign In</h1>
        <p className="text-1xl text-sky-400">
          Enter the paradise of movies and TV shows! 🎞️
        </p>
        <form
          id="login-form"
          className="flex flex-col gap-5 justify-center items-center"
        >
          <div className="relative w-72">
            <input
              type="email"
              id="email"
              className="w-full h-12 px-4 pl-10 bg-sky-400 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-neutral-800"
              placeholder="Email"
              required
            />
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-neutral-800" />
          </div>

          <div className="relative w-72">
            <input
              type="password"
              id="password"
              className="w-full h-12 px-4 pl-10 bg-sky-400 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-neutral-800"
              placeholder="Password"
              required
            />
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-neutral-800" />
          </div>

          <div className="flex items-center gap-4 w-72 mt-4">
            <label
              htmlFor="rememberMe"
              className="flex items-center cursor-pointer"
            >
              <div
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-all duration-300 ${
                  rememberMe ? "bg-sky-400" : "bg-neutral-600"
                }`}
              >
                <div
                  className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                    rememberMe ? "translate-x-5" : ""
                  }`}
                ></div>
              </div>
              <span className="ml-2 text-sky-400">Remember me</span>
            </label>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-600 h-12 w-72 flex justify-center items-center rounded-lg text-neutral-800 transition-all duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-sky-400">
          <a href="/change-password" className="text-sm">
            Forgot your password? Change it here.
          </a>
        </div>
        <div className="flex mt-4 gap-1">
          <Link to="/register" className="text-sm text-sky-400">
            Don't have an account yet?
          </Link>
          <Link to="/register" className="text-sm text-sky-200">
            Sign up here to get started!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
