import { Route, Routes } from "react-router-dom";
import "./App.css";
import FilterGenres from "./component/FilterGenres";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FilterGenres />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
