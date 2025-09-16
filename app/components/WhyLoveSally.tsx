'use client'

export default function WhyLoveSally() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-5xl font-bold text-[#020618] text-center">
            Why Recruiters And Hiring Managers Love Sally
          </h1>
        </div>

        {/* Feature sections - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            {/* Sally 24/7 Candidate Expert */}
            <div className="bg-[#f3faff] rounded-[40px] p-12">
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-col gap-6 text-center">
                <h2 className="text-4xl font-extrabold text-[#020618]">
                  Sally, Your 24/7 Candidate <span className="text-[#5d5fef]">Expert</span>
                </h2>
                <p className="text-xl text-[#62748e]">
                  Sally knows every candidate inside out and is always available
                </p>
              </div>

              {/* Sally Badge */}
              <div className="bg-gradient-to-r from-purple-500 to-purple-400 backdrop-blur-md rounded-full px-8 py-6 flex items-center gap-4 shadow-lg border-2 border-white/30">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                  <img src="/sally-avatar.png" alt="Sally" className="w-10 h-10 rounded-lg" />
                </div>
                <div className="text-white">
                  <div className="text-2xl font-semibold">Sally</div>
                  <div className="text-sm opacity-90">Your Domain-Expert AI Recruiter</div>
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618]">Instantly recall any candidate Sally has interviewed or reviewed</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618]">Ask in natural language: "Show me the three most relevant candidates"</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[#020618]">No filters, no complexity .. just clear answers to your hiring questions</p>
                </div>
              </div>
            </div>
          </div>

            {/* Domain-Expert AI Interviewer */}
            <div className="bg-gradient-to-b from-[#462aac] to-[#a3b3ff] rounded-[40px] p-12 text-white">
            <div className="flex flex-col gap-8 items-center justify-center">
              <div className="flex flex-col gap-6 text-center">
                <h2 className="text-4xl font-extrabold">
                  Your Domain-Expert AI Interviewer
                </h2>
                <p className="text-xl">
                  Sally doesn't just screen, she interviews like a true domain expert.
                </p>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M15 10L19 14L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 14H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>Conducts thousands of interviews simultaneously</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 12V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>Tailors every interview to your specific job requirements</p>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-6 h-6 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M7 12L12 7L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p>Understands responses and asks smart, relevant follow-ups</p>
                </div>
              </div>

              {/* Interview Preview */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4 w-full">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="bg-gray-50 p-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm text-gray-600 ml-2">Recording of the AI Interview</span>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm font-semibold text-gray-800 mb-4">Domain Focused Interview</p>
                    <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                      <div className="text-gray-400">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <button className="p-1.5 bg-white border border-gray-300 rounded-full">
                        <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none">
                          <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M21 3L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 6H3V21H18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                      <button className="p-1.5 bg-white border border-gray-300 rounded-full">
                        <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none">
                          <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M5 8L12 1L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-20 -top-10 space-y-3">
                  <div className="bg-black/90 backdrop-blur text-white rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-200/20 rounded-full flex items-center justify-center">
                      <span>🎯</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Domain</p>
                      <p className="text-xs opacity-90">Software Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12">
            {/* LinkedIn Easy Apply Section */}
            <div className="bg-[#e6f3ff] rounded-[40px] p-12">
          <div className="flex flex-col gap-8 items-center justify-center">
            {/* LinkedIn Icon */}
            <div className="w-24 h-24 bg-gradient-to-br from-[#0077B5] to-[#00A0DC] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-5xl font-bold">in</span>
            </div>

            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-4xl font-bold text-[#020618]">
                Automatic candidate imports from{' '}
                <span className="text-[#0077B5]">LinkedIn Easy Apply</span>
              </h2>
              <p className="text-lg text-[#62748e]">
                Never lose a candidate again because Sally keeps your pipeline full.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">Connect your email once, and you're done</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">Sally automatically imports all applicants from LinkedIn Easy Apply</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">Sally continuously syncs new applicants as they apply in the future</p>
              </div>
            </div>

            {/* LinkedIn UI Preview */}
            <div className="bg-white rounded-2xl p-4 shadow-lg w-full">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-3 rounded-t-lg flex items-center justify-between">
                <span className="text-white text-sm font-semibold">BECAUSE EVERY HIRE MATTERS</span>
                <span className="text-white font-bold">VETTIO</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Vettio</p>
                    <p className="text-sm text-gray-600">Technology company</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <button className="bg-[#0077B5] text-white px-6 py-2 rounded-full font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 11.8954 15.1046 11 14 11C12.8954 11 12 11.8954 12 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Easy Apply
                  </button>
                  <button className="bg-white text-[#0077B5] border border-[#0077B5] px-6 py-2 rounded-full font-medium">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* Super Enriched Candidate Profiles */}
            <div className="bg-white border-2 border-gray-100 rounded-[40px] p-12">
          <div className="flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-4xl font-bold text-[#020618]">
                Super Enriched Candidate Profiles
              </h2>
              <p className="text-lg text-[#62748e]">
                Go beyond CVs with AI-powered insights
              </p>
            </div>

            {/* Candidate Cards Preview */}
            <div className="flex gap-4 justify-center">
              <div className="bg-white rounded-xl border border-gray-200 p-4 w-48">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">93%</span>
                </div>
                <p className="font-semibold text-sm mb-1">Eva Salam</p>
                <p className="text-xs text-gray-600 mb-2">Software Developer</p>
                <p className="text-xs text-gray-500">eva.salam@gmail.com</p>
                <p className="text-xs text-gray-500 mt-2">Dubai, UAE</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 w-48">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-200 rounded-full"></div>
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">91%</span>
                </div>
                <p className="font-semibold text-sm mb-1">Sandra Bowman</p>
                <p className="text-xs text-gray-600 mb-2">Software Developer</p>
                <p className="text-xs text-gray-500">sandra.b@gmail.com</p>
                <p className="text-xs text-gray-500 mt-2">Dubai, UAE</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4 w-48">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-200 rounded-full"></div>
                  <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded">89%</span>
                </div>
                <p className="font-semibold text-sm mb-1">Pierre Ford</p>
                <p className="text-xs text-gray-600 mb-2">Software Developer</p>
                <p className="text-xs text-gray-500">pierre.f@gmail.com</p>
                <p className="text-xs text-gray-500 mt-2">Montreal, Canada</p>
              </div>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">View the most relevant experience at a glance</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">See each candidate's match against every requirement</p>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-6 h-6 text-[#5d5fef] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#020618]">Compare candidates with AI-driven scores and evaluations</p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full mt-16 flex flex-col items-center gap-4">
          <button className="bg-[#5d5fef] text-white px-8 py-3 rounded-lg font-medium text-base hover:bg-[#4a4cd8] transition-colors">
            Get Started For Free
          </button>
          <div className="flex items-center gap-6 text-sm text-[#64748b]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5d5fef]" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#5d5fef]" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 6V10L12.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}