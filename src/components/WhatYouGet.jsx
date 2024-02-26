import React from 'react';

const WhatYouGet = ({ icon, title, fontWeight }) => {
  return (
    <div className="bg-white p-6 flex items-center border-b border-gray-200">
      <div className="mr-4">
        <img src={icon} alt="Icon" className="w-8 h-8" style={{ width: '93.71px', height: '92px' }} />
      </div>
      <div>
        <h2 className={`text-xl ${fontWeight === 'regular' ? 'font-regular' : 'font-semibold'}`} style={{ fontFamily: "Montserrat", lineHeight: '34px', fontSize: '28px', color: '#101727'}}>{title}</h2>
      </div>
    </div>
  );
};

export default WhatYouGet;
