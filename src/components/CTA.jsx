import React from 'react';

const CTA = () => {
  return (
    <div style={{ marginBottom: '240px' }}>
    <div className="flex items-center justify-center rounded-full" style={{ width: '1200px', padding: '64px 166.6px', margin: '0 auto 48px', border: '1px solid #000000' }}>
      <div className="flex items-center justify-between w-full">
        <p className="text-left" style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '400', lineHeight: '44px' }}>Get your name change <br /> starting at $75*</p>
        <div className="flex items-center justify-center mt-4 pb-8">
          <a href="#" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white uppercase font-inter text-base font-semibold leading-5">
            Start your name change!
          </a>
        </div>
      </div>
    </div>
    <div className='flex items-center justify-center'>
        <p style={{ fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', lineHeight: '22px', color: '#101727' }}>*Price excludes court fees to be paid when you file your name change documents</p>
    </div>
    </div>
  );
}

export default CTA;
