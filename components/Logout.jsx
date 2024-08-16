// Logout.js
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  }, [logout, navigate]);

  return null; // No need to render anything
};

export default Logout;
