import React from "react";
import { Cards } from "../components/Cards";

import { NavBar } from "../components/NavBar";
import { Slider } from "../components/Slider";
import { About } from "../components/About";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Slider />
      <Cards />

      <About />
      <Footer />
    </div>
  );
}
