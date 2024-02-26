import React from 'react';

const Figures = ({ figure, description, icon }) => {
  return (
    <div className="p-6 flex items-center">
      <div className="mr-4">
        <img src={icon} alt="Icon" style={{ width: '64px', height: '64px' }} />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800" style={{ fontFamily: "Inter", fontWeight: '700', fontSize: '36px', lineHeight: "44px", color: '#00B87C' }}>{figure}</h2>
        <p className="text-gray-600" style={{ fontFamily: "Inter", fontWeight: '500', fontSize: '16px', lineHeight: "24px", color: '#01213E' }}>{description}</p>
      </div>
    </div>
  );
};

export default Figures;
