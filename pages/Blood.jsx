import React, { useState } from 'react';
import axios from 'axios';
import './Blood.css';
import Navbar from '../components/NavBar';
import FooterNavBar from '../components/FooterNavBar';
import Footer from '../components/Footer';

function Blood() {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    phoneNumber: '',
    email: '',
    address: {
      streetAddress: '',
      streetAddressLine2: '',
      city: '',
      state: '',
      postalCode: '',
    },
    weight: '',
    pulse: '',
    hb: '',
    bp: '',
    temperature: '',
    lastDonationDate: '',
    hasDonatedPreviously: '',
    complications: '',
    diseases: '',
    medications: '',
    surgeryOrTransfusionHistory: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/post', formData);
      console.log(response.data);

      setSuccess('Form submitted successfully! Thank you for your donation.');
      setError('');

      setFormData({
        bloodGroup: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        phoneNumber: '',
        email: '',
        address: {
          streetAddress: '',
          streetAddressLine2: '',
          city: '',
          state: '',
          postalCode: '',
        },
        weight: '',
        pulse: '',
        hb: '',
        bp: '',
        temperature: '',
        lastDonationDate: '',
        hasDonatedPreviously: '',
        complications: '',
        diseases: '',
        medications: '',
        surgeryOrTransfusionHistory: '',
      });
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      setError('Failed to submit the form. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="blood-page">
      <nav className="navbar">
        <Navbar/>
      </nav>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="blood-donation-form">
          <h1>Blood Donation Form</h1>
          <p>Confidential - Please answer the following questions correctly. This will help to protect you and the patient who receives your blood.</p>
          
          <label>Your Blood Group*</label>
          <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
            <option value="">Select your blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>

          <label>Full Name*</label>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />

          <label>Date of Birth*</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />

          <label>Gender*</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label>Phone Number*</label>
          <input type="tel" name="phoneNumber" placeholder="+91 " value={formData.phoneNumber} onChange={handleChange} required />

          <label>Email*</label>
          <input type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required />

          <label>Address*</label>
          <input type="text" name="address.streetAddress" placeholder="Street Address" value={formData.address.streetAddress} onChange={handleChange} required />
          <input type="text" name="address.streetAddressLine2" placeholder="Street Address Line 2" value={formData.address.streetAddressLine2} onChange={handleChange} />
          <input type="text" name="address.city" placeholder="City" value={formData.address.city} onChange={handleChange} required />
          <input type="text" name="address.state" placeholder="State / Province" value={formData.address.state} onChange={handleChange} required />
          <input type="text" name="address.postalCode" placeholder="Postal / Zip Code" value={formData.address.postalCode} onChange={handleChange} required />

          <label>Weight*</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />

          <label>Pulse*</label>
          <input type="number" name="pulse" value={formData.pulse} onChange={handleChange} required />

          <label>Hb (Hemoglobin)*</label>
          <input type="number" name="hb" value={formData.hb} onChange={handleChange} required />

          <label>BP (Blood Pressure)*</label>
          <input type="text" name="bp" value={formData.bp} onChange={handleChange} required />

          <label>Temperature*</label>
          <input type="text" name="temperature" value={formData.temperature} onChange={handleChange} required />

          <label>Last Donated Date*</label>
          <input type="date" name="lastDonationDate" value={formData.lastDonationDate} onChange={handleChange} required />

          <label>Have you donated previously?*</label>
          <input type="text" name="hasDonatedPreviously" value={formData.hasDonatedPreviously} onChange={handleChange} required />

          <label>If yes, any complications?</label>
          <input type="text" name="complications" placeholder="Complications" value={formData.complications} onChange={handleChange} />

          <label>Do you suffer from or have suffered from any of the following diseases?*</label>
          <input type="text" name="diseases" placeholder="Diseases" value={formData.diseases} onChange={handleChange} required />

          <label>Are you taking or have you taken any medications in the past 72 hours?*</label>
          <input type="text" name="medications" placeholder="Medications" value={formData.medications} onChange={handleChange} required />

          <label>Is there any history of surgery or blood transfusion in the past six months?*</label>
          <input type="text" name="surgeryOrTransfusionHistory" placeholder="History" value={formData.surgeryOrTransfusionHistory} onChange={handleChange} required />

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>
      <footer className="footer">
        <FooterNavBar/>
        <Footer/>
      </footer>
    </div>
  );
}

export default Blood;
