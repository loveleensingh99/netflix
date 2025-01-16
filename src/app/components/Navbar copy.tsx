"use client";
import Link from "next/link";
import React from "react";
import { netflix, user } from "../assets";
import Image from "next/image";
import { toggleSearchView } from "../redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const showSearch = useSelector(
    (store: RootState) => store.search.showSearch
  );
  const handleLogin = () => {};

  const handleSearchToogle = () => {
    dispatch(toggleSearchView());
  };
  return (
    <div className="absolute flex flex-col justify-between w-full px-2 py-3 md:px-8 bg-gradient-to-b from-black md:flex-row ">
      <Link href="/" className="z-20">
        {" "}
        <Image
          src={netflix}
          alt="netflix"
          className="w-8 py-2 mx-auto md:w-10 md:mx-0"
        />
      </Link>

      <div className="z-10 flex flex-col items-center mx-auto  md:flex-row md:gap-3 md:mx-0">
       {!showSearch&& <button
          className="flex items-center justify-center w-full gap-3 p-2 px-2 mx-2 my-2 text-white bg-gray-800 rounded-md md:my-4 bg-opacity-80 "
          onClick={handleSearchToogle}
        >
           Search{" "}
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>}
        <div className="flex items-center w-full">
          
          <button
            className="p-2 mx-4 my-2 text-white bg-red-600 rounded-md "
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
