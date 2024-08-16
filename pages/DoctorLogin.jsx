import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import backgroundVideo from "../videos/background.mp4";

function DoctorSignup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [gender, setGender] = useState("");
  const [clinic, setClinic] = useState("");
  const [profile, setProfile] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!firstname || !email || !password || !profile) {
      setError("Please fill in all required fields and upload a profile picture.");
      return;
    }

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("country", country);
    formData.append("state", state);
    formData.append("city", city);
    formData.append("phone", phone);
    formData.append("specialist", specialist);
    formData.append("qualification", qualification);
    formData.append("experience", experience);
    formData.append("gender", gender);
    formData.append("clinic", clinic);
    formData.append("profilePicture", profile);

    try {
      const response = await axios.post("http://localhost:8080/api/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Signup successful:", response.data);
      // Redirect to the login page or show a success message
    } catch (error) {
      console.error("Error during signup:", error);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        position: "relative",
      }}
    >
      <Paper
        elevation={10}
        style={{
          padding: "40px 30px",
          width: "100%",
          maxWidth: "600px",
          zIndex: 1,
        }}
      >
        <center style={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Doctor SignUp 🩺
          </Typography>
          <form onSubmit={handleSignup} encType="multipart/form-data">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstname"
                  label="Firstname"
                  variant="standard"
                  placeholder="Enter firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastname"
                  label="Lastname"
                  variant="standard"
                  placeholder="Enter lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="standard"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="standard"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="country"
                  label="Country"
                  variant="standard"
                  placeholder="Enter country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="state"
                  label="State"
                  variant="standard"
                  placeholder="Enter state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="city"
                  label="City"
                  variant="standard"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  type="tel"
                  variant="standard"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <span>+{country}</span>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="specialist"
                  label="Specialist"
                  variant="standard"
                  placeholder="Enter your specialist"
                  value={specialist}
                  onChange={(e) => setSpecialist(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="qualification"
                  label="Qualification"
                  variant="standard"
                  placeholder="Enter your qualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="experience"
                  label="Experience"
                  variant="standard"
                  placeholder="Enter years of experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="clinic"
                  label="Clinic/Health Center"
                  variant="standard"
                  placeholder="Enter your clinic or health center"
                  value={clinic}
                  onChange={(e) => setClinic(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <Typography variant="subtitle1">Gender</Typography>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <input
                    accept="image/*"
                    type="file"
                    onChange={(e) => setProfile(e.target.files[0])}
                    style={{ display: "none" }}
                    id="profile-upload"
                  />
                  <label htmlFor="profile-upload">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload Profile Picture
                    </Button>
                  </label>
                </FormControl>
              </Grid>
              {error && (
                <Grid item xs={12}>
                  <Typography color="error" variant="body2">
                    {error}
                  </Typography>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ marginTop: "16px" }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  style={{ marginTop: "16px", textAlign: "center" }}
                >
                  Already have an account? <Link to="/">Login here</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  style={{ marginTop: "8px", textAlign: "center" }}
                >
                  <Link to="/signup">User Sign Up</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </center>
      </Paper>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default DoctorSignup;
