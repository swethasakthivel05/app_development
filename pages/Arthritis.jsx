import React from "react";
import BlogAndHealth from "../components/BlogAndHealth";
import Contributers from "../components/Contributers";
import Diagnosis from "../components/Diagnosis";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

function Arthritis() {
  return (
    <div>
      <Navbar />
      <BlogAndHealth />
      <Contributers />
      <Diagnosis />
      <Footer />
    </div>
  );
}

export default Arthritis;
