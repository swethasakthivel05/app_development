import React from "react";
import FundraisingSection from "../components/FundraisingSection";
import Navbar from "../components/NavBar";
import Sample from "../components/Sample";
import "./Donation.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sample />
        <FundraisingSection />
        <div className="spacer"></div>
        {/* <BloodDonationCard /> */}
      </div>
    </div>
  );
}
export default App;
