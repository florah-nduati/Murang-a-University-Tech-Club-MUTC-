import React from "react";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import Testimonies from "../../components/testimonies/testimonies";

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
