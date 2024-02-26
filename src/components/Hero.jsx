import React from 'react';
import Illustration from '../assets/Illustration.svg';
import Group from '../assets/Group-3.svg';
import ParentDropdown from './ParentDropdown';

const Hero = () => {
  return (
    <main className="bg-white">
      <header className="z-30 flex items-center justify-end w-full h-24">
        <div className="container flex items-center justify-end px-6 mx-auto">
          <div className="flex items-center">
            <ParentDropdown />
          </div>
        </div>
      </header>

      <div className="relative z-20 flex items-center bg-white">
        <div className="container relative flex flex-col items-center justify-between px-6 mx-auto">
          <div className="flex flex-col">
            <h2 className="w-full max-w-2xl py-4 mx-auto text-3xl font-light text-center" style={{ fontFamily: "Montserrat", fontWeight: '400', fontSize: "36px", color: "#101727", lineHeight: "44px" }}>
              Designed for International users
            </h2>
            <h1 className="w-full text-4xl font-light text-center sm:text-5xl" style={{ fontFamily: "Montserrat", fontWeight: '400', fontSize: "4em", color: "#101727", lineHeight: "78px" }}>
              Get your name <br/> <span style={{ fontFamily: "Montserrat", fontWeight: '700', fontSize: "64px", color: "#00B87C", lineHeight: "78px" }}>changed fast⚡️</span>
            </h1>
            <div className="flex items-center justify-between" style={{width: "566px", height: "44px", paddingTop: '27px' }}>
                <div className="flex-grow border-b border-gray-400"></div>
                <div className="mx-4 text-gray-900 font-bold text-lg" style={{ fontFamily: 'Montserrat', fontWeight: '400', fontSize: '36px', lineHeight: '44px' }}>Only $65</div>
                <div className="flex-grow border-b border-gray-400"></div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="container mx-auto py-8" style={{ width: '1760px'}}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <img src={Illustration} alt="Left Image" className="w-full" style={{ width: '407.63px', height: '366.23px' }}/>
                    </div>
                <div className='items-center justify-center mt-6'>
                    <div className="flex items-center justify-center mt-4 pb-8">
                        <a href="#" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white uppercase font-inter text-base font-semibold leading-5">
                            Start your name change!
                        </a>
                    </div>
                    <div>
                        <h1 className="w-full text-4xl font-light text-center sm:text-5xl mt-4" style={{fontSize: '28px', fontFamily: "Montserrat", lineHeight: '39px', fontWeight: '400'}}>
                            We have notaries that can legally notarize your document from <br/> <span style={{color: '#0DA3FF', fontWeight: '700'}}>anywhere in the world!</span>
                        </h1>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src={Group} alt="Right Image" className="w-full" style={{ width: '346.86px', height: '372px' }} />
                </div>
            </div>
        </div>
        </div>

        </div>
      </div>
    </main>
  );
}

export default Hero;
