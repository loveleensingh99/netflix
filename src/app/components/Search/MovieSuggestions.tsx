import React from "react";
import { useSelector } from "react-redux";
import MovieSuggestionsList from "../Movie/MovieSuggestionList";
import { RootState } from "@/app/redux/store";

const MovieSuggestions = () => {
  const moviesResults = useSelector(
    (store: RootState) => store.search.moviesResults
  );

  return (
    <>
      {moviesResults && (
        <div className="p-4 m-4 bg-black opacity-90">
          <div className="flex flex-col ">
            <div className="flex overflow-x-scroll custom-scrollbar">
            {moviesResults && moviesResults.length > 0 ? (
            moviesResults.map((item) => (
              <MovieSuggestionsList item={item} key={item.id} />
            ))
          ) : (
            <p className="text-white">No movie suggestions available.</p>
          )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieSuggestions;
