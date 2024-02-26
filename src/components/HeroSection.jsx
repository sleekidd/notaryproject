import React from 'react';
import Illustration from '../assets/Illustration.svg'
import Group from '../assets/Group-3.svg'

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Top Row */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Header 1</h2>
            <p className="mt-2">Description for Header 1</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Header 2</h2>
            <p className="mt-2">Description for Header 2</p>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Header 3</h2>
            <p className="mt-2">Description for Header 3</p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <img src={Illustration} alt="Left Image" className="w-full" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">Center Text</h2>
            <p className="mt-2">Description for Center Text</p>
          </div>
          <div>
            <img src={Group} alt="Right Image" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
