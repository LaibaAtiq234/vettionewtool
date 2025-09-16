'use client'

export default function HowSallyWorks() {
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
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[420px] flex flex-col">
            <div className="h-[200px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-shrink-0">
              {/* Placeholder for Step 1 visual */}
              <div className="bg-white rounded-lg p-4 shadow-sm max-w-[280px]">
                <div className="text-sm font-semibold text-gray-700 mb-2">Let's get your candidates in</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                    <div className="w-8 h-8 bg-[#5d5fef] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✉</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Automatically Upload The Candidates Through Email Integration</div>
                      <div className="text-xs text-gray-500">CVs forwarded directly from your inbox</div>
                    </div>
                    <span className="bg-[#2a9d90] text-white text-xs px-2 py-0.5 rounded">Recommended</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded opacity-70">
                    <div className="w-8 h-8 bg-[#5d5fef] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">↑</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Manually Upload The Candidates</div>
                      <div className="text-xs text-gray-500">Upload files directly from your computer</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded opacity-70">
                    <div className="w-8 h-8 bg-[#5d5fef] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🔗</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-medium">Share A Link With Candidates</div>
                      <div className="text-xs text-gray-500">Get a link where candidates can upload their CV</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs font-medium text-[#7879f1] mb-2">STEP 1</div>
              <h3 className="text-xl font-bold text-[#020618] mb-3">
                Sally Automatically Imports Your Candidates
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                You can import candidates who apply via LinkedIn Easy Apply, through a shareable link, or by uploading candidates directly.
              </p>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[420px] flex flex-col">
            <div className="h-[200px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative flex-shrink-0">
              {/* Placeholder for Step 2 visual */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">📄</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Scanning CVs</div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                      <div className="w-1/4 h-full bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-500">0%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs font-medium text-[#7879f1] mb-2">STEP 2</div>
              <h3 className="text-xl font-bold text-[#020618] mb-3">
                Sally Reads Every CV & Interviews Candidates
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Sally reviews thousands of CVs within minutes, conducts structured interviews, and ranks candidates by skills and culture fit.
              </p>
            </div>
          </div>
        </div>

        {/* Step Cards Grid - Second Row (3 cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 3 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[420px] flex flex-col">
            <div className="h-[200px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-shrink-0">
              {/* Placeholder for Step 3 visual */}
              <div className="bg-white rounded-lg p-4 shadow-sm max-w-[320px]">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xl">👤</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-800">David Kim</div>
                      <div className="text-xs text-gray-500">Product Designer</div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="text-xs text-gray-600 mb-1">Video Interview</div>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-14 bg-gray-200 rounded flex items-center justify-center">
                        <span className="text-gray-500 text-xl">▶</span>
                      </div>
                      <div className="text-xs text-gray-700">3:45 min</div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 text-xs">✓</span>
                      <span className="text-xs text-green-700">Top candidate - Strong portfolio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs font-medium text-[#7879f1] mb-2">STEP 3</div>
              <h3 className="text-xl font-bold text-[#020618] mb-3">
                Get Your Ranked Shortlist With Video Interviews
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Sally presents your top candidates with structured video interviews, giving you deeper insights into their personality and communication skills.
              </p>
            </div>
          </div>

          {/* Step 4 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[420px] flex flex-col">
            <div className="h-[200px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-shrink-0">
              {/* Placeholder for Step 4 visual - Chat interface */}
              <div className="bg-white rounded-lg shadow-sm p-4 max-w-[320px] w-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">S</span>
                  </div>
                  <span className="text-sm font-semibold">Sally</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-purple-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-xs text-gray-700">Based on your requirements, I've shortlisted 5 candidates. Would you like to see more details about their experience?</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg rounded-tr-none ml-auto max-w-[70%]">
                    <p className="text-xs text-gray-700">Yes, show me their portfolios</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg rounded-tl-none">
                    <p className="text-xs text-gray-700">Here are their portfolios. David Kim has 8 years of experience in UX...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs font-medium text-[#7879f1] mb-2">STEP 4</div>
              <h3 className="text-xl font-bold text-[#020618] mb-3">
                Chat With Sally To Refine Your Shortlist
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Ask Sally anything about your candidates. She knows their skills, experience, and how they match your requirements.
              </p>
            </div>
          </div>

          {/* Step 5 Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg h-[420px] flex flex-col">
            <div className="h-[200px] bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden flex-shrink-0">
              {/* Placeholder for Step 5 visual - Final decision */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-6xl">✓</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 shadow-lg">
                  <p className="text-sm font-bold text-gray-800">3 Perfect Matches Found!</p>
                  <p className="text-xs text-gray-600">Ready to hire with confidence</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-xs font-medium text-[#7879f1] mb-2">STEP 5</div>
              <h3 className="text-xl font-bold text-[#020618] mb-3">
                Make Your Final Decision With Confidence
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
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