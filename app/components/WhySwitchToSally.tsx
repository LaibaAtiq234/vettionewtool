"use client";

import React from "react";
import Image from "next/image";
import { CheckIcon, XIcon } from "./Icons";

const WhySwitchToSally = () => {
  const features = [
    { text: "Captures 100% of Easy Apply candidates", isNew: true },
    { text: "AI interviews every candidate", isNew: true },
    { text: "Instant CV screening", isNew: false },
    { text: "Domain expert evaluation", isNew: false },
    { text: "Explainable AI decisions", isNew: false },
    { text: "Setup time", isNew: false },
    { text: "Cost per hire", isNew: false },
    { text: "Candidate experience", isNew: false },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-purple-50/30 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Why switch to Sally?
          </h2>
          <p className="text-gray-500 text-center">
            See the difference AI-powered hiring makes
          </p>
        </div>

        {/* Comparison Table */}
        <div className="flex gap-8 justify-center">
          {/* Features Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#7879f1] px-6 py-1.5 rounded-full flex items-center gap-2 self-start">
              <Image
                src="/assets/Images/MartechLandingPage/switchtosallyvector.svg"
                alt="Features"
                width={16}
                height={17}
              />
              <span className="text-2xl font-medium text-[#f6f8ff]">Features</span>
            </div>

            <div className="w-[353px] py-8 flex flex-col justify-between h-[446px]">
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-3 min-h-[24px]">
                    <span className="text-sm font-medium text-gray-900 flex-1">
                      {feature.text}
                    </span>
                    {feature.isNew && (
                      <div className="border border-[#7879f1] rounded-full px-3 py-1 flex items-center gap-1">
                        <span className="text-xs font-medium text-[#5d5fef]">New</span>
                        <Image
                          src="/assets/Images/MartechLandingPage/new-sparkle.svg"
                          alt="New"
                          width={16}
                          height={16}
                        />
                      </div>
                    )}
                  </div>
                  {index < features.length - 1 && (
                    <div className="w-full h-px bg-gray-200"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Sally's Method Column */}
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/Images/MartechLandingPage/sally-logo.svg"
                alt="Sally Logo"
                width={33}
                height={32}
              />
              <h3 className="text-2xl font-medium text-gray-900">
                <span className="font-extrabold text-[#5d5fef]">Sally's</span> Method
              </h3>
            </div>

            <div className="bg-white rounded-[17px] border border-gray-200/40 shadow-lg w-[331px] h-[446px] relative overflow-hidden">
              {/* Glass-like gradient background */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a5a6f6]/30 via-[#7879f1]/20 to-transparent"></div>
                <div className="absolute top-[-50%] left-[-20%] w-[200%] h-[200%] bg-gradient-radial from-[#5d5fef]/15 via-transparent to-transparent blur-2xl"></div>
                <div className="absolute bottom-[-30%] right-[-30%] w-[150%] h-[150%] bg-gradient-radial from-[#7879f1]/10 via-transparent to-transparent blur-xl"></div>
                <div className="absolute inset-0 backdrop-blur-[2px] bg-white/30"></div>
              </div>
              <div className="relative py-8 flex flex-col justify-between h-full items-center z-10">
                <div className="w-6 h-6 rounded-full bg-[#5d5fef] flex items-center justify-center">
                  <CheckIcon color="#ffffff" size={14} />
                </div>
                <div className="w-full h-px bg-purple-100"></div>

                <div className="w-6 h-6 rounded-full bg-[#5d5fef] flex items-center justify-center">
                  <CheckIcon color="#ffffff" size={14} />
                </div>
                <div className="w-full h-px bg-purple-100"></div>

                <div className="w-6 h-6 rounded-full bg-[#5d5fef] flex items-center justify-center">
                  <CheckIcon color="#ffffff" size={14} />
                </div>
                <div className="w-full h-px bg-purple-100"></div>

                <div className="w-6 h-6 rounded-full bg-[#5d5fef] flex items-center justify-center">
                  <CheckIcon color="#ffffff" size={14} />
                </div>
                <div className="w-full h-px bg-purple-100"></div>

                <div className="w-6 h-6 rounded-full bg-[#5d5fef] flex items-center justify-center">
                  <CheckIcon color="#ffffff" size={14} />
                </div>
                <div className="w-full h-px bg-purple-100"></div>

                <div className="border border-[#7879f1] rounded-full px-3 py-1 bg-[#f6f8ff]/10">
                  <span className="text-base font-medium text-[#5d5fef]">5 minutes</span>
                </div>
                <div className="w-full h-px bg-purple-100"></div>

                <div className="border border-[#7879f1] rounded-full px-3 py-1 bg-[#f6f8ff]/10">
                  <span className="text-base font-medium text-[#5d5fef]">Free</span>
                </div>
                <div className="w-full h-px bg-purple-100"></div>

                <div className="border border-[#7879f1] rounded-full px-3 py-1 bg-[#f6f8ff]/10">
                  <span className="text-base font-medium text-[#5d5fef]">Seamless</span>
                </div>
              </div>
              <div className="absolute inset-0 border-[3px] border-transparent rounded-[17px] pointer-events-none"></div>
            </div>
          </div>

          {/* Traditional Method Column */}
          <div className="flex flex-col gap-6 items-center">
            <h3 className="text-2xl font-medium text-gray-900 h-[32px] flex items-center">
              Traditional Method
            </h3>

            <div className="bg-white rounded-[17px] border border-gray-200 shadow-lg w-[331px] h-[446px] relative overflow-hidden">
              <div className="relative py-8 flex flex-col justify-between h-full items-center">
                <div className="w-6 h-6 flex items-center justify-center">
                  <XIcon color="#62748e" size={24} />
                </div>
                <div className="w-full h-px bg-gray-200"></div>

                <div className="w-6 h-6 flex items-center justify-center">
                  <XIcon color="#62748e" size={24} />
                </div>
                <div className="w-full h-px bg-gray-200"></div>

                <div className="w-6 h-6 flex items-center justify-center">
                  <XIcon color="#62748e" size={24} />
                </div>
                <div className="w-full h-px bg-gray-200"></div>

                <div className="w-6 h-6 flex items-center justify-center">
                  <XIcon color="#62748e" size={24} />
                </div>
                <div className="w-full h-px bg-gray-200"></div>

                <div className="w-6 h-6 flex items-center justify-center">
                  <XIcon color="#62748e" size={24} />
                </div>
                <div className="w-full h-px bg-gray-200"></div>

                <div className="border border-gray-200 rounded-full px-3 py-1">
                  <span className="text-base font-medium text-[#62748e]">Days/weeks</span>
                </div>
                <div className="w-full h-px bg-gray-200"></div>

                <div className="border border-gray-200 rounded-full px-3 py-1">
                  <span className="text-base font-medium text-[#62748e]">$15k-$30k</span>
                </div>
                <div className="w-full h-px bg-gray-200"></div>

                <div className="border border-gray-200 rounded-full px-3 py-1">
                  <span className="text-base font-medium text-[#62748e]">Fragmented</span>
                </div>
              </div>
              <div className="absolute inset-0 border-[3px] border-gray-200 rounded-[17px] pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <button className="bg-[#7879f1] hover:bg-[#6668e3] text-white font-bold px-8 py-3 rounded-xl transition-colors">
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
    </section>
  );
};

export default WhySwitchToSally;