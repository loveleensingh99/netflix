"use client";
import React from "react";
import VideoTitle from "./VideoTitle";
import { RootState } from "../redux/store";
import VideoBg from "./VideoBg";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );
  const trailerVideo = useSelector(
    (store: RootState) => store.movies?.trailerVideo
  );
  console.log("🚀 ~ MainContainer ~ trailerVideo:", trailerVideo);

  if (!movies) {
    return null;
  }
  

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="md:pt-0 pt-[50%] bg-black">
      <VideoTitle
        original_title={original_title}
        overview={overview}
        trailerVideo={trailerVideo}
        tmdbId={id}
      />
      <VideoBg movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
