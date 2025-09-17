import React from 'react';
// Image assets/Images
const recruiterIcon ="assets/Images/MartechlandingPage/5d93bfcdf192a86284932d3b1fc9fd1a8b95e5f7.svg";
const clockIcon ="assets/Images/MartechlandingPage/375978c023db0b7e5064f3893035981baab92069.svg";
const targetIcon ="assets/Images/MartechlandingPage/ebc79f193ab6b60329bb283994b4db4c906b0f63.svg";

const metrics = [
  {
    icon: recruiterIcon,
    value: "200+",
    title: "Active Recruiters",
    subtitle: "Growing weekly"
  },
  {
    icon: clockIcon,
    value: "60%",
    title: "Time Saved",
    subtitle: "Average improvement"
  },
  {
    icon: targetIcon,
    value: "90%",
    title: "Accuracy Rate",
    subtitle: "AI screening precision"
  }
];

export default function MetricsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="font-['Inter',_sans-serif] font-bold text-[24px] md:text-[30px] lg:text-[36px] text-gray-900 text-center mb-6 md:mb-8">
          Recruiters are loving Sally
        </h2>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white rounded-[16px] md:rounded-[18px] lg:rounded-[20px] border border-gray-200 shadow-[0px_4px_8.6px_0px_rgba(0,0,0,0.1)] p-4 md:p-5 lg:p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="w-10 md:w-11 lg:w-12 h-7 md:h-8 lg:h-9 mb-2">
                <img
                  src={metric.icon}
                  alt=""
                  className="w-full h-full filter brightness-0 saturate-100"
                  style={{ filter: 'brightness(0) saturate(100%) invert(31%) sepia(98%) saturate(2234%) hue-rotate(237deg) brightness(104%) contrast(101%)' }}
                />
              </div>
              
              {/* Value */}
              <div className="font-['Inter',_sans-serif] font-bold text-[20px] md:text-[22px] lg:text-[24px] text-slate-900 mb-1.5 md:mb-2">
                {metric.value}
              </div>
              
              {/* Title */}
              <div className="font-['Inter',_sans-serif] font-medium text-[13px] md:text-[14px] text-black">
                {metric.title}
              </div>
              
              {/* Subtitle */}
              <div className="font-['Inter',_sans-serif] font-normal text-[11px] md:text-[12px] text-neutral-500 mt-0.5 md:mt-1">
                {metric.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}