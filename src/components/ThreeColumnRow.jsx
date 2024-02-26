import React from 'react';
import Trustpilot from '../assets/hero-section-trustpilot.svg'
import Time from '../assets/time.svg'
import Years from '../assets/years.svg'
import Figures from './Figures';

const ThreeColumnRow = () => {
  return (
    <div className="flex justify-center items-center" style={{ paddingBottom: '172px'}}>
        <div className="bg-[#F6F6F6] rounded-full p-4" style={{ width: '100%', maxWidth: '1080px', height: '120px', display: 'flex'}}>
            <div className="grid grid-cols-3 gap-4 items-center justify-center mx-auto" style={{width: '900px' }}>
                <div className="h-20 rounded-lg flex items-center justify-center">
                    <img src={Trustpilot} alt="Trustpilot" />
                </div>
                <div className="h-20 rounded-lg flex items-center justify-center">
                    <Figures
                    figure="99%"
                    description="on time delivery"
                    icon={Time}
                    />
                </div>
                <div className="h-20 rounded-lg flex items-center justify-center">
                    <Figures
                    figure="5+"
                    description="years of experience"
                    icon={Years}
                    />
                </div>
            </div>
        </div>
    </div>


  );
}

export default ThreeColumnRow;
