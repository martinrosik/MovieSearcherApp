import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-sky-400 flex flex-col justify-center items-center mt-40 mb-5">
      <ul className="flex flex-col justify-center items-center p-3">
        <li>
          <Link to="/termsofuse">Terms and Policies</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact us</Link>
        </li>
      </ul>
      <div className="flex flex-col gap-5">
        <p>
          © {currentYear} <strong>Martin Rosík</strong>. All rights reserved.
          Made with ❤️ on 🌍
        </p>
        <div className="flex flex-row justify-center items-center gap-6 text-3xl">
          <a
            href="https://www.instagram.com/martin_rosik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-sky-600" />
          </a>
          <a
            href="https://x.com/martin_rosik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-sky-600" />
          </a>
          <a
            href="https://github.com/martinrosik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-sky-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
