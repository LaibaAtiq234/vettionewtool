'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HowSallyWorks() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) return 0
        return prev + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#7879f1] to-[#5d5fef]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white capitalize text-center">
            How Sally Hires Candidates
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal text-white text-center max-w-4xl leading-relaxed px-4">
            Sally handles the entire hiring process, from CV screening to structured interviews and
            candidate ranking. She delivers a clear, AI-backed shortlist so you can save time,
            reduce bias, and hire with confidence.
          </p>
        </div>

        {/* Step Cards Grid - First Row (2 cards centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 lg:mb-8 lg:max-w-[800px] lg:mx-auto">
          {/* Step 1 Card */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg h-auto sm:h-[450px] md:h-[500px] lg:h-[541px] flex flex-col">
            <div className="h-[180px] sm:h-[200px] md:h-[240px] lg:h-[269px] rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: `url('/assets/Images/MartechLandingPage/step1image.png')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs md:text-sm font-medium text-[#5d5fef] mb-1 md:mb-2">STEP 1</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#020618] mb-2 md:mb-3 capitalize">
                Sally Automatically imports your candidates
              </h3>
              <p className="text-sm md:text-base text-[#314158] leading-relaxed">
                You can import candidates who apply via LinkedIn Easy Apply, through a shareable link, or by uploading candidates directly.
              </p>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg h-auto sm:h-[450px] md:h-[500px] lg:h-[541px] flex flex-col">
            <div className="h-[180px] sm:h-[200px] md:h-[240px] lg:h-[269px] rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden relative flex-shrink-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <div
                className="absolute inset-0 opacity-40 rounded-xl"
                style={{
                  backgroundImage: `url('/assets/Images/MartechLandingPage/step2-bg.png')`,
                  backgroundSize: '77.92% 100%',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className="absolute bottom-3 md:bottom-6 left-1/2 transform -translate-x-1/2 bg-[#f6f8ff]/90 backdrop-blur rounded-lg p-2 md:p-3 shadow-lg border border-white z-10 scale-75 sm:scale-80 md:scale-90">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#9747ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
                      <path d="M12 2C17.523 2 22 6.477 22 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#2b2b2b]">Scanning CVs</div>
                    <div className="w-32 h-2 bg-[#ececec] rounded-full mt-1 overflow-hidden relative">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#ff2b2b] rounded-full transition-all duration-150 ease-linear"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#585858] tabular-nums w-10 text-right flex-shrink-0">
                    {percentage}%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs md:text-sm font-medium text-[#5d5fef] mb-1 md:mb-2">STEP 2</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#020618] mb-2 md:mb-3 capitalize">
                Sally Reads every CV & interviews candidates
              </h3>
              <p className="text-sm md:text-base text-[#314158] leading-relaxed">
                Sally reviews thousands of CVs within minutes, conducts structured interviews, and ranks candidates by skills and culture fit.
              </p>
            </div>
          </div>
        </div>

        {/* Step Cards Grid - Second Row (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Step 3 Card */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg h-auto sm:h-[450px] md:h-[500px] lg:h-[541px] flex flex-col">
            <div className="h-[180px] sm:h-[200px] md:h-[240px] lg:h-[269px] rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: `url('/assets/Images/MartechLandingPage/step3image.png')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs md:text-sm font-medium text-[#5d5fef] mb-1 md:mb-2">STEP 3</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#020618] mb-2 md:mb-3 capitalize">
                Get Your Ranked Shortlist With Video Interviews
              </h3>
              <p className="text-sm md:text-base text-[#314158] leading-relaxed">
                Sally presents your top candidates with structured video interviews, giving you deeper insights into their personality and communication skills.
              </p>
            </div>
          </div>

          {/* Step 4 Card */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg h-auto sm:h-[450px] md:h-[500px] lg:h-[541px] flex flex-col">
            <div className="h-[180px] sm:h-[200px] md:h-[240px] lg:h-[269px] rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: `url('/assets/Images/MartechLandingPage/step4image.png')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs md:text-sm font-medium text-[#5d5fef] mb-1 md:mb-2">STEP 4</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#020618] mb-2 md:mb-3 capitalize">
                Chat With Sally To Refine Your Shortlist
              </h3>
              <p className="text-sm md:text-base text-[#314158] leading-relaxed">
                Ask Sally anything about your candidates. She knows their skills, experience, and how they match your requirements.
              </p>
            </div>
          </div>

          {/* Step 5 Card */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg h-auto sm:h-[450px] md:h-[500px] lg:h-[541px] flex flex-col sm:col-span-2 lg:col-span-1">
            <div className="h-[180px] sm:h-[200px] md:h-[240px] lg:h-[269px] rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  backgroundImage: `url('/assets/Images/MartechLandingPage/step5image.png')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs md:text-sm font-medium text-[#5d5fef] mb-1 md:mb-2">STEP 5</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#020618] mb-2 md:mb-3 capitalize">
                Make Your Final Decision With Confidence
              </h3>
              <p className="text-sm md:text-base text-[#314158] leading-relaxed">
                Review Sally's comprehensive analysis, compare top candidates side-by-side, and make your hiring decision with complete confidence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-3 md:gap-4 mt-8 md:mt-10 lg:mt-12">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button className="bg-white text-[#5d5fef] px-4 sm:px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors">
              Get Started For Free
            </button>
            <button className="bg-white/10 backdrop-blur border border-white/20 text-white px-4 sm:px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-medium text-xs sm:text-sm hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              <Image src="/assets/Images/MartechLandingPage/play.svg" alt="Play" width={16} height={16} className="brightness-0 invert w-4 h-4" />
              Book a Demo
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-white/90">
            <div className="flex items-center gap-2 justify-center">
              <Image src="/assets/Images/MartechLandingPage/check-circle-one.svg" alt="Check" width={16} height={16} className="brightness-0 invert w-4 h-4 sm:w-5 sm:h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Image src="/assets/Images/MartechLandingPage/mingcute_time-line.svg" alt="Time" width={16} height={16} className="brightness-0 invert w-4 h-4 sm:w-5 sm:h-5" />
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}