import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

  // Function to handle language change
  const handleChangeLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more options for other languages as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;
