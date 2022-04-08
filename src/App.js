import { Route, Routes } from "react-router-dom";
import "./App.css";
import FilterGenres from "./components/FilterGenres";
import HomePages from "./pages/HomePages";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/" element={<FilterGenres />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
