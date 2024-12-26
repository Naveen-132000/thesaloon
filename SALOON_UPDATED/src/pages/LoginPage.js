import React, { useState } from 'react';
import '../css/LoginPage.css'; // Import CSS from the 'css' folder

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '', // Add phone number field for registration
  });
  const [isRegistering, setIsRegistering] = useState(false); // Track whether user is registering or logging in

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to either login or register depending on the `isRegistering` state
  };

  return (
    <div className="login-page-container">
      <div className="login-page">
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          {isRegistering && (
            <>
              <div className="input-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </>
          )}

          <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
          
          <p>
            {isRegistering ? (
              <>
                Already have an account? <a href="#" onClick={() => setIsRegistering(false)}>Login</a>
              </>
            ) : (
              <>
                Don't have an account? <a href="#" onClick={() => setIsRegistering(true)}>Register</a>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
