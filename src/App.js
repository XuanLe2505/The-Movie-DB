import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import MovieDetails from "./pages/MovieDetails";
import BrowsePage from "./pages/BrowsePage";
import MainLayout from "./components/layouts/Layout";
import LoginPage from "./pages/LoginPage";
import DataContextProvider from "./contexts/DataContext";
import AccountPage from "./pages/AccountPage";
import { AuthProvider } from "./contexts/AuthContext";
import { useLocation } from "react-router-dom";
import FavoriteContextProvider from "./contexts/FavoriteContext";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <>
        <AuthProvider>
          <FavoriteContextProvider>
            <Routes location={location.state?.backgroundLocation || location}>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePages />} />
                <Route
                  path="/browser"
                  element={
                    <DataContextProvider>
                      <BrowsePage />
                    </DataContextProvider>
                  }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/favorite" element={<AccountPage />} />
                <Route path="/movie/:movieId" element={<MovieDetails />} />
              </Route>
            </Routes>
          </FavoriteContextProvider>
        </AuthProvider>
      </>
    </div>
  );
}

export default App;
