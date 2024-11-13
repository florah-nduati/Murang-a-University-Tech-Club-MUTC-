import React from "react";
import Hero from "./hero/hero";
import About from "./about/about";
import Testimonies from "./testimonies/testimonies";

function Home({ deviceType }) {
  return (
    <div>
      <Hero />
      <About />
      <Testimonies deviceType={deviceType} />
    </div>
  );
}
export default Home;
