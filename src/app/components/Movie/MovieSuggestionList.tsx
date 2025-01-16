import React from "react";
import MovieCard from "./MovieCard";
import Link from "next/link";

const MovieSuggestionsList = ({ item }: { item: any }) => {
  const { poster_path, id, title } = item;
  return (
    <>
      <div className="flex flex-col justify-between gap-3 px-5">
         
          <h1 className="py-2 text-lg font-bold text-white ">{title}</h1>
          <div className="pb-3">
            <MovieCard posterPath={poster_path} id={id} />
          </div>
         
      </div>
    </>
  );
};

export default MovieSuggestionsList;
