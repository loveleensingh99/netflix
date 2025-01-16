import Link from "next/link";
import React from "react";

export const IMG_CDN = "https://image.tmdb.org/t/p/w300/";
interface TMovieCard {
  posterPath: string;
  id: string;
}

const MovieCard: React.FC<TMovieCard> = ({ posterPath, id }) => {
  return (
    <Link href={`https://www.themoviedb.org/movie/${id}`} target="_blank">
      <div className="w-32 md:w-48">
        <img src={`${IMG_CDN}${posterPath} `} alt="Movie Card" />
      </div>
    </Link>
  );
};

export default MovieCard;
