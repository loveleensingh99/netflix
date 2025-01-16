import Link from "next/link";
import React from "react";

interface TVideoTitle {
  original_title: string;
  overview: string;
  trailerVideo: {key:string};
  tmdbId: string;
}
const VideoTitle: React.FC<TVideoTitle> = ({
  original_title,
  overview,
  trailerVideo,
  tmdbId,
} ) => {
  console.log(
    "🚀 ~ file: VideoTitle.jsx:4 ~ VideoTitle ~ trailerVideo:",
    trailerVideo
  );
  return (
    <>
      <div className="absolute w-[99%] px-12 md:px-28 aspect-video pt-[40%] md:pt-[20%] bg-gradient-to-r from-black">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-6xl">
          {original_title}
        </h2>
        <p className="hidden py-6 text-lg text-white md:w-1/3 xl:block">
          {overview}
        </p>
        <div className="flex h-auto gap-2 pt-2">
          <Link
            href={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}
            target="_black"
            className="px-3 py-2 text-lg text-center text-black bg-white rounded-md md:w-32 hover:bg-opacity-80 bg-opacity-90"
          >
            {" "}
            ▶Play
          </Link>
          <Link
            href={`https://www.themoviedb.org/movie/${tmdbId}`}
            target="_blank"
            className="px-3 py-2 text-lg text-center text-white bg-opacity-50 rounded-md md:w-32 bg-gray-50"
          >
            ℹ More Info
          </Link>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
