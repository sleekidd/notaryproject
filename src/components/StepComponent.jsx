import React from 'react';

const StepComponent = ({ iconSrc, stepNumber, stepDescription, stepTitle }) => {
  return (
    <div className="flex items-center mt-8 mb-8">
      <div className="flex flex-col items-center w-1/3">
        <img src={iconSrc} alt={`Step ${stepNumber}`} className="w-16 h-16" style={{ width: '267.96px', height: '263.99px' }} />
      </div>
      <div className="flex flex-col items-center w-1/3">
        <div className="rounded-full flex items-center justify-center" style={{ border: '1px solid #101727', width: '80px', height: '80px', color: '#00B87C', fontFamily: 'Inter', fontSize: '40px', fontWeight: '700'}}>{stepNumber}</div>
      </div>
      <div className="flex flex-col items-center w-1/3">
        <p style={{ fontFamily: 'Montserrat', fontSize: '32px', fontWeight: '400', lineHeight: '39px', color: '#101727', paddingBottom: '24px' }}>{stepTitle}</p>
        <p style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '28.8px', color: '#00000'}}>{stepDescription}</p>
      </div>
    </div>
  );
};

export default StepComponent;
