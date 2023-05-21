const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Extreme Racer
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
                  id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Experience</span>
          </span>{" "}
          the Thrill of Sideways Speed
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Ignite the Playtime Speedway with these Cutting-Edge Toy Cars for
          Heart-Pounding Racing Excitement
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Speedster Squad: Lightning-Fast Toy Cars
              </h6>
              <p className="text-sm text-gray-900">
                Join the Speedster Squad with these lightning-fast toy cars.
                With sleek designs and blazing speed, they'll conquer any racing
                challenge with style and excitement.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                ZoomZoom Wheels: Supercharged Toy Car Fun
              </h6>
              <p className="text-sm text-gray-900">
                Get ready for high-speed fun with ZoomZoom Wheels! These
                supercharged toy cars are designed for maximum speed and endless
                racing adventures.
              </p>
              <hr className="w-full my-6 border-gray-300" />
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-2 font-semibold leading-5">
                Swift Wheels: Racing Adventures Await
              </h6>
              <p className="text-sm text-gray-900">
                Experience the thrill of racing with Swift Wheels! These dynamic
                toy cars are built for speed, agility, and epic racing
                adventures
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            src="https://i.ibb.co/D8gWrd1/best-car-toys-kids.jpg"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://i.ibb.co/4V4GkFM/depositphotos-125190864-stock-photo-close-up-of-toy-cars.webp"
            alt=""
          />
          <img
            className="object-cover w-full h-48 rounded shadow-lg"
            src="https://i.ibb.co/R2r24Qn/antique-blue-toy-car-close-up-images-cars-were-mimicked-as-parked-near-each-other-red-floor-13806724.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
