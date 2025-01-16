import React from "react";

import { useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { RootState, store } from "../redux/store";

interface TVideoBg {
  movieId: string;
}
const VideoBg: React.FC<TVideoBg> = ({ movieId }) => {
  const trailerVideo = useSelector(
    (store: RootState) => store.movies?.trailerVideo
  );
  useMovieTrailer({movieId});
  return (
    <>
      <iframe
        className="w-[100%] aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
      ></iframe>
    </>
  );
};

export default VideoBg;
