import React from "react";
import Drug from "../components/Drug";
import Druger from "../components/Druger";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import Navbar from "../components/NavBar";

function DrugRecovery() {
  return (
    <div>
      <Navbar />
      <Druger />
      <Drug />
      <FooterNavBar />
      <Footer />
    </div>
  );
}

export default DrugRecovery;
