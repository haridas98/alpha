import React, { useEffect } from "react";
import Slider from "../Slider";
import About from "../About/About";
import Advantages from "../Advantages";
import Feature from "../Feature";
import Services from "../Services";
import Owner from "../Owner";
import Quote from "../Quote/Quote";
import Working from "../Working";
import { useLocation } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Slider />
      <About />
      <Services />
      {/*<Feature />*/}
      {/*<Working />*/}
      {/*<Owner />*/}
      <Reviews />
      <Advantages />
      <Quote />
    </>
  );
};

export default Home;
