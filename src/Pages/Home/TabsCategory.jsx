import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabCategory = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch car data from the server
    fetch("http://localhost:5000/toys")
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
          {filteredCars.map((car) => {
            if (car.subCategory === "policeCar") {
              return <div key={car._id}>{car.name}</div>;
            }
            return null;
          })}
        </TabPanel>

        <TabPanel>
          {filteredCars.map((car) => {
            if (car.subCategory === "truck") {
              return <div key={car._id}>{car.name}</div>;
            }
            return null;
          })}
        </TabPanel>

        <TabPanel>
          {filteredCars.map((car) => {
            if (car.subCategory === "sportsCar") {
              return <div key={car._id}>{car.name}</div>;
            }
            return null;
          })}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
