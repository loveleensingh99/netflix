import React from "react";
import MoviesList from "./MovieList";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const MoviesListContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  if (!movies) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      {movies && (
        <div className="pl-3 bg-black md:pl-12 pr-8">
          <div className="relative z-20 pt-10 mt-0 md:-mt-44">
            <MoviesList
              title={"Now Playing"}
              movies={movies.nowPlayingMovies || []}
            />
          </div>
          <MoviesList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies || []}
          />
          <MoviesList
            title={"Popular Movies"}
            movies={movies.popularMovies || []}
          />
          <MoviesList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies || []}
          />
          <MoviesList
            title={"Horror Movies"}
            movies={movies.nowPlayingMovies || []}
          />
        </div>
      )}
    </>
  );
};

export default MoviesListContainer;
