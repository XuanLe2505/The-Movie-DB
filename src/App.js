import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import MovieDetails from "./pages/MovieDetails";
import BrowsePage from "./pages/BrowsePage";
import Layout from "./layouts/Layout";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import { FavoriteProvider } from "./contexts/FavoriteContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FavoriteProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePages />} />
              <Route path="/browser" element={<BrowsePage />} />
              <Route path="/movie/:movieId" element={<MovieDetails />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </FavoriteProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
