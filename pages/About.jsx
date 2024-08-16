import React from "react";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import FooterNavBar from "../components/FooterNavBar";
import NavBar from "../components/NavBar";
const About = () => {
  const divStyle = {
    zIndex: 1,
    backgroundcolor: "blue",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <div>
      <div style={divStyle}>
        <NavBar />
        <AboutContent />
        <FooterNavBar />
        <Footer />
      </div>
    </div>
  );
};
export default About;