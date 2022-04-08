import React from "react";
import SearchContextProvider from "../contexts/SearchContext";
import MovieSearch from "../components/MovieSearch";
import SortContextProvider from "../contexts/SortContext";
import FormProvider from "../components/form/FormProvider";
import MovieSort from "../components/MovieSort";
import { useForm } from "react-hook-form";
import { Container } from "@mui/material";

const defaultValues = {
  sortBy: "popularity.desc",
  searchQuery: "",
};
function HomePages() {
  const methods = useForm({ defaultValues });
  return (
    <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
      <SearchContextProvider>
        <MovieSearch />
      </SearchContextProvider>

      <SortContextProvider>
        <FormProvider methods={methods}>
          <MovieSort />
        </FormProvider>
      </SortContextProvider>
    </Container>
  );
}

export default HomePages;
