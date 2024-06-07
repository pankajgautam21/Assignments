import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import DisplayData from './DisplayData';

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm setSubmittedData={setSubmittedData} />} />
        <Route path="/display" element={<DisplayData data={submittedData} />} />
      </Routes>
    </Router>
  );
}

export default App;
