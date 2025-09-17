"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckIcon, XIcon, ClockIcon } from "./Icons";

const BeforeAfterComparison = () => {
  const [beforeSallyVisible, setBeforeSallyVisible] = useState<number[]>([]);
  const [afterSallyVisible, setAfterSallyVisible] = useState<number[]>([]);
  const [badgesVisible, setBadgesVisible] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation sequence: Before Sally -> After Sally -> Badge (repeat)
            const animationSequence = [
              { type: 'before', index: 1 },
              { type: 'after', index: 1 },
              { type: 'badge', index: 1 },
              { type: 'before', index: 2 },
              { type: 'after', index: 2 },
              { type: 'badge', index: 2 },
              { type: 'before', index: 3 },
              { type: 'after', index: 3 },
              { type: 'badge', index: 3 },
              { type: 'before', index: 4 },
              { type: 'after', index: 4 },
              { type: 'badge', index: 4 },
              { type: 'before', index: 5 },
              { type: 'after', index: 5 },
              { type: 'before', index: 6 },
              { type: 'after', index: 6 },
            ];

            let currentIndex = 0;
            const animationInterval = setInterval(() => {
              if (currentIndex < animationSequence.length) {
                const current = animationSequence[currentIndex];

                if (current.type === 'before') {
                  setBeforeSallyVisible(prev => [...prev, current.index]);
                } else if (current.type === 'after') {
                  setAfterSallyVisible(prev => [...prev, current.index]);
                } else if (current.type === 'badge') {
                  setBadgesVisible(prev => [...prev, current.index]);
                }

                currentIndex++;
              } else {
                clearInterval(animationInterval);
              }
            }, 300); // 300ms delay between each animation
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
    <section ref={sectionRef} className="pt-12 md:pt-16 pb-6 md:pb-8 px-4 md:px-8 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/Images/MartechLandingPage/before-after-bg.svg"
          alt=""
          fill
          className="object-cover opacity-100"
          style={{ filter: 'brightness(0.3) contrast(1.5) saturate(1.2)' }}
          priority
        />
      </div>

      {/* Top purple gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-32 md:h-64 bg-gradient-to-b from-[#7879f1]/15 via-[#5d5fef]/5 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 md:mb-12 px-4">
          From CV Chaos to Qualified Shortlists in Minutes
        </h2>

        <div className="relative max-w-full lg:max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-r from-gray-50 via-purple-50 to-purple-100 rounded-xl md:rounded-2xl shadow-xl border-2 border-white relative overflow-hidden">
            {/* Glass abstraction sphere - hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute left-[650px] top-[-140px] w-[800px] h-[800px] pointer-events-none">
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
                style={{
                  backgroundImage: `url('/assets/Images/MartechLandingPage/glass abstraction sphere.png')`,
                  transform: 'scale(1.1)',
                }}
              />
            </div>

            {/* Floating badges - hidden on mobile, visible on desktop */}
            <div className="hidden lg:block absolute right-[3%] top-[20%] space-y-5 z-10">
              {/* Badge 1 - Purple/Blue */}
              <div className={`bg-white/90 backdrop-blur-md rounded-2xl rounded-br-sm px-3 py-3 flex items-center gap-2 shadow-lg border border-gray-200 ml-16 max-w-[180px] transform transition-all duration-700 ${badgesVisible.includes(1) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                   style={{ transitionDelay: '100ms' }}>
                <div className="bg-[rgba(165,166,246,0.6)] rounded-full p-1 flex-shrink-0">
                  <Image
                    src="/assets/Images/MartechLandingPage/check-circle-one.svg"
                    alt=""
                    width={14}
                    height={14}
                    style={{ filter: 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(7466%) hue-rotate(246deg) brightness(84%) contrast(143%)' }}
                  />
                </div>
                <span className="text-xs text-[#314158] leading-tight">100+ hours saved on manual screening</span>
              </div>

              {/* Badge 2 - Yellow/Orange */}
              <div className={`bg-white/90 backdrop-blur-md rounded-2xl rounded-br-sm px-3 py-3 flex items-center gap-2 shadow-lg border border-gray-200 -ml-8 max-w-[180px] transform transition-all duration-700 ${badgesVisible.includes(2) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                   style={{ transitionDelay: '200ms' }}>
                <div className="bg-[rgba(249,157,27,0.4)] rounded-full p-1 flex-shrink-0">
                  <Image
                    src="/assets/Images/MartechLandingPage/check-circle-one.svg"
                    alt=""
                    width={14}
                    height={14}
                    style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(4deg) brightness(95%) contrast(97%)' }}
                  />
                </div>
                <span className="text-xs text-[#314158] leading-tight">50% higher recruiter productivity</span>
              </div>

              {/* Badge 3 - Indigo */}
              <div className={`bg-white/90 backdrop-blur-md rounded-2xl rounded-br-sm px-3 py-3 flex items-center gap-2 shadow-lg border border-gray-200 -ml-12 max-w-[200px] transform transition-all duration-700 ${badgesVisible.includes(3) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                   style={{ transitionDelay: '300ms' }}>
                <div className="bg-[#5d5fef] rounded-full p-1 flex-shrink-0">
                  <Image src="/assets/Images/MartechLandingPage/check-circle-one.svg" alt="" width={14} height={14} />
                </div>
                <span className="text-xs text-[#314158] leading-tight">One-click Easy Apply = 2x more applicants</span>
              </div>

              {/* Badge 4 - Light Indigo */}
              <div className={`bg-white/90 backdrop-blur-md rounded-2xl rounded-br-sm px-3 py-3 flex items-center gap-2 shadow-lg border border-gray-200 ml-12 max-w-[180px] transform transition-all duration-700 ${badgesVisible.includes(4) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                   style={{ transitionDelay: '400ms' }}>
                <div className="bg-[#7879f1] rounded-full p-1 flex-shrink-0">
                  <Image src="/assets/Images/MartechLandingPage/check-circle-one.svg" alt="" width={14} height={14} />
                </div>
                <span className="text-xs text-[#314158] leading-tight">1,000+ CVs screened in minutes</span>
              </div>
            </div>

            <div className="relative flex flex-col lg:flex-row">
              {/* Before Sally Column */}
              <div className={`bg-white lg:border-r border-b lg:border-b-0 border-gray-200 transition-all duration-500 w-full lg:w-[387px] ${beforeSallyVisible.length > 0 ? 'opacity-100' : 'opacity-30'}`}>
                <div className="p-4 md:p-6 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#020618] mb-3">Before Sally</h3>
                </div>
                <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-2">
                  <div className={`flex items-start gap-3 transition-all duration-500 ${beforeSallyVisible.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <XIcon color="#62748e" size={20} />
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed max-w-[280px]">
                      Keyword-based ATS → false positives & negatives
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${beforeSallyVisible.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <XIcon color="#62748e" size={20} />
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed max-w-[280px]">
                      100s of irrelevant CVs, days wasted screening
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${beforeSallyVisible.includes(3) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <XIcon color="#62748e" size={20} />
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed max-w-[280px]">
                      Hiring managers spend hours interviewing wrong candidates
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${beforeSallyVisible.includes(4) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <XIcon color="#62748e" size={20} />
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed max-w-[280px]">
                      "Easy Apply" floods you with junk applications
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${beforeSallyVisible.includes(5) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <XIcon color="#62748e" size={20} />
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed max-w-[280px]">
                      Disable "Easy Apply" → miss out on great talent
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${beforeSallyVisible.includes(6) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <XIcon color="#62748e" size={20} />
                    </div>
                    <p className="text-sm text-[#62748e] leading-relaxed max-w-[280px]">
                      Manual downloads of 1000s of CVs
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className={`flex items-center gap-2 text-[#1e1e1e] transition-all duration-500 ${beforeSallyVisible.includes(6) ? 'opacity-100' : 'opacity-0'}`}>
                    <ClockIcon color="#ef4444" size={20} />
                    <span className="text-sm font-medium">Time to hire: 6-8 weeks</span>
                  </div>
                </div>
              </div>

              {/* After Sally Column */}
              <div className={`bg-transparent lg:border-r border-transparent transition-all duration-500 w-full lg:w-[387px] ${afterSallyVisible.length > 0 ? 'opacity-100' : 'opacity-30'}`}>
                <div className="p-4 md:p-6 pb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-[#020618] mb-3">After Sally</h3>
                </div>
                <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-2">
                  <div className={`flex items-start gap-3 transition-all duration-500 ${afterSallyVisible.includes(1) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#5d5fef] flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Context-based matching with domain expertise → accurate shortlists every time
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${afterSallyVisible.includes(2) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#5d5fef] flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Reviews 1000s of CVs in minutes → saves days of manual effort
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${afterSallyVisible.includes(3) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#5d5fef] flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Runs first interviews → you only invest time in top talent
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${afterSallyVisible.includes(4) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#5d5fef] flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Handles 1000s of Easy Apply CVs → filters the noise, finds the gems
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${afterSallyVisible.includes(5) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#5d5fef] flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Keep Easy Apply on → capture more talent without extra work
                    </p>
                  </div>
                  <div className={`flex items-start gap-3 transition-all duration-500 ${afterSallyVisible.includes(6) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-[#5d5fef] flex items-center justify-center">
                        <CheckIcon color="#ffffff" size={12} />
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      Auto-imports every CV → faster hiring process
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <div className={`flex items-center gap-2 bg-[#5d5fef] text-white px-3 py-1.5 rounded-full inline-flex transition-all duration-500 ${beforeSallyVisible.includes(6) ? 'opacity-100' : 'opacity-0'}`}>
                    <ClockIcon color="#ffffff" size={20} />
                    <span className="text-sm font-medium">Time to hire: 1-2 weeks</span>
                  </div>
                </div>
              </div>

              {/* Remaining space for glass sphere */}
              <div className="flex-1">
                {/* Glass sphere is positioned absolutely */}
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default BeforeAfterComparison;