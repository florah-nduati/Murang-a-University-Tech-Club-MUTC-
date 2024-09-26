import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/header";
import HeroSection from "./components/hero/hero";
import AboutUs from "./components/about/about";
import Testimonies from "./components/testimonies/testimonies";

function App() {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 464) {
        setDeviceType("mobile");
      } else if (window.innerWidth < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Testimonies deviceType={deviceType} />
    </>
  );
}

export default App;
