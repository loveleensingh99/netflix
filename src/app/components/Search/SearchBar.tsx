import React, { useRef, useState } from "react";
import axiosInstance, { axiosInstance2 } from "@/app/utils/axiosInstance";
import { useDispatch } from "react-redux";
import { addSearchBarResults, toggleSearchView } from "@/app/redux/searchSlice";
import { homeBg } from "@/app/assets";
import Image from "next/image";
import { AppDispatch } from "@/app/redux/store";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchText = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSearchToogle = () => {
    dispatch(toggleSearchView());
  };
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const searchMovieTmdb = async (query: string) => {
    try {
      const { data } = await axiosInstance2.get(
        `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
      );
      return data.results;
    } catch {
      return [];
    }
  };

  const fetchSuggestions = debounce(async (query: string) => {
    if (query.trim() === "") return;
    setLoading(true);
    const movies = await searchMovieTmdb(query);
    dispatch(addSearchBarResults({ tmdbResultsMoviesArr: movies }));
    setLoading(false);
  }, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    fetchSuggestions(e.target.value);
  };

  return (
    <>
      <div className="absolute -z-10">
        <Image
          src={homeBg}
          alt="homebg"
          className="fixed top-0 left-0 object-cover h-screen md:object-none xl:h-auto -z-10"
        />
      </div>
      <div className="pt-[50%] md:pt-[10%] flex justify-center z-50">
        <form
          className="grid items-center w-full grid-cols-12 gap-3 m-2 bg-black rounded-md md:m-6 md:w-1/2 md:rounded-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative col-span-9">
            <input
              ref={searchText}
              type="text"
              className="p-2 my-4 ml-3 text-black rounded-sm md:rounded-lg md:p-4 w-full"
              placeholder="Your favourite movie, actor, or type of movie"
              onChange={handleSearchChange}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
              onClick={handleSearchToogle}
            >
              X
            </button>
          </div>
          <button
            className="col-span-3 p-2 mr-3 text-white bg-red-700 rounded-sm md:rounded-lg md:px-4 md:py-4"
            type="button"
          >
            Search
          </button>
        </form>
        {loading && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
