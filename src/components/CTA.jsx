import React from 'react';

const CTA = () => {
  return (
    <div style={{ marginBottom: '240px' }}>
    <div className="flex items-center justify-center rounded-full cta">
      <div className="flex items-center justify-between w-full">
        <p className="text-left cta-text">Get your name change <br /> starting at $75*</p>
        <div className="flex items-center justify-center mt-4 pb-8">
          <a href="#" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white uppercase font-inter text-base font-semibold leading-5">
            Start your name change!
          </a>
        </div>
      </div>
    </div>
    <div className='flex items-center justify-center'>
        <p className='cta-note'>*Price excludes court fees to be paid when you file your name change documents</p>
    </div>
    </div>
  );
}

export default CTA;
