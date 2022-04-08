import { Route, Routes } from "react-router-dom";
import "./App.css";
import FilterGenres from "./components/FilterGenres";
import MovieDetails from "./pages/MovieDetails";
import BrowsePage from "./pages/BrowsePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FilterGenres />} />
        <Route path="/browser" element={<BrowsePage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
