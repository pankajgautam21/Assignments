import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const RegistrationForm = ({ setSubmittedData }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });
  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setIsPasswordVisible((prevVisibility) => !prevVisibility);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsInitial(false);
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      navigate('/display');
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.firstName.trim()) errors.firstName = 'First Name is required';
    if (!data.lastName.trim()) errors.lastName = 'Last Name is required';
    if (!data.username.trim()) errors.username = 'Username is required';
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.password.trim()) errors.password = 'Password is required';
    if (!data.phoneNo.trim()) {
      errors.phoneNo = 'Phone No is required';
    } else if (!/^\d{10}$/.test(data.phoneNo)) {
      errors.phoneNo = 'Phone No is invalid';
    }
    if (!data.country.trim()) errors.country = 'Country is required';
    if (!data.city.trim()) errors.city = 'City is required';
    if (!data.panNo.trim()) errors.panNo = 'PAN No is required';
    if (!data.aadharNo.trim()) {
      errors.aadharNo = 'Aadhar No is required';
    } else if (!/^\d{12}$/.test(data.aadharNo)) {
      errors.aadharNo = 'Aadhar No is invalid';
    }
    return errors;
  };

  useEffect(() => {
    if (!isInitial) {
      const validationErrors = validateForm(formData);
      setErrors(validationErrors);
    }
  }, [formData, isInitial]);

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-wrapper">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="button" onClick={handleCheckboxChange}>
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          {errors.phoneNo && <div className="error">{errors.phoneNo}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          {errors.country && <div className="error">{errors.country}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          {errors.city && <div className="error">{errors.city}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="panNo">PAN No:</label>
          <input
            type="text"
            id="panNo"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
          {errors.panNo && <div className="error">{errors.panNo}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="aadharNo">Aadhar No:</label>
          <input
            type="text"
            id="aadharNo"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
          />
          {errors.aadharNo && <div className="error">{errors.aadharNo}</div>}
        </div>
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
