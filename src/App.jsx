import Home from "/src/pages/Home.jsx";
import Favorites from "/src/pages/Favorites.jsx";
import NotFound from "/src/pages/NotFound.jsx";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TermsOfUse from "./pages/TermsOfUse";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavoritesProvider>
    </>
  );
}

export default App;
