import React, { useState } from "react";

const Accordion = ({ title, answer, isOpenByDefault }) => {
  const [accordionOpen, setAccordionOpen] = useState(isOpenByDefault || false);

  return (
    <div className="py-2" style={{ paddingBottom: '32px', paddingTop: '32px' }}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span style={{ fontFamily: "Montserrat", fontSize: '28px', fontWeight: '400', lineHeight: '34.13px', color: '#101727', paddingBottom: '24px' }}>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-green-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden" style={{ fontFamily: "Montserrat", fontSize: '18px', fontWeight: '400', lineHeight: '28.8px', color: '#000000'}}>{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
