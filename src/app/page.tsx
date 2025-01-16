"use client";
import React from "react";
import { useNowPlayingMovies } from "./hooks/useNowPlayingMovie";
import usePopularMovies from "./hooks/usePopularMovies";
import useTopRatedMovies from "./hooks/useTopRatedMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import MoviesListContainer from "./components/Movie/MoviesListContainer";
import { Footer } from "./components/Footer";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import MainSearchView from "./components/Search/MainSearchView";
import MainContainer from "./components/MainContainer";
 
const page = () => {
  const showSearch = useSelector(
    (store: RootState) => store.search.showSearch
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      {showSearch ? (
        <MainSearchView />
      ) : (
        <>
          <MainContainer />
          <MoviesListContainer />
          <Footer />
        </>
      )}
    </>
  );
};
export default page;
