import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./pages/HomePages";
import MovieDetails from "./pages/MovieDetails";
import BrowsePage from "./pages/BrowsePage";
import MainLayout from "./components/layouts/Layout";
import LoginPage from "./pages/LoginPage";
import DataContextProvider from "./contexts/DataContext";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<MainLayout />}>
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
            <Route path="/movie/:movieId" element={<MovieDetails />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
