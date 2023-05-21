const Banner = () => {
  return (
    <div className="relative flex items-center  ">
      <div className="container relative flex flex-col items-center justify-between px-6 py-8 mx-auto">
        <div className="flex flex-col">
          <h1 className="w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl ">
            Kids Choices Toys All in One Place
          </h1>
          <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center  ">
            These vibrant and durable kids' car toys provide hours of
            entertainment with their smooth wheels, realistic designs, and
            imaginative play possibilities.
          </h2>
          <div className="flex items-center justify-center mt-4">
            <p className="px-4 py-2 mr-4 text-white uppercase bg-gray-800 border-2 cursor-pointer border-transparent text-md hover:bg-gray-900">
              Get started
            </p>
            <p className="px-4 py-2 text-gray-800 uppercase bg-transparent border-2 cursor-pointer border-gray-800  hover:bg-gray-800 hover:text-white text-md">
              Learn More
            </p>
          </div>
        </div>
        <div className="relative block w-full mx-auto lg:mt-4 mt-6 md:mt-4">
          <img
            src="https://i.ibb.co/1XWc9GD/photo-1532330393533-443990a51d10-ixlib-rb-4-0.jpg"
            className="max-w-xs m-auto md:max-w-2xl rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
