import React from 'react'
import Logo from '../assets/logo2.png'

const Footer = () => {
  return (
    <footer class="bg-[#1A1A1C] text-white py-8" style={{ height: '527px'}}>
        <div class="container mx-auto px-4 flex flex-col items-center" style={{width: "900px"}}>
            <img src={Logo} alt="Logo" class="h-12 mb-4" />
            <p class="text-center text-md leading-8" style={{ fontFamily: 'Rubik', fontSize: '16px', fontWeight: '400', lineHeight: '35px'}}> GovAssist is not affiliated with any United States government agency or department. Costs for consulting services do NOT include any government application, medical examination, filing, or biometric fees. This website does not provide legal advice and we are not a law firm. None of our customer service representatives are lawyers and they also do not provide legal advice. We are a private, internet-based travel and immigration consultancy provider dedicated to helping individuals travel to the United States. You may apply by yourself directly at travel.state.gov or at uscis.gov. GovAssist is affiliated with the UT law firm GovAssist Legal which provides legal services on immigration matters. Only licensed immigration professionals can provide advice, explanation, opinion, or recommendation about possible legal rights, remedies, defenses, options, selection of forms or strategies. <br />
Copyright © 2016-2023 GovAssist, LLC All Rights Reserved</p>
        </div>
    </footer>

  )
}

export default Footer