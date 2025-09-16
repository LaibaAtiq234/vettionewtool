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
    iconSrc: '/assets/Images/MartechLandingPage/icons/linkedin-icon.png',
    pros: ['Huge applicant volume'],
    cons: ['Download each CV manually', 'Unqualified noise']
  },
  {
    title: 'Rely On ATS Filters',
    iconSrc: '/assets/Images/MartechLandingPage/icons/cv-icon.png',
    pros: ['Basic automation'],
    cons: ['Keyword blind spots', 'Great candidates filtered out']
  },
  {
    title: 'Drive Applicants To Your Career Site',
    iconSrc: '/assets/Images/MartechLandingPage/icons/interview-icon.png',
    pros: ['You now have to screen a lot less applications'],
    cons: ['You miss out on great candidates']
  },
  {
    title: 'Domain Expertise',
    iconSrc: '/assets/Images/MartechLandingPage/icons/medal-icon.png',
    pros: ['Human expertise'],
    cons: ['$15k–$30k per hire', 'Still limited by bandwidth and domain expertise']
  }
]

export default function HiringOptions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-14 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Why Your Current Hiring Options Fail You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {hiringOptions.map((option, index) => (
            <div
              key={index}
              className="relative group h-[300px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Collapsed state */}
              <div className={`
                absolute inset-0 bg-[#f6f8ff] border-2 border-slate-200 rounded-2xl p-6 shadow-md
                transition-all duration-300 ease-in-out
                ${hoveredIndex === index ? 'opacity-0 invisible' : 'opacity-100 visible'}
                ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-95' : 'scale-100'}
              `}>
                <div className="flex flex-col items-center justify-center h-full gap-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src={option.iconSrc}
                      alt={option.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-center text-[#020618] px-2">
                    {option.title}
                  </h3>
                </div>
              </div>

              {/* Expanded state */}
              <div className={`
                absolute inset-0 bg-[#fef2f2] border-2 border-[#ffa2a2]
                rounded-2xl p-6 shadow-xl transition-all duration-300 ease-in-out
                ${hoveredIndex === index ? 'opacity-100 visible scale-105 z-10' : 'opacity-0 invisible scale-95'}
              `}>
                <div className="flex flex-col items-center gap-4 h-full">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src={option.iconSrc}
                      alt={option.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-center text-[#020618] min-h-[48px] flex items-center">
                    {option.title}
                  </h3>
                  <div className="w-full space-y-2">
                    {option.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm text-black">{pro}</span>
                      </div>
                    ))}
                    {option.cons.map((con, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <XIcon />
                        <span className="text-sm text-black flex-1">{con}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button className="px-8 py-3 bg-[#7879f1] text-white font-bold rounded-lg hover:bg-[#6869e0] transition-colors">
            Get Started For Free
          </button>
          <div className="flex gap-6 text-sm text-[#314158]">
            <div className="flex items-center gap-1">
              <CheckIcon color="#5d5fef" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="#5d5fef" strokeWidth="2"/>
                <path d="M10 6V10L13 13" stroke="#5d5fef" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}