import React from 'react';
import icon from '../assets/icon.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import idea from '../assets/idea.svg'
import WhatYouGet from './WhatYouGet';
import HorizontalLine from './HorizontalLine';

const TwoColumn = () => {
  return (
    <div>
      <div class="flex items-center justify-center" style={{ paddingBottom: '64px'}}>
        <div>
          <p class="text-center section-title"><span>With us,</span> you get:</p>
        </div>
      </div>

    <div className="flex justify-center items-center">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <WhatYouGet  
            icon={icon}
            title="Completion of all required documents specific to your state."/>
            <WhatYouGet  
            icon={icon2}
            title="Easy to follow instructions on filing your documents"
            fontWeight="regular"/>
            <WhatYouGet 
            icon={icon3}
            title="Our guarantee and lifetime customer support"
            fontWeight="regular"/>
          </div>
          <div>
            <img src={idea} style={{ width: '465px', height: '482.39px' }} />
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto justify-center items-center" style={{ width: '1280px', paddingTop: '172px'}}>
      <div>
      <HorizontalLine />
      </div>
    </div>

    </div>
    

  );
};

export default TwoColumn;
