import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hovering, setHovering] = useState(false);

  const logOutHandlerButton = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHover = () => {
    setHovering(true);
  };

  const mouseLeaveHandler = () => {
    setHovering(false);
  };

  return (
    <div>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" aria-label="ToyStars" title="ToyStars" className="flex">
            <img
              className="w-12"
              src="https://i.ibb.co/DDwNJ2M/logo.jpg"
              alt=""
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              Toy<span className="text-blue-600">Stars</span>
            </span>
          </Link>

          <ul className="items-center hidden space-x-8 lg:flex font-semibold text-lg">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/allToys"
                aria-label="AllToys"
                title="AllToys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                All Toys
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blogs"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blogs
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  to="/myToys"
                  aria-label="MyToys"
                  title="MyToys"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  My Toys
                </NavLink>
              </li>
            )}

            {user && (
              <li>
                <NavLink
                  to="/addToy"
                  aria-label="AddToy"
                  title="AddToy"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Add Toy
                </NavLink>
              </li>
            )}
          </ul>

          {user ? (
            <div className="flex">
              <div className="lg:w-32 h-11 cursor-pointer">
                {!hovering && user.photoURL && (
                  <img
                    src={user?.photoURL}
                    className="w-11 h-11 rounded-full border-none mr-3 transition-opacity duration-300 ease-in-out"
                    onMouseEnter={handleHover}
                    alt=""
                  />
                )}
                {hovering && (
                  <p
                    onMouseLeave={mouseLeaveHandler}
                    className="font-semibold capitalize text-lg transition-opacity duration-300 ease-in-out mt-3"
                  >
                    {user.displayName}
                  </p>
                )}
              </div>
              {/* <span>{user.displayName}</span> */}
              <button
                onClick={logOutHandlerButton}
                className="px-3 py-2 bg-blue-600 font-bold text-white rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="px-3 py-2 bg-blue-600 font-bold text-white rounded">
                Log In
              </button>
            </Link>
          )}

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="ToyStars"
                        title="ToyStars"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          ToyStars
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/allToys"
                          aria-label="AllToys"
                          title="AllToys"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          All Toys
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blogs"
                          aria-label="Blogs"
                          title="Blogs"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blogs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/myToys"
                          aria-label="MyToys"
                          title="MyToys"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          My Toys
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addToy"
                          aria-label="AddToy"
                          title="AddToy"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Add Toy
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
