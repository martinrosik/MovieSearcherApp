import Home from "/src/pages/Home.jsx";
import Favorites from "/src/pages/Favorites.jsx";
import NotFound from "/src/pages/NotFound.jsx";
import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
