import { Box } from "@mui/material";
import React, { useState } from "react";
import BookAppointmentCard from "../components/BookAppointmentCard";
import DoctorList from "../components/Doctor";
import Navbar from "../components/DoctorNavBar";
import Filters from "../components/Filter";
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Coimbatore");
  const [gender, setGender] = useState("");
  const [patientStories, setPatientStories] = useState("");
  const [experience, setExperience] = useState("");
  const [allFilters, setAllFilters] = useState("");
  const [sortBy, setSortBy] = useState("");
  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={location}
        setLocation={setLocation}
      />
      <Box
        sx={{
          padding: 2,
          borderRadius: 1,
          margin: 2,
        }}
      >
        <Filters
          gender={gender}
          setGender={setGender}
          patientStories={patientStories}
          setPatientStories={setPatientStories}
          experience={experience}
          setExperience={setExperience}
          allFilters={allFilters}
          setAllFilters={setAllFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </Box>
      <BookAppointmentCard />
      <h2>Top Doctors</h2>
      <DoctorList />
    </div>
  );
};
export default App;
