import React, { useEffect, useState } from 'react';

const TrustpilotRating = () => {
  const [rating, setRating] = useState(null);
  const [excellentRate, setExcellentRate] = useState(null);

  useEffect(() => {
    // Load Trustpilot widget script
    const script = document.createElement('script');
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Fetch rating and excellent rate
    fetch('https://api.trustpilot.com/v1/business-units/YOUR_BUSINESS_UNIT_ID/stats')
      .then(response => response.json())
      .then(data => {
        setRating(data.trustScore.trustScore);
        setExcellentRate(data.trustScore.numberOfReviews);
      })
      .catch(error => console.error('Error fetching Trustpilot rating:', error));
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="trustpilot-widget" 
           data-locale="en-US"
           data-template-id="YOUR_TEMPLATE_ID"
           data-businessunit-id="YOUR_BUSINESS_UNIT_ID"
           data-style-height="52px"
           data-style-width="100%"
           data-theme="light"
           data-stars="4,5"
           data-review-languages="en">
        <a href="https://www.trustpilot.com/review/YOUR_WEBSITE_URL" 
           target="_blank" 
           rel="noopener noreferrer">Trustpilot</a>
      </div>
      <div className="flex items-center">
        <div className="mr-2">Rating: </div>
        <div>Excellent Rate: {excellentRate}</div>
      </div>
    </div>
  );
}

export default TrustpilotRating;
