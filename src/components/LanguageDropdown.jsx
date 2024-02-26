import React from 'react';
import USA from '../assets/Flag_of_the_United_States.svg'
import US from '../assets/usa.png'
import idea from '../assets/idea.svg'

function LanguageDropdown() {
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    // Implement logic to change language based on selectedLanguage
    console.log('Selected language:', selectedLanguage);
  };

  return (
    <div className="relative">
      <select
        onChange={handleLanguageChange}
        className="block appearance-none bg-white hover:border-gray-500 px-8 py-2 pr-12 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="en">
          <img src={idea} alt="US Flag" className="w-4 h-4 mr-2" />
          English
        </option>
        <option value="fr">
          <img src={USA} alt="French Flag" className="w-4 h-4 mr-2" />
          French
        </option>
        <option value="de">
          <img src="/flag-de.svg" alt="German Flag" className="w-4 h-4 mr-2" />
          German
        </option>
        {/* Add more language options as needed */}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M9.293 11.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 13.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
          />
        </svg>
      </div>
    </div>
  );
}

export default LanguageDropdown;
