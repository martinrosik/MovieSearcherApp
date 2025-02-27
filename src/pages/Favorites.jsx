import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Favorites() {
  return (
    <>
      <Navbar />
      <h1 className="text-sky-400 text-xl mt-36 flex justify-center items-center">
        You don’t have any favorite movies yet... 🎬 Start exploring and find
        your next must-watch! 🍿
      </h1>
      <Footer />
    </>
  );
}

export default Favorites;
