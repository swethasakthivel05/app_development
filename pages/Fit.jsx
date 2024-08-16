


import React from "react";
import Fitness from "../components/Fitness";
import FitnessChat from "../components/FitnessChat";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

function Fit() {
  return (
    <div>
      <Navbar />
     <Fitness/>
     <FitnessChat/>
      <Footer />
    </div>
  );
}

export default Fit;
