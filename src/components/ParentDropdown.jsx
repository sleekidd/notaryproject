import React, { useState } from 'react';
import Dropdown from './Dropdown';
import usaFlag from '../assets/US-flag.svg';
import franceFlag from '../assets/US-flag.svg';
import spainFlag from '../assets/US-flag.svg';

const ParentDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleDropdownChange = (language) => {
    setSelectedLanguage(language);
  };

  const dropdownItems = [
    { language: 'English', flag: usaFlag },
    { language: 'French', flag: franceFlag },
    { language: 'Spanish', flag: spainFlag }
  ];

  return (
    <div>
      <Dropdown
        items={dropdownItems}
        onChange={handleDropdownChange}
        color="blue"
        width="200px"
        style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '700', lineHeight: '36px' }}
      />
      <p style={{ fontFamily: 'Inter', fontSize: '16px', fontWeight: '700', lineHeight: '36px' }}>Selected Language: {selectedLanguage}</p>
    </div>
  );
};

export default ParentDropdown;
