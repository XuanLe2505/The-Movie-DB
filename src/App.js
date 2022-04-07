import "./App.css";
import { FormProvider } from "./components/form";
import MovieSearch from "./components/MovieSearch";
import MovieSort from "./components/MovieSort";
import SearchContextProvider from "./contexts/SearchContext";
import { useForm } from "react-hook-form";

const defaultValues = {
  gender: [],
  category: "All",
  priceRange: "",
  sortBy: "Title (A-Z)",
  searchQuery: "",
};

function App() {
  const methods = useForm({ defaultValues });
  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchContextProvider>
        <MovieSearch />
        <FormProvider methods={methods}>
          <MovieSort />
        </FormProvider>
      </SearchContextProvider>
    </div>
  );
}

export default App;
