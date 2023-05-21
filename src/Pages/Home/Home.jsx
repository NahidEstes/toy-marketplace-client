import React from "react";
import Banner from "./Banner";
import TabCategory from "./TabsCategory";
import GallerySection from "./GallerySection";
import Feature from "./Features";
import Content from "./Content";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <TabCategory />
      <GallerySection />
      <Feature />
      <Content />
    </div>
  );
};

export default Home;
