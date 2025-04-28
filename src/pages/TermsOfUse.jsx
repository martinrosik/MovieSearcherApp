import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useEffect } from "react";

function TermsOfUse() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/termsofuse") {
      document.title = "Terms & Policies | Movie Searcher";
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 mt-24 py-12 bg-neutral-800 rounded-2xl">
        <h1 className="text-3xl font-bold text-sky-400 mb-6 text-center">
          <strong>Terms and Policies</strong>
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4 underline">
            <strong>Introduction</strong>
          </h2>
          <p className="text-sky-200 leading-relaxed">
            By using the <strong>MovieSearcher.com</strong> portal, you agree to
            be bound by these terms of use and consent to the collection and use
            of data in accordance with our privacy policy. If you do not agree
            with any of these terms, please discontinue using or accessing this
            portal.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4 underline">
            <strong>User Contributions</strong>
          </h2>
          <p className="text-sky-200 leading-relaxed">
            You agree not to post any <strong>advertisements</strong>, send{" "}
            <strong>spam</strong>, insult others, or engage in{" "}
            <strong>hate speech</strong>. We reserve the right to remove any
            post suspected of violating these rules at any time.{" "}
            <strong>Repeated violations</strong> may result in restrictions on
            your ability to post user content.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4 underline">
            <strong>Disclaimer</strong>
          </h2>
          <p className="text-sky-200 leading-relaxed">
            We are not responsible for the <strong>privacy policies</strong> or
            content of <strong>external websites</strong>. The website operator
            does not bear responsibility for opinions expressed by users.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4 underline">
            <strong>Privacy Policy</strong>
          </h2>

          <h3 className="text-xl font-medium text-sky-600 mb-2">
            <strong>1. Cookies</strong>
          </h3>
          <p className="text-sky-200 leading-relaxed">
            Cookies are small data files placed on your device by a web server
            to enhance your interaction and experience. They help retain your
            settings so that you do not have to reconfigure them upon each
            visit.{" "}
            <strong>We do not use cookies to collect personal data</strong>{" "}
            unrelated to the website or your interaction with it.
          </p>

          <h3 className="text-xl font-medium text-sky-600 mb-2">
            <strong>2. Google Analytics</strong>
          </h3>
          <p className="text-sky-200 leading-relaxed">
            We use <strong>"Google Analytics"</strong> tools to measure site
            traffic, including information about where you came from and which
            content interests you the most.
          </p>

          <h3 className="text-xl font-medium text-sky-600 mb-2">
            <strong>3. Security</strong>
          </h3>
          <p className="text-sky-200 leading-relaxed">
            Your personal information is stored on{" "}
            <strong>secure servers</strong> and protected using advanced{" "}
            <strong>SSL encryption</strong> technology. However, due to the open
            nature of the internet, we cannot fully guarantee that
            communications between you and us or stored information will be
            completely safe from{" "}
            <strong>unauthorized third-party access</strong>, such as hacking.
            We have implemented various technical measures to protect data from{" "}
            <strong>loss, destruction, or misuse</strong>, but we cannot provide
            an absolute guarantee against such incidents.
          </p>

          <h3 className="text-xl font-medium text-sky-600 mb-2">
            <strong>4. Communication</strong>
          </h3>
          <p className="text-sky-200 leading-relaxed">
            By providing your <strong>email address</strong>, you explicitly
            consent to receiving emails from us. We may use email to communicate
            with you or to send you requested information.
          </p>

          <h3 className="text-xl font-medium text-sky-600 mb-2">
            <strong>5. European Privacy Rights</strong>
          </h3>
          <p className="text-sky-200 leading-relaxed">
            We comply with the{" "}
            <strong>General Data Protection Regulation (GDPR)</strong> and
            relevant data protection laws.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-400 mb-4 underline">
            <strong>Final Provisions</strong>
          </h2>
          <p className="text-sky-200 leading-relaxed">
            We may update or modify parts of these terms and policies from time
            to time. You acknowledge and agree that it is your responsibility to
            review any changes.{" "}
            <strong>Modifications become effective 15 days</strong> after the
            updated version is published.
          </p>

          <p className="text-sky-200 mt-8 leading-relaxed">
            <strong>Last updated:</strong> March 29, 2025.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsOfUse;
