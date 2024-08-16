import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios"; // Make sure to import axios
import moment from "moment-timezone";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const BookingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://img.freepik.com/free-photo/close-up-doctor-table-with-medical-items-cup-coffee_23-2148214016.jpg");
  background-size: cover;
  background-position: center;
  padding: 20px;
`;

const CardStyled = styled(Card)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
`;

const CalendarAndTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CalendarWrapper = styled.div`
  flex: 1;
`;

const TimeSlotsWrapper = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const TimeSlots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TimeSlotButton = styled.button`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${(props) => (props.selected ? "#007bff" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#333")};
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

const SelectedTimeContainer = styled.div`
  background-color: #007bff;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const CancelButton = styled.button`
  padding: 8px 15px;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TermsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-left: 5px;
  }
`;

const PaymentContainer = styled.div`
  background-color: #007bff;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const DoctorAppointmentForm = () => {
  const generateTimeSlots = (date) => {
    const slots = [];
    const start = moment(date).startOf("day").add(9, "hours");
    const end = moment(date).startOf("day").add(17, "hours");

    while (start < end) {
      slots.push(start.format("HH:mm"));
      start.add(30, "minutes");
    }

    return slots;
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    phoneNumber: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    visitedBefore: "",
    appointmentFor: "",
    procedure: "",
    appointmentDate: "",
    appointmentTime: "",
    timeZone: "",
  });

  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const timeSlots = generateTimeSlots(startDate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleTimeZoneChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      timeZone: value,
    });
  };

  const timeZones = moment.tz.names();

  const handlePayment = () => {
    const options = {
      key: "rzp_test_6h9MDrP5FpYbeO", // Replace with your Razorpay key
      amount: 50000, // Amount in paise (50000 paise = 500 INR)
      currency: "INR",
      name: "Doctor Appointment",
      description: "Payment for Doctor Appointment",
      handler: function (response) {
        alert("Payment Successful");
        // Handle payment response here
      },
      prefill: {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        contact: formData.phoneNumber,
      },
      theme: {
        color: "#007bff",
      },
    };

    if (window.Razorpay) {
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      console.error("Razorpay SDK not loaded");
    }
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const cancelSelection = () => {
    setSelectedTime(null);
  };

  const handleAgreement = () => {
    setAgreed(!agreed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appointmentData = {
      name: formData.firstName + " " + formData.lastName,
      email: formData.email,
      phone: formData.phoneNumber,
      date: startDate.toISOString().split("T")[0],
      time: selectedTime,
      agreed: agreed,
    };

    console.log("Appointment Data: ", appointmentData);

    axios
      .post("http://localhost:8080/api/appointments", appointmentData)
      .then((response) => {
        console.log(response.data);
        alert("Appointment booked successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to book appointment");
      });
  };

  return (
    <BookingContainer>
      <CardStyled>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Doctor Appointment Form
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Fill the form below and we will get back soon to you for more
            updates and plan your appointment.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="firstName"
                  label="First Name"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Day</InputLabel>
                  <Select
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                  >
                    {[...Array(31).keys()].map((day) => (
                      <MenuItem key={day + 1} value={day + 1}>
                        {day + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Month</InputLabel>
                  <Select
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                  >
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month, index) => (
                      <MenuItem key={index} value={month}>
                        {month}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Year</InputLabel>
                  <Select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                  >
                    {Array.from(
                      { length: 100 },
                      (_, index) => new Date().getFullYear() - index
                    ).map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="gender"
                  label="Gender"
                  fullWidth
                  value={formData.gender}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="streetAddress"
                  label="Street Address"
                  fullWidth
                  value={formData.streetAddress}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="streetAddress2"
                  label="Street Address 2"
                  fullWidth
                  value={formData.streetAddress2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="city"
                  label="City"
                  fullWidth
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="state"
                  label="State"
                  fullWidth
                  value={formData.state}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="postalCode"
                  label="Postal Code"
                  fullWidth
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="email"
                  label="Email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Have you visited before?</InputLabel>
                  <Select
                    name="visitedBefore"
                    value={formData.visitedBefore}
                    onChange={handleChange}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="appointmentFor"
                  label="Appointment For"
                  fullWidth
                  value={formData.appointmentFor}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="procedure"
                  label="Procedure"
                  fullWidth
                  value={formData.procedure}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <CalendarAndTimeWrapper>
                  <CalendarWrapper>
                    <DatePicker
                      selected={startDate}
                      onChange={handleDateChange}
                      dateFormat="yyyy-MM-dd"
                    />
                  </CalendarWrapper>
                  <TimeSlotsWrapper>
                    <TimeSlots>
                      {timeSlots.map((time) => (
                        <TimeSlotButton
                          key={time}
                          selected={selectedTime === time}
                          onClick={() => handleTimeSelect(time)}
                        >
                          {time}
                        </TimeSlotButton>
                      ))}
                    </TimeSlots>
                  </TimeSlotsWrapper>
                </CalendarAndTimeWrapper>
                {selectedTime && (
                  <SelectedTimeContainer>
                    <Typography variant="h6">
                      Selected Time: {selectedTime}
                    </Typography>
                    <CancelButton onClick={cancelSelection}>
                      Cancel Selection
                    </CancelButton>
                  </SelectedTimeContainer>
                )}
                <FormControl fullWidth>
                  <InputLabel>Time Zone</InputLabel>
                  <Select
                    name="timeZone"
                    value={formData.timeZone}
                    onChange={handleTimeZoneChange}
                  >
                    {timeZones.map((zone) => (
                      <MenuItem key={zone} value={zone}>
                        {zone}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              type="button"
              fullWidth
              onClick={handlePayment}
              sx={{ mt: 3, mb: 2 }}
            >
              Pay Now
            </Button>
            <TermsContainer>
              <input
                type="checkbox"
                checked={agreed}
                onChange={handleAgreement}
                required
              />
              <label>I agree to the Terms and Conditions</label>
            </TermsContainer>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={!agreed}
            >
              Book Appointment
            </Button>
          </form>
        </CardContent>
      </CardStyled>
    </BookingContainer>
  );
};

export default DoctorAppointmentForm;
