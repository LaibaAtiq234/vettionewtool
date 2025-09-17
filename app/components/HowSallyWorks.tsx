'use client'

import { useState, useEffect } from 'react'

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
    <section className="w-full py-20 bg-gradient-to-b from-[#7879f1] to-[#5d5fef]">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-6 mb-16">
          <h1 className="text-6xl font-bold text-white capitalize">
            How Sally Hires Candidates
          </h1>
          <p className="text-xl font-normal text-white text-center max-w-4xl leading-relaxed">
            Sally handles the entire hiring process, from CV screening to structured interviews and
            candidate ranking. She delivers a clear, AI-backed shortlist so you can save time,
            reduce bias, and hire with confidence.
          </p>
        </div>

        {/* Step Cards Grid - First Row (2 cards centered) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 lg:max-w-[800px] lg:mx-auto">
          {/* Step 1 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[541px] flex flex-col">
            <div className="h-[269px] rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
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
              <div className="text-sm font-medium text-[#5d5fef] mb-2">STEP 1</div>
              <h3 className="text-2xl font-bold text-[#020618] mb-3 capitalize">
                Sally Automatically imports your candidates
              </h3>
              <p className="text-base text-[#314158] leading-relaxed">
                You can import candidates who apply via LinkedIn Easy Apply, through a shareable link, or by uploading candidates directly.
              </p>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[541px] flex flex-col">
            <div className="h-[269px] rounded-xl mb-4 flex items-center justify-center overflow-hidden relative flex-shrink-0 bg-gradient-to-br from-purple-50 to-purple-100">
              <div
                className="absolute inset-0 opacity-40 rounded-xl"
                style={{
                  backgroundImage: `url('/assets/Images/MartechLandingPage/HowSallyWorks/step2-bg.png')`,
                  backgroundSize: '77.92% 100%',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-[#f6f8ff]/90 backdrop-blur rounded-lg p-3 shadow-lg border border-white z-10 scale-90">
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
              <div className="text-sm font-medium text-[#5d5fef] mb-2">STEP 2</div>
              <h3 className="text-2xl font-bold text-[#020618] mb-3 capitalize">
                Sally Reads every CV & interviews candidates
              </h3>
              <p className="text-base text-[#314158] leading-relaxed">
                Sally reviews thousands of CVs within minutes, conducts structured interviews, and ranks candidates by skills and culture fit.
              </p>
            </div>
          </div>
        </div>

        {/* Step Cards Grid - Second Row (3 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 3 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[541px] flex flex-col">
            <div className="h-[269px] rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
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
              <div className="text-sm font-medium text-[#5d5fef] mb-2">STEP 3</div>
              <h3 className="text-2xl font-bold text-[#020618] mb-3 capitalize">
                Get Your Ranked Shortlist With Video Interviews
              </h3>
              <p className="text-base text-[#314158] leading-relaxed">
                Sally presents your top candidates with structured video interviews, giving you deeper insights into their personality and communication skills.
              </p>
            </div>
          </div>

          {/* Step 4 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[541px] flex flex-col">
            <div className="h-[269px] rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
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
              <div className="text-sm font-medium text-[#5d5fef] mb-2">STEP 4</div>
              <h3 className="text-2xl font-bold text-[#020618] mb-3 capitalize">
                Chat With Sally To Refine Your Shortlist
              </h3>
              <p className="text-base text-[#314158] leading-relaxed">
                Ask Sally anything about your candidates. She knows their skills, experience, and how they match your requirements.
              </p>
            </div>
          </div>

          {/* Step 5 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[541px] flex flex-col">
            <div className="h-[269px] rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-shrink-0 relative">
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
              <div className="text-sm font-medium text-[#5d5fef] mb-2">STEP 5</div>
              <h3 className="text-2xl font-bold text-[#020618] mb-3 capitalize">
                Make Your Final Decision With Confidence
              </h3>
              <p className="text-base text-[#314158] leading-relaxed">
                Review Sally's comprehensive analysis, compare top candidates side-by-side, and make your hiring decision with complete confidence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="flex items-center gap-3">
            <button className="bg-white text-[#5d5fef] px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors">
              Get Started For Free
            </button>
            <button className="bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-white/20 transition-colors flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6.5L13.5 10L8 13.5V6.5Z" fill="currentColor"/>
              </svg>
              Book a Demo
            </button>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 6V10L12.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}