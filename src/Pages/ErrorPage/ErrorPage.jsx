import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div class="relative h-screen overflow-hidden bg-indigo-900">
      <img
        src="https://helpdeskgeek.com/wp-content/pictures/2022/09/error.jpeg"
        class="absolute object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-25"></div>
      <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div class="relative z-10 flex flex-col items-center w-full font-mono">
          <h1 class=" text-5xl font-extrabold leading-tight text-center text-white -mt-20">
            Nothing Found!!!
          </h1>

          <p class="font-extrabold text-white text-8xl mt-44 animate-bounce ">
            404
          </p>
          <Link
            to="/"
            className="px-8 py-3 mt-10 font-semibold rounded bg-gray-500 text-slate-200"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
