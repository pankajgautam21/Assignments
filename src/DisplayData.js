import React from 'react';
import './DisplayData.css'
const DisplayData = ({ data }) => {
  if (!data) {
    return <div>No data submitted.</div>;
  }

  return (
    <div className='container'>
      <h1>Submitted Data</h1>
      <div className='data-wrapper'>
      <p><strong>First Name:</strong> {data.firstName}</p>
      <p><strong>Last Name:</strong> {data.lastName}</p>
      <p><strong>Username:</strong> {data.username}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone No:</strong> {data.phoneNo}</p>
      <p><strong>Country:</strong> {data.country}</p>
      <p><strong>City:</strong> {data.city}</p>
      <p><strong>PAN No:</strong> {data.panNo}</p>
      <p><strong>Aadhar No:</strong> {data.aadharNo}</p>
    </div>
    </div>
  );
};

export default DisplayData;
