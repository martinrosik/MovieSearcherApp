import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-sky-400 flex justify-center items-center mt-40 mb-5">
      <div className="flex flex-col gap-5">
        <p>
          © { currentYear } <strong>Martin Rosík</strong>. All rights reserved.
        </p>
        <div className="flex flex-row justify-center items-center gap-6 text-3xl">
          <a href="https://www.instagram.com/martin_rosik/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-sky-600" />
          </a>
          <a href="https://x.com/martin_rosik" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-sky-600" />
          </a>
          <a href="https://github.com/martinrosik" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-sky-600" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
