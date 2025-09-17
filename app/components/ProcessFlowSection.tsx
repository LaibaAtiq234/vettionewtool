import React, { useState, useEffect, useRef } from 'react';
import { web_assets } from "@/utils/constants";
// Image assets/Images
const ctaBackground =web_assets+ "MartechlandingPage/1c24b88ad19d9bf4e4f6427d50954d183e3108a5.png";
const lineGlow =web_assets+ "MartechlandingPage/320d00398837778306f2675a184c64ae2da92535.png";
const timeIcon =web_assets+ "MartechlandingPage/d274a7c3f704dc5c7b13d4bf06af4bdeea37fc20.svg";
const processingIcon =web_assets+ "MartechlandingPage/5f981017fac4fa217411e55eae73f49b426fa94d.svg";

export default function ProcessFlowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const processSteps = [
    {
      number: 1,
      title: "CV Received",
      description: "Easy Apply candidate submits resume",
      duration: 2000 // 2 seconds to complete
    },
    {
      number: 2,
      title: "AI Screening",
      description: "Instant CV analysis and scoring",
      duration: 2500 // 2.5 seconds to complete
    },
    {
      number: 3,
      title: "AI Interview",
      description: "Automated structured interview",
      duration: 3000 // 3 seconds to complete
    },
    {
      number: 4,
      title: "Ranking Generated",
      description: "Candidate ranked and scored",
      duration: 2000 // 2 seconds to complete
    }
  ];

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setActiveStep(0);
          setStepProgress(0);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate progress and step transitions
  useEffect(() => {
    if (!isVisible || activeStep >= processSteps.length) return;

    const currentStepDuration = processSteps[activeStep].duration;
    const progressInterval = 20; // Update every 20ms for smooth animation
    const progressIncrement = (100 / currentStepDuration) * progressInterval;

    const interval = setInterval(() => {
      setStepProgress(prev => {
        const newProgress = prev + progressIncrement;
        
        if (newProgress >= 100) {
          // Move to next step
          if (activeStep < processSteps.length - 1) {
            setTimeout(() => {
              setActiveStep(activeStep + 1);
              setStepProgress(0);
            }, 200); // Small delay before next step
          }
          return 100;
        }
        
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(interval);
  }, [activeStep, isVisible, processSteps.length]);
  return (
    <section ref={sectionRef} className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-['Inter',_sans-serif] font-bold text-[24px] md:text-[30px] lg:text-[36px] text-gray-900 mb-4 md:mb-5 lg:mb-6 leading-tight">
              Transform Your Hiring Process with AI-Powered Recruitment
            </h2>
            
            <p className="font-['Inter',_sans-serif] text-[16px] md:text-[18px] lg:text-[20px] text-[#757575] mb-6 md:mb-8 leading-relaxed">
              See how Sally captures every Easy Apply candidate, conducts AI interviews automatically, and delivers a perfect shortlist — all in real time.
            </p>

            {/* CTA Button */}
            <a 
              href="https://partner.vettio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-[215.04px] h-12 md:h-14 rounded-[10.747px] bg-[#7879f1] shadow-[0px_13.434px_62.634px_0px_rgba(120,121,241,0.2)] overflow-hidden mb-4 md:mb-6 group hover:bg-[#6869e0] transition-colors inline-flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-[57.27%_50%] bg-no-repeat mix-blend-hard-light rounded-[11.2px]"
                style={{ 
                  backgroundImage: `url('${ctaBackground}')`,
                  backgroundSize: '107.33% 101.13%'
                }}
              />
              <div className="absolute bottom-0.5 left-3.5 right-3.5 sm:w-[187.04px] h-[2.24px]">
                <div 
                  className="absolute inset-0 blur-[1px] rounded-[2.24px] overflow-hidden"
                  style={{ 
                    backgroundImage: `url('${lineGlow}')`, 
                    backgroundSize: '100% 896%', 
                    backgroundPosition: '0% 53.14%' 
                  }}
                />
              </div>
              <button className="relative font-['Inter',_sans-serif] font-bold text-[14px] md:text-[16px] text-white">
                Get Started Free
              </button>
            </a>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 lg:gap-6 items-start sm:items-center">
              <p className="font-['Inter',_sans-serif] text-[12px] md:text-[14px]">
                <span className="font-bold text-[#14ae5c] text-[14px] md:text-[16px]">✓ </span>
                <span className="text-[#1e1e1e]">No credit card required</span>
              </p>
              <div className="flex gap-1.5 items-center">
                <img src={timeIcon} alt="" className="w-[15px] md:w-[17px] h-[15px] md:h-[17px]" />
                <p className="font-['Inter',_sans-serif] text-[#1e1e1e] text-[12px] md:text-[14px]">
                  Setup in under 5 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Process Flow */}
          <div className="bg-white rounded-[16px] md:rounded-[18px] lg:rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] p-4 md:p-5 lg:p-6 mt-8 lg:mt-0">
            <div className="space-y-3 md:space-y-4 min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
              {/* Process Steps */}
              {processSteps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;
                const isPending = index > activeStep;
                
                return (
                  <div 
                    key={step.number}
                    className={`bg-white rounded-[12px] md:rounded-[14px] lg:rounded-[16px] p-4 md:p-4.5 lg:p-5 transition-all duration-300 transform-gpu ${
                      isActive 
                        ? 'shadow-[0px_0px_15px_0px_rgba(120,121,241,0.2),0px_0px_0px_1px_rgba(120,121,241,0.3)] md:shadow-[0px_0px_20px_0px_rgba(120,121,241,0.2),0px_0px_0px_1px_rgba(120,121,241,0.3)]' 
                        : isCompleted
                        ? 'border border-green-200 bg-green-50/30'
                        : 'border border-gray-200 opacity-60'
                    }`}
                    style={{
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                      minHeight: '137px'
                    }}
                  >
                    <div className="flex gap-3 md:gap-3.5 lg:gap-4">
                      {/* Step Number */}
                      <div 
                        className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-['Inter',_sans-serif] font-bold text-[14px] md:text-[15px] lg:text-[16px] shrink-0 transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#7879f1] text-white animate-pulse' 
                            : isCompleted
                            ? 'bg-green-500 text-white'
                            : 'bg-[#eceff3] text-slate-700'
                        }`}
                      >
                        {isCompleted ? '✓' : step.number}
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1">
                        <h3 className="font-['Inter',_sans-serif] font-bold text-[15px] md:text-[16px] lg:text-[18px] text-slate-900">
                          {step.title}
                        </h3>
                        <p className="font-['Inter',_sans-serif] font-medium text-[13px] md:text-[14px] lg:text-[15px] text-slate-600 mt-0.5 md:mt-1">
                          {step.description}
                        </p>
                        
                        {/* Processing State */}
                        {isActive && stepProgress < 100 && (
                          <div className="flex items-center gap-1.5 md:gap-2 mt-1 h-5">
                            <div className="animate-spin">
                              <img src={processingIcon} alt="" className="w-[10px] md:w-[11px] lg:w-[12.25px] h-3 md:h-3.5" />
                            </div>
                            <span className="font-['Inter',_sans-serif] font-semibold text-[12px] md:text-[13px] lg:text-[14px] text-[#7879f1]">
                              Processing...
                            </span>
                          </div>
                        )}
                        
                        {/* Progress Bar */}
                        {isActive && (
                          <div className="h-1.5 md:h-2 bg-gray-200 rounded-full mt-2 md:mt-2.5 lg:mt-3 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-[#7879f1] via-[#7879f1cc] to-[#7879f1aa] rounded-full transition-all duration-300 ease-linear"
                              style={{ 
                                width: `${stepProgress}%`,
                                boxShadow: stepProgress > 0 ? '0 0 10px rgba(120, 121, 241, 0.5)' : 'none'
                              }}
                            />
                          </div>
                        )}
                        
                        {/* Completed State */}
                        {isCompleted && (
                          <div className="flex items-center gap-1.5 md:gap-2 mt-1 h-5">
                            <span className="text-green-500 text-[12px] md:text-[13px]">✓</span>
                            <span className="font-['Inter',_sans-serif] font-semibold text-[12px] md:text-[13px] lg:text-[14px] text-green-600">
                              Completed
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Result Container - Always present but conditionally visible */}
              <div 
                className={`bg-[#eaf9f0] rounded-[12px] md:rounded-[14px] lg:rounded-[16px] p-4 md:p-4.5 lg:p-5 transition-all duration-500 ${
                  activeStep >= processSteps.length - 1 && stepProgress === 100
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-2 pointer-events-none'
                }`}
                style={{
                  minHeight: '60px'
                }}
              >
                <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3 flex-wrap">
                  <div className={`w-2.5 md:w-3 h-2.5 md:h-3 bg-[#2ecc71] rounded-full shrink-0 ${
                    activeStep >= processSteps.length - 1 && stepProgress === 100 ? 'animate-pulse' : ''
                  }`} />
                  <span className="font-['Inter',_sans-serif] font-bold text-[14px] md:text-[15px] lg:text-[16px] text-green-900">
                    Result:
                  </span>
                  <span className="font-['Inter',_sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-gray-800">
                    Sarah Johnson - 92% match
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}