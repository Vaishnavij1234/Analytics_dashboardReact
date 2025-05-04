import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendOtp = () => {
    if (!validateEmail(email)) {
      alert("Invalid Email");
      return;
    }
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setServerOtp(generatedOtp);
    alert("OTP Sent: " + generatedOtp);
    setOtpSent(true);
  };

  const resendOtp = () => {
    sendOtp();
    setOtp(""); // Clear old OTP input
  };

  const verifyOtp = () => {
    if (otp === serverOtp) {
      navigate("/dashboard");
    } else {
      alert("Invalid or Expired OTP.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="left-panel">
          <h3>Sign In</h3>
          {!otpSent ? (
            <>
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={sendOtp}>Send OTP</button>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={verifyOtp}>Verify OTP</button>
              <button onClick={resendOtp} style={{ marginTop: '10px', backgroundColor: '#ff9800' }}>
                Resend OTP
              </button>
            </>
          )}
        </div>
        <div className="right-panel">
          <h4>Web Application with Analytics Dashboard</h4>
        </div>
      </div>
    </div>
  );
};

export default Login;





















