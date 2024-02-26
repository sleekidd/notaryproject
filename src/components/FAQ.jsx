import React from "react";
import Accordion from "./Accordion";
import HorizontalLine from "./HorizontalLine";
import "../styles/style.css";

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="section-title-container">
        <p className="section-title">
          Ask away. <br />
          <span>We have answers! </span>
        </p>
      </div>
      <div className="accordion-container">
        <div className="accordion-content">
          <Accordion
            title="Will my name change instantly after using this service?"
            answer="No! The processing time for a name change request varies depending on the specific company and occasionally the season; for example, passport updates might take longer in the summer months. It's important to note that you can initiate the change request only after obtaining your marriage certificate, decree absolute, or deed poll. To facilitate the process and allow for multiple name change requests to be submitted simultaneously, it is advisable to have 3-4 authentic copies of your legal document on hand."
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

<div className="contact-section">
        <p className="contact-text">
          Do you have more questions? A specialist is here to help
        </p>
        <button className="contact-button">Contact Us</button>
      </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
