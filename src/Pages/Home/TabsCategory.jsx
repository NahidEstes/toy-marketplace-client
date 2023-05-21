import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TabCategory = () => {
  const { user } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState(0);
  const [cars, setCars] = useState([]);

  const buttonHandler = () => {
    console.log("asdfadsf");
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to log in first to view details",
      });
    }
  };

  useEffect(() => {
    // Fetch car data from the server
    fetch("https://11th-assignment-server-eight.vercel.app/toys")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredCars = cars.filter((car) => {
    if (selectedTab === 0) {
      return car.subCategory === "Police Car";
    } else if (selectedTab === 1) {
      return car.subCategory === "Truck";
    } else if (selectedTab === 2) {
      return car.subCategory === "Sports Car";
    }
    return false;
  });

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="my-14 custom-container">
      <h1 className="text-center font-semibold text-3xl my-10">
        Shop By Category
      </h1>
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList>
          <Tab>Police Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Sports Car</Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-6 lg:p-5">
            {filteredCars.map((car) => {
              if (car.subCategory === "Police Car") {
                return (
                  <div
                    key={car._id}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="lg:p-3 p-3 shadow-md rounded lg:w-96 h:96 mr-3">
                      <img
                        src={car.pictureUrl}
                        className=" rounded custom-tab-image"
                        alt=""
                      />
                      <h1 className="mt-4 text-xl">{car.name}</h1>
                      <p className="my-2">Price: {car.price}</p>

                      <div className="flex gap-3 items-center my-2">
                        <Rating
                          style={{ maxWidth: 150 }}
                          value={car.rating}
                          readOnly
                        />
                        <p className="font-bold">{car.rating}</p>
                      </div>
                      <Link to={`/toyDetails/${car._id}`}>
                        <button
                          onClick={buttonHandler}
                          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-6 lg:p-5">
            {filteredCars.map((car) => {
              if (car.subCategory === "Truck") {
                return (
                  <div
                    key={car._id}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="lg:p-3 p-3 shadow-md rounded lg:w-96 h:96 mr-3">
                      <img
                        src={car.pictureUrl}
                        className=" rounded custom-tab-image"
                        alt=""
                      />
                      <h1 className="mt-4 text-xl">{car.name}</h1>
                      <p className="my-2">Price: {car.price}</p>
                      <div className="flex gap-3 items-center my-2">
                        <Rating
                          style={{ maxWidth: 150 }}
                          value={car.rating}
                          readOnly
                        />
                        <p className="font-bold">{car.rating}</p>
                      </div>
                      <Link to={`/toyDetails/${car._id}`}>
                        <button
                          onClick={buttonHandler}
                          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-6 lg:p-5">
            {filteredCars.map((car) => {
              if (car.subCategory === "Sports Car") {
                return (
                  <div
                    key={car._id}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="lg:p-3 p-3 shadow-md rounded lg:w-96 h:96 mr-3">
                      <img
                        src={car.pictureUrl}
                        className=" rounded custom-tab-image"
                        alt=""
                      />
                      <h1 className="mt-4 text-xl">{car.name}</h1>
                      <p className="my-2">Price: {car.price}</p>
                      <div className="flex gap-3 items-center my-2">
                        <Rating
                          style={{ maxWidth: 150 }}
                          value={car.rating}
                          readOnly
                        />
                        <p className="font-bold">{car.rating}</p>
                      </div>
                      <Link to={`/toyDetails/${car._id}`}>
                        <button
                          onClick={buttonHandler}
                          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
