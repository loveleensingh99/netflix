import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestionsList from "../Movie/MovieSuggestionList";
import MovieSuggestions from "./MovieSuggestions";

const MainSearchView = () => {
  return (
    <>
      <SearchBar />
      <MovieSuggestions />
    </>
  );
};

export default MainSearchView;
