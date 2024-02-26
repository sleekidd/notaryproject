import React from "react";
import Accordion from "./Accordion";
import HorizontalLine from "./HorizontalLine";

const FAQ = () => {
  return (
    
    <div style={{ padding: '200px 0'}}>
      <div class="flex items-center justify-center" style={{ paddingBottom: '64px'}}>
          <div>
            <p class="text-center section-title">Ask away. <br />
<span>We have answers! </span></p>
          </div>
        </div>

      <div className="flex items-center justify-center">
        <div className="p-4 items-center justify-center" style={{ width: '1066px' }}> 
          <div className="p-4 items-center justify-center">
          <Accordion
          title="Will my name change instantly after using this service?"
          answer="No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.

          To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand." 
          isOpenByDefault={true}
        />
        <HorizontalLine />
        <Accordion
          title="Can I change my name and address at the same time?"
          answer="No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.

          To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand."
        />
        <HorizontalLine />
        <Accordion title="What are the legal requirements for a name change?" answer="No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.

  To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand." />
  <HorizontalLine />
  <Accordion title="Can same sex couples use this service?" answer="No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.

  To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand." />
  <HorizontalLine />
  <Accordion title="How long will you store my personal details on your system?" answer="No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll.

  To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand." />
  <HorizontalLine />
  <div className="flex items-center justify-between" style={{ paddingTop: '80px' }}>
      <p className="text-left" style={{ fontFamily: 'Montserrat', fontSize: '36px', fontWeight: '400', lineHeight: '44px' }}>Do you have more questions? A specialist is here to help</p>
      <button className="py-2 px-4 border rounded-full" style={{ padding: '16px 94px', color: '#ffffff', backgroundColor: '#00B87C', borderRadius: '70px', height: '70px', width: '372px', fontFamily: 'Inter', fontWeight: '600', lineHeight: '22px', fontSize: '18px', textTransform: 'uppercase' }}>Contact Us</button>
    </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default FAQ;
