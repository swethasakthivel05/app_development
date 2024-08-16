import React, { useState } from "react";
import DietForm from "../components/DietForm";
import DietGenerator from "../components/DietGenerator";
import DietPlans from "../components/DietPlans";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
function Diet() {
  const [formData, setFormData] = useState(null);

  const handleGeneratePlan = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <Navbar />
      <DietPlans />
      <DietForm onGeneratePlan={handleGeneratePlan} />
      {formData && <DietGenerator formData={formData} />}
      <Footer />
    </div>
  );
}

export default Diet;
