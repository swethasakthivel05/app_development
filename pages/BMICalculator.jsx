import React, { useState } from "react";
import bmiVideo from "../videos/bmi.mp4"; // Make sure the path is correct

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
      const { message, color } = getBMIMessage(bmiValue);
      setMessage(message);
      setMessageColor(color);
    }
  };

  const getBMIMessage = (bmiValue) => {
    if (bmiValue < 18.5) {
      return { message: "Underweight", color: "#fdd835" }; // Yellow
    } else if (bmiValue < 24.9) {
      return { message: "Normal weight", color: "#4caf50" }; // Green
    } else if (bmiValue < 29.9) {
      return { message: "Overweight", color: "#fb8c00" }; // Orange
    } else {
      return { message: "Obese", color: "red" }; // Red
    }
  };
  // #e53935
  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <video autoPlay loop muted style={styles.video}>
          <source src={bmiVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={styles.card}>
        <h2 style={styles.header}>BMI Calculator</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="weight" style={styles.label}>
            Weight (kg):{" "}
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="height" style={styles.label}>
            Height (cm):{" "}
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            style={styles.input}
          />
        </div>
        <button onClick={calculateBMI} style={styles.button}>
          Calculate
        </button>
        {bmi && (
          <div style={{ ...styles.resultCard, backgroundColor: messageColor }}>
            <h3 style={styles.resultHeader}>Your BMI: {bmi}</h3>
            <p style={styles.resultMessage}>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  card: {
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
    zIndex: 1,
  },
  header: {
    marginBottom: "15px",
    color: "#00796b",
  },
  inputGroup: {
    margin: "10px 0",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#00796b",
  },
  input: {
    width: "calc(100% - 20px)",
    padding: "10px",
    marginTop: "5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#00796b",
    color: "white",
    cursor: "pointer",
    marginTop: "15px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#004d40",
  },
  resultCard: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    color: "white",
  },
  resultHeader: {
    marginBottom: "10px",
  },
  resultMessage: {
    fontWeight: "bold",
  },
};

export default BMICalculator;
