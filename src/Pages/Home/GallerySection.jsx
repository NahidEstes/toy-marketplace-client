import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const GallerySection = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    fetch(`https://11th-assignment-server-eight.vercel.app/galleryImages`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGalleryImages(data);
      });
  }, []);
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      data-aos="zoom-in"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Core Team
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Welcome</span>
          </span>{" "}
          our talented team of professionals
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sleek sports cars to rugged off-road vehicles, there's a toy car for
          every adventure. Let the races begin with these incredible toy cars.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <div
            key={image._id}
            className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={image.imgUrl}
              alt="Cars"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-gray-100">
                {image.car_name}
              </p>
              {/* <p className="mb-4 text-xs text-gray-100">{image.info}</p> */}
              <p className="mb-4 text-xs tracking-wide text-gray-400">
                {image.mini_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
