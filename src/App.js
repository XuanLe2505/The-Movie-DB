import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import MovieDetails from "./pages/MovieDetails";
import BrowsePage from "./pages/BrowsePage";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/browser" element={<BrowsePage />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
