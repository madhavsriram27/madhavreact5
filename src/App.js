import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f0f0f0',
};

const calculatorStyle = {
  border: '2px solid #333',
  borderRadius: '10px',
  padding: '20px',
  textAlign: 'center',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '10px',
};

const labelStyle = {
  fontSize: '16px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 20px',
  cursor: 'pointer',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

const paragraphStyle = {
  fontSize: '18px',
  marginTop: '10px',
};

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div style={containerStyle}>
      <div style={calculatorStyle}>
        <h1 style={headingStyle}>Age Calculator</h1>
        <label style={labelStyle}>Enter your birthdate:</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          style={inputStyle}
        />
        <button onClick={calculateAge} style={buttonStyle}>
          Calculate Age
        </button>
        {age && <p style={paragraphStyle}>Your age is: {age} years</p>}
      </div>
    </div>
  );
}

export default App;
