import React from 'react';

// Image assets/Images
const shieldIcon ="assets/Images/MartechlandingPage/7e0cbdcf42d562cee8fe9f27139eb769073b06b4.svg";
const internetIcon ="assets/Images/MartechlandingPage/4de4d8f40152ff344c5e0b7ae9288f7747d42ea0.svg";
const maskIcon ="assets/Images/MartechlandingPage/8bc9b2b57f82c3e9623cb22fc201f96d9aeb8c2e.svg";
const arrowIcon ="assets/Images/MartechlandingPage/640da9b0b1e832b3ff087a4b707687814553e1c5.svg";
const checkIcon ="assets/Images/MartechlandingPage/1960a5378b1cc4bd49ffecf81ae8df47931cc24e.svg";

const securityFeatures = [
  {
    icon: shieldIcon,
    title: "SOC-2 aligned controls & encryption",
    description: "End-to-end encryption with enterprise-grade security controls."
  },
  {
    icon: internetIcon,
    title: "GDPR compliant, regional data residency available",
    description: "Your data stays in your region with full GDPR compliance."
  },
  {
    icon: maskIcon,
    title: "Role-based access, PII masking & retention controls",
    description: "Granular permissions with automatic PII protection."
  }
];

const dataProcessingSteps = [
  {
    number: 1,
    title: "Data Input",
    description: "Encrypted CV data from LinkedIn/ATS",
    bgColor: "bg-[#5d5fef]/10",
    textColor: "text-[#5d5fef]"
  },
  {
    number: 2,
    title: "Secure Processing",
    description: "AI analysis in encrypted environment",
    bgColor: "bg-[#5d5fef]/10",
    textColor: "text-[#5d5fef]"
  },
  {
    number: 3,
    title: "Secure Storage",
    description: "Regional data centers with retention controls",
    bgColor: "bg-green-100",
    textColor: "text-emerald-500"
  }
];

export default function SecurityPrivacySection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6" style={{ background: 'linear-gradient(to bottom, rgba(244, 244, 244, 0.4), rgba(244, 244, 244, 0.4))' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Content - Security Features */}
          <div>
            <h2 className="font-['Inter',_sans-serif] font-bold text-[24px] md:text-[30px] lg:text-[36px] text-gray-900 mb-6 md:mb-8 leading-tight">
              Enterprise-grade Security &<br className="hidden sm:block" />
              <span className="sm:hidden">privacy</span>
              <span className="hidden sm:inline">privacy</span>
            </h2>
            
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3 items-start">
                  {/* Icon */}
                  <div className="w-[30px] md:w-[32px] lg:w-[35px] h-10 md:h-11 lg:h-12 bg-[#5d5fef]/10 rounded-[6px] md:rounded-[7px] lg:rounded-[8px] flex items-center justify-center shrink-0">
                    <img
                      src={feature.icon}
                      alt=""
                      className="w-5 md:w-5.5 lg:w-6 h-5 md:h-5.5 lg:h-6 filter brightness-0 saturate-100"
                      style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(2234%) hue-rotate(237deg) brightness(104%) contrast(101%)' }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-['Inter',_sans-serif] font-bold text-[15px] md:text-[16px] lg:text-[18px] text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-['Inter',_sans-serif] text-[13px] md:text-[14px] lg:text-[16px] text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Data Processing Flow */}
          <div className="bg-white rounded-[12px] md:rounded-[14px] lg:rounded-[16px] border border-gray-100 shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1)] p-5 md:p-6 lg:p-8">
            <h4 className="font-['Inter',_sans-serif] font-bold text-[14px] md:text-[15px] lg:text-[16px] text-gray-900 mb-4 md:mb-5 lg:mb-6">
              Data Processing Flow
            </h4>
            
            {/* Process Steps */}
            <div className="space-y-2 mb-4 md:mb-5 lg:mb-6">
              {dataProcessingSteps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-[6px] md:rounded-[7px] lg:rounded-[8px] p-3 md:p-3.5 lg:p-4 flex items-center justify-between group hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3">
                    {/* Step Number */}
                    <div className={`${step.bgColor} w-5 md:w-5.5 lg:w-6 h-5 md:h-5.5 lg:h-6 rounded-full flex items-center justify-center`}>
                      <span className={`font-['Poppins',_sans-serif] font-bold text-[10px] md:text-[11px] lg:text-[12px] ${step.textColor}`}>
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Step Content */}
                    <div>
                      <p className="font-['Inter',_sans-serif] font-semibold text-[12px] md:text-[13px] lg:text-[14px] text-gray-900">
                        {step.title}
                      </p>
                      <p className="font-['Inter',_sans-serif] text-[10px] md:text-[11px] lg:text-[12px] text-gray-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow Icon */}
                  <img src={arrowIcon} alt="" className="w-3 md:w-3.5 h-3 md:h-4 opacity-50" />
                </div>
              ))}
            </div>

            {/* Success Message */}
            <div className="bg-[#eaf9f0] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] p-3 md:p-3.5 lg:p-4 flex items-center gap-2 md:gap-2.5 lg:gap-3">
              <img src={checkIcon} alt="" className="w-[10px] md:w-[11px] lg:w-[12.25px] h-3 md:h-3.5" />
              <span className="font-['Inter',_sans-serif] text-[13px] md:text-[14px] lg:text-[16px] text-[#2ecc71] leading-snug md:leading-normal">
                Your data never leaves your approved region.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}