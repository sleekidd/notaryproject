import React from 'react';
import StepComponent from './StepComponent';
import Step1 from '../assets/step1.svg'
import Step2 from '../assets/step2.svg'
import Step3 from '../assets/step3.svg'

const HowItWorks = () => {
  return (
    <div style={{ paddingTop: '172px' }}>
        <div class="flex items-center justify-left" style={{  paddingBottom: '64px'}}>
        <div>
            <p class="text-center text-xl font-semibold" style={{ width: '800px', fontFamily: 'Montserrat', fontSize: '48px', lineHeight: '58.51px', color: '#101727', fontWeight: '400' }}>How  <span style={{ color: '#00B87C', fontWeight: '700' }}>it works</span></p>
        </div>
        </div>
        <div className="flex justify-center mt-10">
        <div className="max-w-7xl">
            <StepComponent
            iconSrc={Step1}
            stepNumber="01"
            stepTitle="Fill out our brief online questionnaire"
            stepDescription="Filling out a name change questionnaire is a straightforward process that typically involves a few simple steps. These questionnaires are designed to gather essential information needed for the legal process of changing your name."
            />
            <div className="flex justify-center items-center h-32">
            <div className="w-0.5 bg-gray-300" style={{ position: 'relative', height: '280px', color: '#101727' }}></div>
            </div>
            <StepComponent
            iconSrc={Step2}
            stepNumber="02"
            stepTitle="We create the documents for your name change"
            stepDescription="Within our efficient system, our document scriveners take on the crucial task of carefully examining your responses. Their role is to review the information you provide, meticulously checking for any potential gaps or missing details."
            />
            <div className="flex justify-center items-center h-32">
            <div className="w-0.5 bg-gray-300" style={{ position: 'relative', height: '280px', color: '#101727' }}></div>
            </div>
            <StepComponent
            iconSrc={Step3}
            stepNumber="03"
            stepTitle="Receive a summary of your name change request"
            stepDescription="Receive a comprehensive summary as the final step in processing your name change order. Providing clarity and assurance, this summary ensures that you have a clear understanding of the information submitted and the subsequent steps in the process."
            />
        </div>
        </div>
    </div>
  );
}

export default HowItWorks;
