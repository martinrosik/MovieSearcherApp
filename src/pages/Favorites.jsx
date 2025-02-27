import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Favorites() {
  return (
    <>
      <Navbar />
      <h1 className="text-sky-400 text-3xl mt-36 flex justify-center items-center">
        You don`t have any favorite movies here... 😟
      </h1>
      <Footer />
    </>
  );
}

export default Favorites;
