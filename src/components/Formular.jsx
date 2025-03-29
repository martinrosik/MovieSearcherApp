import { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { useLocation, Link } from "react-router";

function Formular() {
  const location = useLocation();
  const [agreeTerms, setAgreeTerms] = useState(false);

  useEffect(() => {
    if (location.pathname === "/contact-us") {
      document.title = "Contact Us | Movie Searcher";
    }
  }, [location]);

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-3 justify-center items-center mt-14 bg-neutral-800 p-16 w-[500px] rounded-3xl">
        <h1 className="text-3xl text-sky-400">Contact Us</h1>
        <p className="flex text-1xl text-sky-400 justify-center items-center text-center">
          We're here to help you with any questions or feedback! 💬
        </p>
        <form
          id="contact-form"
          className="flex flex-col gap-5 justify-center items-center"
        >
          <div className="relative w-72">
            <input
              type="text"
              id="name"
              className="w-full h-12 px-4 pl-10 bg-sky-400 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-neutral-800"
              placeholder="Full Name"
              required
            />
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-neutral-800" />
          </div>

          <div className="relative w-72">
            <input
              type="email"
              id="email"
              className="w-full h-12 px-4 pl-10 bg-sky-400 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-neutral-800"
              placeholder="Email Address"
              required
            />
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-neutral-800" />
          </div>

          <div className="relative w-72">
            <input
              type="tel"
              id="phone"
              className="w-full h-12 px-4 pl-10 bg-sky-400 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-neutral-800"
              placeholder="Phone Number"
              required
            />
            <FaPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-neutral-800" />
          </div>

          <div className="relative w-72">
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 bg-sky-400 text-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-neutral-800"
              placeholder="Your Message"
              required
            />
          </div>

          <div className="flex items-center w-72 mt-4">
            <label
              htmlFor="agreeTerms"
              className="flex items-center cursor-pointer"
            >
              <div
                className={`w-10 h-5 flex items-center rounded-full p-1 transition-all duration-300 ${
                  agreeTerms ? "bg-sky-400" : "bg-neutral-600"
                }`}
              >
                <div
                  className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-all duration-300 ${
                    agreeTerms ? "translate-x-5" : ""
                  }`}
                ></div>
              </div>
            </label>
            <Link
              to="/termsofuse"
              className="ml-2 text-sky-400 hover:underline"
            >
              Agree to Terms
            </Link>
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
              className="hidden"
            />
          </div>

          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-600 h-12 w-72 flex justify-center items-center rounded-lg text-neutral-800 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
        <div className="flex mt-4 gap-1">
          <a href="/faq" className="text-sm text-sky-400">
            Check our FAQs
          </a>
          <Link to="/support" className="text-sm text-sky-200">
            Need further assistance?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Formular;
