import Navbar from "../components/Navbar";
import Searcher from "../components/Searcher";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieList from "../components/MovieList"

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Searcher />
      <MovieList />
      <Footer />
    </>
  );
}

export default Home;
