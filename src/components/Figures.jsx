import React from 'react';

const Figures = ({ figure, description, icon }) => {
  return (
    <div className="p-6 flex items-center">
      <div className="mr-4">
        <img src={icon} alt="Icon" className='figures-icon' />
      </div>
      <div>
        <h2 className="figures-title">{figure}</h2>
        <p className="figures-description">{description}</p>
      </div>
    </div>
  );
};

export default Figures;
