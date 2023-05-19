import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabCategory = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch car data from the server
    fetch("https://11th-assignment-server-nahidestes.vercel.app/toys")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error(error));
  }, []);

  const filteredCars = cars.filter((car) => {
    if (selectedTab === 0) {
      return car.subCategory === "policeCar";
    } else if (selectedTab === 1) {
      return car.subCategory === "truck";
    } else if (selectedTab === 2) {
      return car.subCategory === "sportsCar";
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
          <div className="grid grid-cols-2 lg:ml-10 lg:p-5">
            {filteredCars.map((car) => {
              if (car.subCategory === "policeCar") {
                return (
                  <div
                    key={car._id}
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                  >
                    <div className="lg:p-3 shadow-md rounded lg:w-96 h:96">
                      <img src={car.pictureUrl} className=" rounded" alt="" />
                      <h1>{car.name}</h1>
                      <p>Price: {car.price}</p>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </TabPanel>

        <TabPanel>
          {filteredCars.map((car) => {
            if (car.subCategory === "truck") {
              return (
                <div key={car._id}>
                  <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                      className="w-full h-48 object-cover"
                      src={car.pictureUrl}
                      alt=""
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-medium text-gray-800">
                        {car.name}
                      </h3>
                      <p className="text-gray-600 mt-2">${car.price}</p>
                      <p className="text-gray-600 mt-2">Rating: {car.rating}</p>
                      <div className="flex items-center mt-2"></div>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </TabPanel>

        <TabPanel>
          {filteredCars.map((car) => {
            if (car.subCategory === "sportsCar") {
              return (
                <div key={car._id}>
                  <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <img
                      className="w-full h-48 object-cover"
                      src={car.pictureUrl}
                      alt=""
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-medium text-gray-800">
                        {car.name}
                      </h3>
                      <p className="text-gray-600 mt-2">${car.price}</p>
                      <p className="text-gray-600 mt-2">Rating: {car.rating}</p>
                      <div className="flex items-center mt-2"></div>
                      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
