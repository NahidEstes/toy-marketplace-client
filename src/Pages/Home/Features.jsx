import { Link } from "react-router-dom";
import { FaBicycle, FaCar, FaTools, FaTruckPickup } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-3xl font-extrabold leading-none">
            A Collection of Exciting Toy Cars for Endless Racing Fun!
          </h5>
          <p className="mb-6 text-gray-900">
            Race to victory with these dynamic toy cars. Featuring sleek
            designs, vibrant colors, and smooth wheels, they deliver thrilling
            speed and imaginative play
          </p>
          <div className="flex items-center">
            <Link to="/allToys">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-700 transition duration-200 rounded shadow-lg bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Visit All Toys
              </button>
            </Link>
            <p className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              Learn more
            </p>
          </div>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center justify-center text-2xl w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <FaCar />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Action Racing Adventures
            </h6>
            <p className="text-sm text-gray-700">
              Experience the thrill of speed with these vibrant toy cars. With
              realistic designs and smooth wheels, they're perfect for
              high-octane racing fun.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center text-2xl w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <FaTruckPickup />
            </div>
            <h6 className="mb-2 font-semibold leading-5">
              Velocity Vroom Vans
            </h6>
            <p className="text-sm text-gray-700">
              Turbocharged Excitement: Unleash the Fun with These Dynamic Toy
              Cars. Vibrant Colors, Realistic Details, and Speedy Wheels for
              Endless Adventures!
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center text-2xl w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <FaTools />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
            <p className="text-sm text-gray-700">
              Fast Lane Adventures: Fuel the Imagination with These Dynamic Toy
              Cars. Sleek Designs, Bold Colors, and Action-Packed Fun for Young
              Racers!
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 text-2xl h-16 mb-4 rounded-full bg-indigo-50">
              <FaBicycle />
            </div>
            <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
            <p className="text-sm text-gray-700">
              Race Ready: Rev Up the Fun with These High-Performance Toy Cars.
              Zooming Speed, Eye-Catching Designs, and Endless Racing Thrills
              Await!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
