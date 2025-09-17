'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckIcon, XIcon } from './Icons'

interface HiringOption {
  title: string
  iconSrc: string
  pros: string[]
  cons: string[]
}

const hiringOptions: HiringOption[] = [
  {
    title: 'Enable Easy Apply',
    iconSrc: '/assets/Images/MartechLandingPage/linkedin-icon.png',
    pros: ['Huge applicant volume'],
    cons: ['Download each CV manually', 'Unqualified noise']
  },
  {
    title: 'Rely On ATS Filters',
    iconSrc: '/assets/Images/MartechLandingPage/cv-icon.png',
    pros: ['Basic automation'],
    cons: ['Keyword blind spots', 'Great candidates filtered out']
  },
  {
    title: 'Drive Applicants To Your Career Site',
    iconSrc: '/assets/Images/MartechLandingPage/interview-icon.png',
    pros: ['You now have to screen a lot less applications'],
    cons: ['You miss out on great candidates']
  },
  {
    title: 'Domain Expertise',
    iconSrc: '/assets/Images/MartechLandingPage/medal-icon.png',
    pros: ['Human expertise'],
    cons: ['$15k–$30k per hire', 'Still limited by bandwidth and domain expertise']
  }
]

export default function HiringOptions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null) // For mobile tap

  return (
    <section className="w-full py-8 md:py-12 lg:py-14 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-6 md:mb-10 lg:mb-12">
          Why Your Current Hiring Options Fail You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-14">
          {hiringOptions.map((option, index) => (
            <div
              key={index}
              className="relative group h-[280px] sm:h-[300px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {/* Collapsed state */}
              <div className={`
                absolute inset-0 bg-[#f6f8ff] border-2 border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md
                transition-all duration-300 ease-in-out
                ${(hoveredIndex === index || activeIndex === index) ? 'opacity-0 invisible' : 'opacity-100 visible'}
                ${(hoveredIndex !== null || activeIndex !== null) && hoveredIndex !== index && activeIndex !== index ? 'scale-95' : 'scale-100'}
              `}>
                <div className="flex flex-col items-center justify-center h-full gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src={option.iconSrc}
                      alt={option.title}
                      width={32}
                      height={32}
                      className="object-contain w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-center text-[#020618] px-2">
                    {option.title}
                  </h3>
                </div>
              </div>

              {/* Expanded state */}
              <div className={`
                absolute inset-0 bg-[#fef2f2] border-2 border-[#ffa2a2]
                rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl transition-all duration-300 ease-in-out
                ${(hoveredIndex === index || activeIndex === index) ? 'opacity-100 visible md:scale-105 z-10' : 'opacity-0 invisible scale-95'}
              `}>
                <div className="flex flex-col items-center gap-3 md:gap-4 h-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src={option.iconSrc}
                      alt={option.title}
                      width={32}
                      height={32}
                      className="object-contain w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-center text-[#020618] min-h-[40px] md:min-h-[48px] flex items-center">
                    {option.title}
                  </h3>
                  <div className="w-full space-y-1.5 md:space-y-2">
                    {option.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-2 md:gap-3">
                        <div className="scale-75 md:scale-100">
                          <CheckIcon />
                        </div>
                        <span className="text-xs md:text-sm text-black">{pro}</span>
                      </div>
                    ))}
                    {option.cons.map((con, idx) => (
                      <div key={idx} className="flex items-start gap-2 md:gap-3">
                        <div className="scale-75 md:scale-100">
                          <XIcon />
                        </div>
                        <span className="text-xs md:text-sm text-black flex-1">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 md:gap-4">
          <button className="px-6 md:px-8 py-2.5 md:py-3 bg-[#7879f1] text-white font-bold text-sm md:text-base rounded-lg hover:bg-[#6869e0] transition-colors">
            Get Started For Free
          </button>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs md:text-sm text-[#314158]">
            <div className="flex items-center gap-2 justify-center">
              <div className="relative w-4 h-4 md:w-5 md:h-5">
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
            <div className="flex items-center gap-2 justify-center">
              <div className="relative w-4 h-4 md:w-5 md:h-5">
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
  )
}