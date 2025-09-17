"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckIcon, XIcon, ClockIcon } from "./Icons";

const BeforeAfterComparison = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [showFloatingBadges, setShowFloatingBadges] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation sequence showing steps
            let step = 0;
            const stepInterval = setInterval(() => {
              step++;
              setCurrentStep(step);

              // Start item animations for each step
              if (step > 0) {
                setTimeout(() => {
                  setVisibleItems(step);
                }, 100);
              }

              // Show floating badges after third step
              if (step >= 3) {
                setTimeout(() => {
                  setShowFloatingBadges(true);
                }, 300);
              }

              if (step >= 6) {
                clearInterval(stepInterval);
              }
            }, 800); // 800ms delay between each step
          }
        });
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
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          From CV Chaos to Qualified Shortlists in Minutes
        </h2>

        <div className="relative">
          <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative">
            {/* Glass abstraction sphere background - positioned behind After Sally section */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none">
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90"
                style={{
                  backgroundImage: `url('/assets/Images/MartechLandingPage/glass abstraction sphere.png')`,
                }}
              />
            </div>

            {/* Floating badges over the glass sphere */}
            <div className={`absolute right-4 md:right-12 top-8 md:top-12 space-y-2 z-10 transition-all duration-1000 ${showFloatingBadges ? 'opacity-100' : 'opacity-0'}`}>
              {/* Badge 1 - Purple/Blue */}
              <div className={`bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md border border-white/50 max-w-[200px] transform transition-all duration-700 ${showFloatingBadges ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                   style={{ transitionDelay: '100ms' }}>
                <div className="bg-purple-100 rounded-full p-1 flex-shrink-0">
                  <CheckIcon color="#7c3aed" size={14} />
                </div>
                <span className="text-xs text-gray-700 leading-tight">100+ hours saved on manual screening</span>
              </div>

              {/* Badge 2 - Yellow/Orange */}
              <div className={`bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md border border-white/50 ml-6 max-w-[180px] transform transition-all duration-700 ${showFloatingBadges ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                   style={{ transitionDelay: '200ms' }}>
                <div className="bg-orange-100 rounded-full p-1 flex-shrink-0">
                  <CheckIcon color="#ea580c" size={14} />
                </div>
                <span className="text-xs text-gray-700 leading-tight">50% higher recruiter productivity</span>
              </div>

              {/* Badge 3 - Indigo */}
              <div className={`bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md border border-white/50 ml-3 max-w-[200px] transform transition-all duration-700 ${showFloatingBadges ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                   style={{ transitionDelay: '300ms' }}>
                <div className="bg-indigo-100 rounded-full p-1 flex-shrink-0">
                  <CheckIcon color="#6366f1" size={14} />
                </div>
                <span className="text-xs text-gray-700 leading-tight">One-click Easy Apply = 2x more applicants</span>
              </div>

              {/* Badge 4 - Light Indigo */}
              <div className={`bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md border border-white/50 ml-8 max-w-[180px] transform transition-all duration-700 ${showFloatingBadges ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                   style={{ transitionDelay: '400ms' }}>
                <div className="bg-purple-100 rounded-full p-1 flex-shrink-0">
                  <CheckIcon color="#7c3aed" size={14} />
                </div>
                <span className="text-xs text-gray-700 leading-tight">1,000+ CVs screened in minutes</span>
              </div>
            </div>

            <div className="relative grid md:grid-cols-2 gap-0">
              {/* Before Sally Column */}
              <div className={`bg-white/95 backdrop-blur-sm border-r border-gray-200 transition-all duration-500 ${currentStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#020618] mb-4">Before Sally</h3>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 1 && visibleItems >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center">
                        <XIcon color="#9ca3af" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed">
                      Keyword-based ATS → false positives & negatives
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 2 && visibleItems >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center">
                        <XIcon color="#9ca3af" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed">
                      100s of irrelevant CVs, days wasted screening
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 3 && visibleItems >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center">
                        <XIcon color="#9ca3af" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed">
                      Hiring managers spend hours interviewing wrong candidates
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 4 && visibleItems >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center">
                        <XIcon color="#9ca3af" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed">
                      "Easy Apply" floods you with junk applications
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 5 && visibleItems >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center">
                        <XIcon color="#9ca3af" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed">
                      Disable "Easy Apply" → miss out on great talent
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 6 && visibleItems >= 6 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded border-2 border-gray-400 flex items-center justify-center">
                        <XIcon color="#9ca3af" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed">
                      Manual downloads of 1000s of CVs
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className={`flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1.5 rounded-full inline-flex transition-all duration-500 ${currentStep >= 6 && visibleItems >= 6 ? 'opacity-100' : 'opacity-0'}`}>
                    <ClockIcon color="#dc2626" size={16} />
                    <span className="text-sm font-medium">Time to hire: 6-8 weeks</span>
                  </div>
                </div>
              </div>

              {/* After Sally Column */}
              <div className={`bg-transparent transition-all duration-500 ${currentStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#020618] mb-4">After Sally</h3>
                </div>
                <div className="px-6 pb-6 space-y-3">
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 1 && visibleItems >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Context-based matching with domain expertise → accurate shortlists every time
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 2 && visibleItems >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Reviews 1000s of CVs in minutes → saves days of manual effort
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 3 && visibleItems >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Runs first interviews → you only invest time in top talent
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 4 && visibleItems >= 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Handles 1000s of Easy Apply CVs → filters the noise, finds the gems
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 5 && visibleItems >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Keep Easy Apply on → capture more talent without extra work
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${currentStep >= 6 && visibleItems >= 6 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Auto-imports every CV → faster hiring
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className={`flex items-center gap-2 bg-purple-500 text-white px-3 py-1.5 rounded-full inline-flex transition-all duration-500 ${currentStep >= 6 && visibleItems >= 6 ? 'opacity-100' : 'opacity-0'}`}>
                    <ClockIcon color="#ffffff" size={16} />
                    <span className="text-sm font-medium">Time to hire: 1-2 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              Get Started For Free
            </button>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="/assets/Images/MartechLandingPage/check-circle-one.svg"
                    alt="Check"
                    width={20}
                    height={20}
                    className="filter brightness-0 saturate-100"
                    style={{ filter: 'invert(24%) sepia(98%) saturate(1952%) hue-rotate(196deg) brightness(94%) contrast(101%)' }}
                  />
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-5 h-5">
                  <Image
                    src="/assets/Images/MartechLandingPage/mingcute_time-line.svg"
                    alt="Time"
                    width={20}
                    height={20}
                    className="filter brightness-0 saturate-100"
                    style={{ filter: 'invert(24%) sepia(98%) saturate(1952%) hue-rotate(196deg) brightness(94%) contrast(101%)' }}
                  />
                </div>
                <span>Setup in under 5 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;